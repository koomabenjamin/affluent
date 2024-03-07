import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/vue";
import MyPokemon from "@/components/samples/MyPokemon.vue";

// describe.concurrent('Global View Component', () => {
// describe.only('Global View Component', () => {
describe('Global View Component', () => {

  it("render span correctly", async () => {
    // arranga
    render(MyPokemon);

    const getPokemonButton = await screen.findByText("Get Pokemon");
    await fireEvent.click(getPokemonButton);

    const pokenDomItem = await screen.findByText("bulbasaur");

    // assert
    expect(pokenDomItem.innerHTML).toBe("bulbasaur");
  });

});