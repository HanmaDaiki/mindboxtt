import { FC, useState } from 'react';
import { TItemList } from '../../types/TItemList';
import { generateRandomId } from '../../utils/generateRandomId';
import arrowDown from '../../images/arrow-down.png';

interface IProps {
  addNewItem: (item: TItemList) => void; 
}

const FormAddItem: FC<IProps> = ({ addNewItem }) => {
  const [newTask, setNewTask] = useState<string>('');

  const onSubmitForm = (event: React.SyntheticEvent) => {
    event.preventDefault();

    addNewItem({ id: generateRandomId(), text: newTask, status: false });
    setNewTask('');
  }

  const onChangeTask = (event: React.FormEvent<HTMLInputElement>) => {
    setNewTask(event.currentTarget.value);
  }

  return(
    <form onSubmit={onSubmitForm} className='flex p-1 gap-1 items-center border-b-4 border-slate-200'>
      <button style={{backgroundImage: `url(${arrowDown})`}} className='w-[23px] h-[23px] bg-contain' type='submit' />
      <input value={newTask} onChange={onChangeTask} className='w-full outline-none text-2xl bg-transparent' placeholder='Whats need to be done?' />
    </form>
  );
};

export { FormAddItem };