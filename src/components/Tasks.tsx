import { useMemo, useState } from "react";
import { EmptyTasks } from "./EmptyTasks";
import { NewTask } from "./NewTask";
import { Task } from "./Task";

import styles from './Tasks.module.css';

interface TaskData {
  title: string;
  isDone: boolean;
}

export function Tasks() {
  const [tasks, setTasks] = useState<TaskData[]>([]);

  function onNewTask(title: string) {
    const newTask = {
      title,
      isDone: false
    };

    setTasks(oldSate => [...oldSate, newTask]);
  }

  function onDeleteTask(title: string) {
    const tasksWithoutOne = tasks.filter(task => task.title !== title);

    setTasks(tasksWithoutOne);
  }

  function onCheckAndUnCheckTask(title: string) {
    const tasksWithTaskOneDoneOrNot = tasks.map(task => {
      if (task.title === title) {
        return {
          title,
          isDone: !task.isDone
        }
      }
      return task;
    });

    setTasks(tasksWithTaskOneDoneOrNot);
  }

  const numberTasksDone = useMemo(() => {
    return tasks.filter(task => task.isDone);
  }, [tasks]);

  return (
    <main className={styles.container}>
      <NewTask onNewTask={onNewTask}/>

      <section className={styles.listTasks}>
        <header className={styles.header}>
          <strong>Tarefas criadas <span>{tasks.length}</span></strong>
          <strong>Concluídas <span>{numberTasksDone.length} de {tasks.length}</span></strong>
        </header>
        
        {tasks.length === 0 ? <EmptyTasks/> : (
          <>
            {tasks.map(task => (
              <Task
                key={task.title}
                title={task.title}
                isDone={task.isDone}
                onDeleteTask={onDeleteTask}
                onCheckAndUnCheckTask={onCheckAndUnCheckTask}
              />
            ))}
          </>
        )}
      </section>
    </main>
  )
}