import { FC, useState } from 'react';
import { TItemList } from '../../types/TItemList';
import { generateRandomId } from '../../utils/generateRandomId';

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
    <form onSubmit={onSubmitForm} className='border-b-4 border-slate-200'>
      <input value={newTask} onChange={onChangeTask} className='w-full outline-none p-2 text-2xl' placeholder='Whats need to be done?' />
    </form>
  );
};

export { FormAddItem };