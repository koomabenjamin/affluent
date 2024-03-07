import { describe, it, expect, beforeAll, afterEach, afterAll } from "vitest";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { pokemons } from "./__tests__/mocked-data/pokemons";
import "whatwg-fetch";

export const handlers = [
  // http.get("https://pokeapi.co/api/v2/pokemon", (req, res, ctx) => {
  //   return res(ctx.status(200), ctx.json(pokemons));
  // }),
  http.get("https://pokeapi.co/api/v2/pokemon", ({request}) => {
    return HttpResponse.json(pokemons)
  })
];
const server = setupServer(...handlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());