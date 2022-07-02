import { PlusCircle } from 'phosphor-react';
import { FormEvent, useState } from 'react';

import styles from './NewTask.module.css';

interface NewTaskProps {
  onNewTask: (title: string) => void;
}

export function NewTask({ onNewTask }: NewTaskProps) {
  const [taskTitle, setTaskTitle] = useState('');

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    onNewTask(taskTitle);
    setTaskTitle('');
  }

  return (
    <form className={styles.container} onSubmit={handleCreateTask}>
      <input
        value={taskTitle}
        onChange={(event) => setTaskTitle(event.target.value)}
        type="text" 
        placeholder='Adicione uma nova tarefa'
      />

      <button type='submit'>
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  )
}