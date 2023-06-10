import { FC, useState } from 'react';
import { TItemList } from '../../types/TItemList';
import { generateRandomId } from '../../utils/generateRandomId';
import arrowDown from '../../images/arrow-down.png';

interface IProps {
  onSubmit: (event: React.SyntheticEvent, item: TItemList) => void; 
}

const FormAddItem: FC<IProps> = ({ onSubmit }) => {
  const [newTask, setNewTask] = useState<string>('');

  const onChangeTask = (event: React.FormEvent<HTMLInputElement>) => {
    setNewTask(event.currentTarget.value);
  }

  const formOnSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!newTask.length) {
      return null;
    }
    const item = {id: generateRandomId(), text: newTask, status: false}    
    onSubmit(event, item);
    setNewTask('');
  }

  return(
    <form data-testid='form' onSubmit={formOnSubmit} className='flex p-1 gap-1 items-center border-b-4 border-slate-200'>
      <button style={{backgroundImage: `url(${arrowDown})`}} className='w-[23px] h-[23px] bg-contain' type='submit' />
      <input data-testid='input' value={newTask} onChange={onChangeTask} className='w-full outline-none text-2xl bg-tra' placeholder='Whats need to be done?' />
    </form>
  );
};

export { FormAddItem };