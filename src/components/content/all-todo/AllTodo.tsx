import { FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IAllTodo } from '@/types/props.types';
import { ITodo } from '@/types/request.types';

import { actions } from '@/store/local-data/localData.slice';
import { RootState } from '@/store/store';

import Todo from '../todo/Todo';

import styles from './AllTodo.module.scss';

const AllTodo: FC<IAllTodo> = ({ data }) => {
	const dispatch = useDispatch();
	const localData = useSelector(
		(state: RootState) => state.localData.localData,
	);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const savedData = localStorage.getItem('localData');
			if (savedData) {
				dispatch(actions.setLocalData(JSON.parse(savedData)));
			} else {
				dispatch(actions.initializeData(data));
			}
		}
	}, [data, dispatch]);

	useEffect(() => {
		if (typeof window !== 'undefined' && localData.length > 0) {
			localStorage.setItem('localData', JSON.stringify(localData));
		}
	}, [localData]);

	const onClick = useCallback(
		(todo: ITodo) => {
			dispatch(actions.toggleTodoCompletion(todo.id));
		},
		[dispatch],
	);

	const deleted = useCallback(
		(todo: ITodo) => {
			dispatch(actions.deleteTodo(todo.id));
		},
		[dispatch],
	);

	return (
		<div className={styles.block__allTodo}>
			<div className={styles.completed}>
				<h2>Выполнены</h2>
				{localData.map((todo, ind) => {
					if (todo.completed) {
						return (
							<Todo key={ind} todo={todo} onClick={onClick} deleted={deleted} />
						);
					}
				})}
			</div>
			<div className={styles.completed}>
				<h2>Не выполнены</h2>
				{localData.map((todo, ind) => {
					if (!todo.completed) {
						return (
							<Todo key={ind} todo={todo} onClick={onClick} deleted={deleted} />
						);
					}
				})}
			</div>
		</div>
	);
};

export default AllTodo;
