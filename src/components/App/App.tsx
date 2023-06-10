import { FC } from 'react';
import { Todo } from '../Todo';

const App: FC = () => {
  return(
    <>
      <main className='h-screen w-sreen bg-slate-200 flex flex-col font-thin font-sans'>
        <h1 className='text-5xl font- text-red-300 self-center'>todos</h1>
        <Todo />
      </main>
    </>
  );
};

export { App };