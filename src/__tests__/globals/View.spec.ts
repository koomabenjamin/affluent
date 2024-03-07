import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import View from "@/components/View.vue";

// describe.concurrent('Global View Component', () => {
// describe.only('Global View Component', () => {
describe('Global View Component', () => {

  const viewText = "Hello world from the view component.";

  it("render span correctly", async () => {
    const viewId = "viewId";
    render(View, {
      props: { element: "span", id: viewId },
      slots: { default: viewText }
    });

    const view = await screen.findByText(viewText);
    expect(view.id).toBe(viewId);
    expect(view.innerHTML).toBe(viewText);
    expect(view.nodeName).toBe("SPAN");
  });

  it("snapshot matches", () => {
    const wrapper = render(View, { props: { element: "div" } });
    expect(wrapper).toMatchSnapshot();
  });

});