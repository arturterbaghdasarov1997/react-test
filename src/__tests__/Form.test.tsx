import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from '../components/Form';

test('submits the form with a name', () => {
    const handleSubmit = jest.fn();
    render(<Form onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Artur' } });
    fireEvent.click(screen.getByText(/submit/i));

    expect(handleSubmit).toHaveBeenCalledWith('Artur');
});