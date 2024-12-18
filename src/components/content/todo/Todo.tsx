import { useRouter } from 'next/navigation';
import { FC } from 'react';

import { ITodoProps } from '@/types/props.types';

import styles from './Todo.module.scss';

const Todo: FC<ITodoProps> = ({ todo, onClick, deleted }) => {
	const { push } = useRouter();
	const movePageTodo = () => {
		push(`/tasks/${todo.id}`);
	};

	return (
		<div className={styles.block__todo} onClick={movePageTodo}>
			<h2>{todo.title}</h2>
			<div className={styles.block__buttons}>
				<button
					onClick={event => {
						event.stopPropagation();
						onClick(todo);
					}}
				>
					Статус:{' '}
					<span
						className={`${todo.completed ? styles.completed : styles.not__completed}`}
					>
						Изменить по клику
					</span>
				</button>
				<button
					onClick={event => {
						event.stopPropagation();
						deleted(todo);
					}}
				>
					Удалить
				</button>
			</div>
		</div>
	);
};

export default Todo;
