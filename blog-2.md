# How Generics Help Build Reusable and Strictly Typed Code in TypeScript

## Introduction

Generics in TypeScript allow developers to create reusable components, functions, and classes that work with different data types while still maintaining strict type safety.

Instead of writing separate functions for different types, Generics let us write flexible code that adapts to any data structure.

---

# Example Without Generics

```ts id="6t7p1m"
function getString(value: string): string {
  return value;
}
```

This function only works with strings. If we want to use numbers or objects, we would need to create more functions.

---

# Example With Generics

```ts id="7h3nqp"
function getValue<T>(value: T): T {
  return value;
}
```

Now the function works with any type.

```ts id="3u9k2x"
getValue<string>("Hello");
getValue<number>(10);
getValue<boolean>(true);
```

TypeScript automatically keeps the correct type for each value.

---

# Why Generics Are Useful

Generics make code:

* Reusable
* Flexible
* Strictly typed
* Easier to maintain

For example, a single generic function can work with arrays, objects, or API responses without losing type safety.

---

# Real-World Example

```ts id="1z5rfd"
function getFirstItem<T>(items: T[]): T {
  return items[0];
}
```

Usage:

```ts id="5wv8bn"
getFirstItem<number>([1, 2, 3]);
getFirstItem<string>(["A", "B", "C"]);
```

The function stays reusable while TypeScript ensures the correct types are returned.

---

# Conclusion

Generics are one of TypeScript’s most powerful features. They allow developers to write reusable code that works with different data types while still keeping strict type safety. This helps reduce duplication, improves flexibility, and makes applications more scalable and reliable.
