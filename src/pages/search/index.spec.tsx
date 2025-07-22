import Search from "./index";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

describe("Search comp test", () => {
  it("no title return empty", () => {
    const { container } = render(<Search />);
    expect(container).toBeEmptyDOMElement();
  });

  it("render title", () => {
    render(<Search title="title" />);
    const element = screen.getByText(/title/i);
    expect(element).toBeInTheDocument();
  });

  it("calls onMount callback in useEffect", () => {
    const mockOnMount = jest.fn();
    render(<Search title="Test" onMount={mockOnMount} />);
    expect(mockOnMount).toHaveBeenCalledTimes(1);
  });
});
