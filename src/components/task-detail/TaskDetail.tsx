import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ITaskDetail } from '@/types/props.types';

import { actions } from '@/store/local-data/localData.slice';
import { RootState } from '@/store/store';

import { useGetTargetTaskInClient } from '@/hooks/useGetTargetTaskInClient';

import styles from './TaskDetail.module.scss';

const TaskDetail: FC<ITaskDetail> = ({ targetTask }) => {
	const taskClient = useGetTargetTaskInClient();

	const searchTask = targetTask?.id ? targetTask : taskClient;

	const dispatch = useDispatch();
	const [localDataInitialized, setLocalDataInitialized] = useState(false);
	const task = useSelector((state: RootState) =>
		state.localData.localData.find(el => el.id === searchTask?.id),
	);

	useEffect(() => {
		if (typeof window !== 'undefined' && !localDataInitialized) {
			const savedData = localStorage.getItem('localData');
			if (savedData) {
				const parsedData = JSON.parse(savedData);
				dispatch(actions.setLocalData(parsedData));
				setLocalDataInitialized(true);
			}
		}
	}, [dispatch, localDataInitialized]);

	const onClick = () => {
		dispatch(actions.toggleTodoCompletion(searchTask?.id ? searchTask?.id : 0));
	};

	return (
		<div className={styles.block__taskDetail}>
			<span className={styles.id}>{task?.id}</span>
			<h1 className={styles.title}>{task?.title}</h1>
			<p className={`${task?.completed ? styles.active : styles.no_active}`}>
				{task?.completed ? 'Выполнено' : 'Не выполнено'}
			</p>
			<button onClick={onClick} className={styles.button}>
				Изменить состояние
			</button>
			<Link href={'/'}>Вернуться на главную</Link>
		</div>
	);
};

export default TaskDetail;
