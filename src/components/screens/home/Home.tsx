import { FC } from 'react';

import Content from '@/components/content/Content';
import Header from '@/components/header/Header';
import Layout from '@/components/layout/Layout';

import { todoService } from '@/service/todo.service';

export const revalidate = 200;

const Home: FC = async () => {
	const { data } = await todoService.todos();
	const sortedData = data.filter(el => el.userId === 1);

	return (
		<Layout>
			<Header />
			<Content data={sortedData} />
			<div style={{ display: 'none' }}>
				{sortedData.map((t, ind) => (
					<p key={ind}>{t.title}</p>
				))}
			</div>
		</Layout>
	);
};

export default Home;
