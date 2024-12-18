import { FC } from 'react';

import { ITaskDetail } from '@/types/props.types';

const TaskDetailISR: FC<ITaskDetail> = ({ targetTask }) => {
	return (
		<div style={{ display: 'none' }}>
			<p>{targetTask?.id}</p>
			<h1>{targetTask?.title}</h1>
			<p>{targetTask?.completed ? 'Выполнено' : 'Не выполнено'}</p>
		</div>
	);
};

export default TaskDetailISR;
