import { render, screen } from '@testing-library/react';
import { Hello } from '../components/Hello';

test('renders hello message', () => {
    render(<Hello name="Artur" />);
    const helloMessage = screen.getByText(/Hello, Artur!/i);
    expect(helloMessage).toBeInTheDocument();
});
