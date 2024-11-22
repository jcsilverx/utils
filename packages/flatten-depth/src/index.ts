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

export { flattenDepth };
