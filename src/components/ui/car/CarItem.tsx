import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ICar, ICarDataSingle } from '@/interfaces/car.interface';
import styles from './CarItem.module.scss';

const CarItem: FC<ICarDataSingle> = ({ car }) => {
  return (
    <div className={styles.CarItem}>
      <Image src={car.image} alt={car.name} width='300' height='200' />
      <h2>{car.name}</h2>
      <small>{car.price}</small>
      <Link href={`/car/${car.id}`}>Read more</Link>
    </div>
  );
};

export default CarItem;
