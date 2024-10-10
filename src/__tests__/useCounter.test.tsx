import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../hooks/useCounter';

test('increments and decrements the counter', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
        result.current.increment();
    });
    expect(result.current.count).toBe(1);

    act(() => {
        result.current.decrement();
    });
    expect(result.current.count).toBe(0);
});