'use client';

import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { Provider } from 'react-redux';

import { IContent } from '@/types/props.types';

import { store } from '@/store/store';

import { useGetTargetTaskInClient } from '@/hooks/useGetTargetTaskInClient';

import TaskDetail from '../task-detail/TaskDetail';

import styles from './Content.module.scss';
import AllTodo from './all-todo/AllTodo';
import FormAdd from './form-add/FormAdd';

const Content: FC<IContent> = ({ data, targetTask, isTodo }) => {
	const pathname = usePathname();

	const task = useGetTargetTaskInClient();

	return (
		<Provider store={store}>
			<div className={styles.wrapper_content}>
				{pathname === '/' ? (
					<AllTodo data={data} />
				) : pathname === '/add-task' ? (
					<FormAdd />
				) : isTodo && (targetTask || task) ? (
					<TaskDetail targetTask={targetTask} />
				) : (
					<div>not found</div>
				)}
			</div>
		</Provider>
	);
};

export default Content;
