import { render, screen } from '@testing-library/react';

import { Task } from './';
import { TItemList } from '../../types/TItemList';

const mockTask: TItemList = {
  id: 1,
  text: 'Text',
  status: false
}

const mockTaskClearText: TItemList = {
  id: 1,
  text: '',
  status: false
}

describe('Tests Task component', () => {
  test('render', () => {
    render(<Task task={mockTask} updateStatusTask={(id) => {}} />);

    expect(screen.getByRole('listitem')).toBeInTheDocument();
    expect(screen.getByText('Text')).toBeInTheDocument();
  });

  test('not render clear data.text', () => {
    render(<Task task={mockTaskClearText} updateStatusTask={(id) => {}} />);

    expect(screen.queryByRole('listitem')).toBeNull();
  })
});