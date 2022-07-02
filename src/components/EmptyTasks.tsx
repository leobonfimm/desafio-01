import { ClipboardText } from 'phosphor-react';

import styles from './EmptyTasks.module.css';

export function EmptyTasks() {
  return (
    <div className={styles.container}>
      <ClipboardText size={56} />

      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}