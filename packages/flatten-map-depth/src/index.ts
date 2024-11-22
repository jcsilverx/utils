import { map } from "@flt-ui2/map";
import { flattenDepth } from "@flt-ui2/flatten-depth";

import type { TCollection } from "@flt-ui2/types";

const flattenMapDepth = <T, U>(
  collection: TCollection<T>,
  iteratee: (
    value: T,
    keyOrIndex: string | number,
    collection: TCollection<T>,
  ) => U,
  depth: number = 1,
): U[] => flattenDepth(map(collection, iteratee), depth);

export { flattenMapDepth };
