import Home from '@/components/screens/home/Home';
import { ICarData } from '@/interfaces/car.interface';
import { CarService } from '@/services/car.service';
import { GetStaticProps, NextPage } from 'next';

const HomePage: NextPage<ICarData> = ({ cars = [] }) => {
  return <Home cars={cars} />;
};

export const getStaticProps: GetStaticProps<ICarData> = async () => {
  const cars = await CarService.getAll();
  return {
    props: { cars },
    revalidate: 60,
  };
};

// export const getServerSideProps: GetServerSideProps<ICarData> = async () => {
//   const cars = await CarService.getAll();
//   return {
//     props: { cars },
//   };
// };

export default HomePage;
