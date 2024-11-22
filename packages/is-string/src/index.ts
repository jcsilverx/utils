const isString = <T>(v: T): v is T & string => typeof v === "string";

export { isString };
