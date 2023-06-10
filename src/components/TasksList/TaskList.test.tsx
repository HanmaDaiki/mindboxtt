import { render, screen } from '@testing-library/react';

import { TasksList } from './';

const data = [
  { id: 1, text: 'Тестовое задание', status: false },
  { id: 2, text: 'Прекрасный код', status: true },
  { id: 3, text: 'Покрытие тестами', status: false },
]

describe('Tests TasksList component', () => {
  test('render all', () => {
    render(<TasksList todoList={data} updateStatusTask={() => {}} filter='all'/>);
    
    expect(screen.getByRole('list')).toBeInTheDocument();

    expect(screen.getByText('Тестовое задание')).toBeInTheDocument();
    expect(screen.getByText('Прекрасный код')).toBeInTheDocument();
    expect(screen.getByText('Покрытие тестами')).toBeInTheDocument();
  });
  
  test('render active', () => {
    render(<TasksList todoList={data} updateStatusTask={() => {}} filter='active'/>);

    expect(screen.getByRole('list')).toBeInTheDocument();

    expect(screen.getByText('Тестовое задание')).toBeInTheDocument();
    expect(screen.queryByText('Прекрасный код')).not.toBeInTheDocument();
    expect(screen.getByText('Покрытие тестами')).toBeInTheDocument();
  });

  test('render completed', () => {
    render(<TasksList todoList={data} updateStatusTask={() => {}} filter='completed'/>);

    expect(screen.getByRole('list')).toBeInTheDocument();

    expect(screen.queryByText('Тестовое задание')).not.toBeInTheDocument();
    expect(screen.getByText('Прекрасный код')).toBeInTheDocument();
    expect(screen.queryByText('Покрытие тестами')).not.toBeInTheDocument();
  });

  test('not render if clear data', () => {
    render(<TasksList todoList={[]} updateStatusTask={() => {}} filter='all' />)

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });
});