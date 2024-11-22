import type { TSESLint } from "@typescript-eslint/utils";

type ConfigWithExtends = TSESLint.FlatConfig.Config & {
  extends?: FlatConfigWithExtends[];
};

type FlatConfigWithExtends = ConfigWithExtends | FlatConfigWithExtends[];

const config = (
  ...configs: FlatConfigWithExtends[]
): TSESLint.FlatConfig.ConfigArray => {
  const flattened = flattenDepth(configs, Infinity) as ConfigWithExtends[];

  return flattenMapDepth(flattened, (configWithExtends) => {
    const { extends: _extends, ...config } = configWithExtends;

    if (!_extends || _extends.length === 0) return config;

    const extendsFlattened = flattenDepth(
      _extends,
      Infinity,
    ) as ConfigWithExtends[];

    return [
      ...map(extendsFlattened, (extend) => {
        const name = [config.name, extend.name].filter(Boolean).join("__");

        return {
          ...extend,
          ...(name && {
            name,
          }),
          ...(config.files && {
            files: config.files,
          }),
          ...(config.ignores && {
            ignores: config.ignores,
          }),
        };
      }),
      config,
    ];
  }) as TSESLint.FlatConfig.ConfigArray;
};

/**
 * Utils
 */

type TCollection<T> = T[] | Record<string, T>;

const map = <T, U>(
  collection: TCollection<T>,
  iteratee: (
    value: T,
    keyOrIndex: string | number,
    collection: TCollection<T>,
  ) => U,
): U[] => {
  if (Array.isArray(collection))
    return Array.from(collection, (value, index) =>
      iteratee(value, index, collection),
    );

  return Object.keys(collection).map((key) =>
    iteratee(collection[key]!, key, collection),
  );
};

const flattenDepth = <T>(array: T[], depth: number = 1): T[] => {
  if (array.length === 0) return [];

  return array.reduce<T[]>((acc, curr) => {
    if (Array.isArray(curr) && depth > 0) {
      acc.push(...flattenDepth(curr, depth - 1));
    } else {
      acc.push(curr);
    }

    return acc;
  }, []);
};

const flattenMapDepth = <T, U>(
  collection: TCollection<T>,
  iteratee: (
    value: T,
    keyOrIndex: string | number,
    collection: TCollection<T>,
  ) => U,
  depth: number = 1,
): U[] => flattenDepth(map(collection, iteratee), depth);

export { config };
export type { FlatConfigWithExtends };
