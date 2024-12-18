import Link from 'next/link';
import { FC } from 'react';

import styles from './Header.module.scss';

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Link href={'/add-task'}>Добавить задачу</Link>
		</header>
	);
};

export default Header;
