import Home from "./index";
import { render } from "@testing-library/react";

describe("Home comp test", () => {
  it("Home comp", () => {
    const { container } = render(<Home />);
    expect(container).toBeDefined();
  });
});
