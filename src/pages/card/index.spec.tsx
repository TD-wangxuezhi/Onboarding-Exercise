import Card from "./index";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

describe("Card component test", () => {
  it("renders without crashing", () => {
    const { container } = render(<Card />);
    expect(container).toBeDefined();
  });

  it("calls handleClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Card handleClick={handleClick} />);
    const cardElement = screen.getByText(/card/i);
    cardElement.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("calls handleClick when clicked using user-event", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<Card handleClick={handleClick} />);
    const cardElement = screen.getByText(/card/i);

    await user.click(cardElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
