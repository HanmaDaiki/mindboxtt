import { FC } from 'react';

import { TItemList } from '../../types/TItemList';
import { Task } from '../Task';
import { TFilter } from '../../types/TFilter';

interface IProps {
  todoList: Array<TItemList>;
  updateStatusTask: (id: number) => void;
  filter: TFilter;
}

const TasksList: FC<IProps> = ({ todoList, updateStatusTask, filter }) => {
  if(!todoList.length) {
    return null;
  }

  return(
    <ul className='flex flex-col'>
        {todoList.map((item) => {
          if(filter === 'active' && !item.status) {
            return <Task key={item.id} task={item} updateStatusTask={updateStatusTask} />
          }

          if(filter === 'completed' && item.status) {
            return <Task key={item.id} task={item} updateStatusTask={updateStatusTask} />
          }
          
          if(filter === 'all') {
            return <Task key={item.id} task={item} updateStatusTask={updateStatusTask} />
          }

          return null;
        })}
    </ul>
  );
};

export { TasksList };