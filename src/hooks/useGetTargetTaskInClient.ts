import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { ITodo } from '@/types/request.types';

export const useGetTargetTaskInClient = () => {
	const pathname = usePathname();
	const [task, setTask] = useState<ITodo | undefined>(undefined);

	const getIdTaskInClient = () => {
		const match = pathname.match(/\/tasks\/(\d+)$/);
		if (match) {
			return parseInt(match[1], 10);
		} else {
			return 0;
		}
	};

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const getLocalData = localStorage.getItem('localData');

			if (getLocalData) {
				const tasks: ITodo[] = JSON.parse(getLocalData);
				const targetTask = tasks.find(
					(el: ITodo) => el.id === getIdTaskInClient(),
				);
				setTask(targetTask);
			}
		}
	}, [pathname]);

	return task;
};
