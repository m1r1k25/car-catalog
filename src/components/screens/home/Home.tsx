import Head from 'next/head';
import Image from 'next/image';
import styles from './Home.module.scss';
import Layout from '@/components/layout/Layout';
import { FC } from 'react';
import { ICarData } from '@/interfaces/car.interface';
import CarItem from '@/components/ui/car/CarItem';

const Home: FC<ICarData> = ({ cars = [] }) => {
  return (
    <Layout title='Home' description='Some description'>
      <h1>Welcome to car catalog</h1>
      {cars.length ? (
        cars.map((car) => <CarItem key={car.id} car={car} />)
      ) : (
        <div>Cars not found!</div>
      )}
    </Layout>
  );
};

export default Home;
