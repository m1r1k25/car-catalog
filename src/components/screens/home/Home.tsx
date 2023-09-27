import Head from 'next/head';
import Image from 'next/image';
import styles from './Home.module.scss';
import Layout from '@/components/layout/Layout';
import { FC } from 'react';

const Home: FC = () => {
  return <Layout title='Home'>Home page</Layout>;
};

export default Home;
