const reproduction = require("./reproduction");

const status = 400;
const message = "test error message";

global.fetch = jest.fn();

it("should allow mockImplementation to return a new Response each time it is called", async () => {
  fetch.mockImplementation(() =>
    Promise.resolve(new Response(JSON.stringify({ message }), { status }))
  );

  await expect(() => reproduction()).rejects.toThrow(message);
  await expect(() => reproduction()).rejects.toStrictEqual(new Error(message));
});

it("should allow mockResolveValue to return a new Response each time it is called", async () => {
  fetch.mockResolvedValue(
    new Response(JSON.stringify({ message }), { status })
  );

  await expect(() => reproduction()).rejects.toThrow(message);
  await expect(() => reproduction()).rejects.toStrictEqual(new Error(message));
  // await expect(() => reproduction()).rejects.toThrow(
  //   "Body is unusable: Body has already been read"
  // );
});
