import type { TCollection } from "@flt-ui2/types";

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

export { map };
export type { TCollection };
