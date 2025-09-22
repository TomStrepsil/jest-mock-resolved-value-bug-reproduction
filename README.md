# Jest Bug Reproduction

To illustrate https://github.com/jestjs/jest/issues/15835, specifically confusion that may come from taking [the following documentation](https://jestjs.io/docs/mock-function-api#mockfnmockresolvedvaluevalue) verbatim:

> ## `mockFn.mockResolvedValue(value)`
>
> Shorthand for:
>
> `jest.fn().mockImplementation(() => Promise.resolve(value));`

If `value` is constructed (e.g. `new Response()`) then is a singleton when used with `mockResolvedValue`, but transient with `mockImplementation`
