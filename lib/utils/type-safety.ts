// builtin

// external

// internal

export function throwIfNotExhaustive<T>(variant: T): never {
	throw new Error(`Type check was not exhaustive, missing ${JSON.stringify(variant)}`);
}
