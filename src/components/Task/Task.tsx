import { FC } from 'react';
import { TItemList } from '../../types/TItemList';
import CheckedMark from '../../images/check.png'

interface IProps {
  updateStatusTask: (id: number) => void;
  task: TItemList;
}

const Task: FC<IProps> = ({updateStatusTask, task }) => {
  return(
    <li className='flex items-center p-1 gap-2 border-collapse border-y select-none cursor-pointer' onClick={() => updateStatusTask(task.id)}>
      <div className={
        `w-[20px] h-[20px] text-2xl border rounded-full flex items-center ${task.status ? 'border-green-600 text-green-600' : 'border-slat-500'}`
      }
      style={{backgroundImage: `${task.status ? `url(${CheckedMark})` : ''}`, backgroundSize: 'cover'}}
      /> 
      <span 
        className={
          `text-xl ${task.status ? 'line-through text-slate-500' : 'no-underline text-slate-900'}`
        }>
          {task.text}
        </span>
    </li>
  );
};

export { Task };