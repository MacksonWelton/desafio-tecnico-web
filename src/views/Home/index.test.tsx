import { render, screen, fireEvent } from "@testing-library/react";

import Home from './index'


test("renders the app", () => {
    render(<Home />)

    const searchInput = screen.getByRole('textbox')
    const button = screen.getByRole('button')

    expect(searchInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
});