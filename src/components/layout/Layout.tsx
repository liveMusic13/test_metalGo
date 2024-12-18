import { FC, PropsWithChildren } from 'react';

import { ILayout } from '@/types/props.types';

import styles from './Layout.module.scss';

const Layout: FC<PropsWithChildren<ILayout>> = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};

export default Layout;
