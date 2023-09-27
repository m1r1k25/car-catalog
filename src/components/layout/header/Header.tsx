import { FC } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { useRouter } from 'next/router';

const headers = [
  { path: '/', title: 'Home' },
  { path: '/about', title: 'About' },
];

const Header: FC = () => {
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      {headers.map(({ path, title }) => {
        return (
          <Link key='path' href={path} className={pathname === path ? styles.active : ''}>
            {title}
          </Link>
        );
      })}
    </header>
  );
};

export default Header;
