import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home page", () => {
  it("renders the christmas heading", () => {
    render(<Home />);
    expect(screen.getByText("I love christmas")).toBeInTheDocument();
  });
});