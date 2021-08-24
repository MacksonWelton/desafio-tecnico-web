import {screen, render } from '@testing-library/react'
import Header from '.'

test('render header with title', () => {
    render(<Header/>)

    const title = screen.getByTitle('Drink Fácil')

    expect(title).toBeInTheDocument();
})