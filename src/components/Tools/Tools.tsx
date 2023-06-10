import { FC } from 'react';
import { TFilter } from '../../types/TFilter';

interface IProps {
  updateFilter: (filter: TFilter) => void;
  filter: TFilter;
  onClickClearComplited: () => void;
  itemsLeft: number;
}

const Tools: FC<IProps> = ({ updateFilter, filter, onClickClearComplited, itemsLeft }) => {
  return(
    <div className='flex justify-between border-t-4 py-1 text-sm border-slate-200'>
        <span>{itemsLeft} items left</span>
        <div className='flex gap-2'>
          <button
            onClick={() => updateFilter('all')}
            className={`px-1 ${
              filter === 'all' && 'border border-red-200 border-dotted'
            }`}
          >
            All
          </button>
          <button
            onClick={() => updateFilter('active')}
            className={`px-1 ${
              filter === 'active' && 'border border-red-200 border-dotted'
            }`}
          >
            Active
          </button>
          <button
            onClick={() => updateFilter('completed')}
            className={`px-1 ${
              filter === 'completed' && 'border border-red-200 border-dotted'
            }`}
          >
            Completed
          </button>
        </div>
        <button onClick={onClickClearComplited}>Clear completed</button>
      </div>
  );
};

export { Tools };