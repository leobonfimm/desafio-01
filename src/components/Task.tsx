import { Circle, CheckCircle, Trash } from 'phosphor-react'
import styles from './Task.module.css';

interface TaskProps {
  title: string;
  isDone: boolean
  onDeleteTask: (title: string) => void;
  onCheckAndUnCheckTask: (title: string) => void;
}

export function Task({
  title,
  isDone,
  onDeleteTask,
  onCheckAndUnCheckTask
}: TaskProps) {
  return (
    <div className={styles.container}>
      <button
        className={isDone ? styles.buttonChecked : styles.buttonUnChecked}
        onClick={() => onCheckAndUnCheckTask(title)}
      >
        {isDone ? <CheckCircle /> : <Circle /> }
      </button>
      
      <p className={isDone ? styles.taskDone : ''}>
        {title}
      </p>

      <button className={styles.trashButton} onClick={() => onDeleteTask(title)}>
        <Trash />
      </button>
    </div>
  )
}