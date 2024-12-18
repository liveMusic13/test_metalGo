import { FC } from 'react';

import Content from '@/components/content/Content';
import Layout from '@/components/layout/Layout';
import TaskDetailISR from '@/components/task-detail/TaskDetailISR';

import { todoService } from '@/service/todo.service';

export const revalidate = 200;

const Task: FC<{ id: string }> = async ({ id }) => {
	const { data } = await todoService.todos();
	const sortedData = data.filter(el => el.userId === 1);
	const targetTask = sortedData.filter(el => el.id === Number(id))[0];

	return (
		<Layout>
			<TaskDetailISR targetTask={targetTask} />
			<Content data={sortedData} targetTask={targetTask} isTodo={id} />
		</Layout>
	);
};

export default Task;
