# How Pick and Omit Utility Types Keep Code DRY in TypeScript

## Introduction

In TypeScript, we often create a large master interface containing all properties of an object. But different parts of an application may only need some of those properties.

Instead of rewriting smaller interfaces manually, TypeScript provides `Pick` and `Omit` utility types to create reusable slices of the main interface. This helps keep code DRY (Don't Repeat Yourself).

---

# Using `Pick`

`Pick` selects specific properties from an interface.

## Example

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type UserProfile = Pick<User, "id" | "name" | "email">;
```

Here, `UserProfile` only contains `id`, `name`, and `email`.

---

# Using `Omit`

`Omit` removes specific properties from an interface.

## Example

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PublicUser = Omit<User, "password">;
```

Here, `PublicUser` contains all properties except `password`.

---

# How They Prevent Code Duplication

Without utility types, developers may rewrite similar interfaces multiple times. This creates repeated code and makes maintenance difficult.

Using `Pick` and `Omit` allows us to reuse the main interface instead of duplicating code. If the master interface changes, all derived types update automatically.

This keeps the code:

* Cleaner
* Reusable
* Easier to maintain
* Less error-prone

---

# Conclusion

`Pick` and `Omit` are powerful TypeScript utility types that help developers create smaller, specialized versions of a master interface without rewriting code. By reducing duplication, they help maintain the DRY principle and make applications more scalable and maintainable.
