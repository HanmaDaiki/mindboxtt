import { render, screen, fireEvent } from '@testing-library/react';

import { FormAddItem } from './';

describe('Tests FormAddItem component', () => {
  test('submit with value', () => {
    const onSubmit = jest.fn();
    render(<FormAddItem onSubmit={onSubmit}  />);
    const form = screen.getByTestId('form');
    const input = screen.getByTestId('input');

    fireEvent.change(input, {target: {value: 'test'}});
    fireEvent.submit(form);
    expect(onSubmit).toHaveBeenCalled();
  });

  test('submit with empty value', () => {
    const onSubmit = jest.fn();
    render(<FormAddItem onSubmit={onSubmit}  />);
    const form = screen.getByTestId('form');
    const input = screen.getByTestId('input');

    fireEvent.change(input, {target: {value: ''}});
    fireEvent.submit(form);
    expect(onSubmit).not.toHaveBeenCalled();
  });
});