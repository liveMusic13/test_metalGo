import Task from '@/components/screens/task/Task';

export default async function TaskPage({ params }: any) {
	const { id } = await params;

	return <Task id={id} />;
}
