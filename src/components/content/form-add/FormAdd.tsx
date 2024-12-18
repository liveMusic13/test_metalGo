import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '@/store/local-data/localData.slice';
import { RootState } from '@/store/store';

import styles from './FormAdd.module.scss';

const FormAdd: FC = () => {
	const { push } = useRouter();
	const dispatch = useDispatch();
	const [value, setValue] = useState<string>('');
	const localData = useSelector(
		(state: RootState) => state.localData.localData,
	);

	return (
		<div className={styles.formAdd}>
			<input
				type='text'
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<button
				onClick={() => {
					dispatch(
						actions.addNewTask({
							id: localData.length + 1,
							userId: 1,
							completed: false,
							title: value,
						}),
					);
					push('/');
				}}
			>
				Сохранить
			</button>
		</div>
	);
};

export default FormAdd;
