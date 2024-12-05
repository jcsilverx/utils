const merge = <T>(dst: Record<string, any>, ...srcs: T[]): T => {
  for (const _srcs of srcs) {
    for (const src in _srcs) {
      const value = _srcs[src];

      if (Array.isArray(value)) {
        (dst[src] ??= []).push(...value);
      } else if (value instanceof Set) {
        dst[src] = new Set([...(dst[src] ?? []), ...value]);
      } else if (value instanceof Map) {
        dst[src] = new Map([...(dst[src] ?? []), ...value]);
      } else if (typeof value === "object" && value !== null) {
        merge((dst[src] ??= {}), value);
      } else {
        dst[src] = value;
      }
    }
  }

  return dst as T;
};


const mergeConfig = <T>(defaults: T, overrides: T): T =>
  merge({}, defaults, overrides);

export { mergeConfig };
