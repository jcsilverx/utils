const isNumber = <T>(v: T): v is T & number => typeof v === "number";

export { isNumber };
