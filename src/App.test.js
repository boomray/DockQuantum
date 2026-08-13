// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DockQuantum title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DockQuantum/i);
    expect(titleElement).toBeInTheDocument();
});
