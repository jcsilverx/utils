const isFunction = <T>(v: T): v is T & Function => typeof v === "function";

export { isFunction };
