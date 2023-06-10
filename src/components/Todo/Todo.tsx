import { FC, useEffect, useState } from 'react';

import { FormAddItem } from '../FormAddItem';

import { generateRandomId } from '../../utils/generateRandomId';
import { TItemList } from '../../types/TItemList';
import { TasksList } from '../TasksList';
import { TFilter } from '../../types/TFilter';
import { Tools } from '../Tools/Tools';

const Todo: FC = () => {
  const [todoList, setTodoList] = useState<Array<TItemList>>([
    { id: generateRandomId(), text: 'Тестовое задание', status: false },
    { id: generateRandomId(), text: 'Прекрасный код', status: true },
    { id: generateRandomId(), text: 'Покрытие тестами', status: false },
  ]);
  const [leftTask, setLeftTask] = useState<Array<TItemList>>([]);
  const [filter, setFilter] = useState<TFilter>('all');

  useEffect(() => {
    const leftTasksArray: Array<TItemList> = [];

    todoList.forEach((item) => {
      if (!item.status) {
        leftTasksArray.push(item);
      }
    });

    setLeftTask(leftTasksArray);
  }, [todoList, setLeftTask]);

  const addNewItem = (item: TItemList) => {
    setTodoList([...todoList, item]);
  };

  const onClickClearComplited = () => {
    const clearedList: Array<TItemList> = [];

    todoList.forEach((item) => clearedList.push({...item, status: false}));

    setTodoList(clearedList);
  };

  const updateStatusTask = (id: number) => {
    const updateList = todoList.map((item) => {
      if (item.id !== id) {
        return item;
      }

      return { ...item, status: !item.status };
    });

    setTodoList(updateList);
  };

  return (
    <div className='mx-[5px] sm:mx-[50px] md:mx-[150px] xl:mx-[300px] mt-5 bg-slate-50 border-4 border-slate-50 box-border'>
      <FormAddItem addNewItem={addNewItem} />
      <TasksList filter={filter} updateStatusTask={updateStatusTask} todoList={todoList} />
      <Tools updateFilter={(filter: TFilter) => setFilter(filter)} filter={filter} onClickClearComplited={onClickClearComplited} itemsLeft={leftTask.length}/>
    </div>
  );
};

export { Todo };
