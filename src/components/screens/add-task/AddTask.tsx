'use client';

import { FC, useEffect, useState } from 'react';

import Content from '@/components/content/Content';
import Layout from '@/components/layout/Layout';

import { ITodo } from '@/types/request.types';

import { todoService } from '@/service/todo.service';

const AddTask: FC = () => {
	const [data, setData] = useState<ITodo[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await todoService.todos();
				setData(response.data.filter(el => el.userId === 1));
			} catch (err) {
				setError('Failed to fetch data');
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<Layout>
			<Content data={data} />
		</Layout>
	);
};

export default AddTask;
