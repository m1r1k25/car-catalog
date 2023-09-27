import Layout from '@/components/layout/Layout';
import { NextPage } from 'next';
import Image from 'next/image';

const NotFound: NextPage = () => {
  return (
    <Layout title='Not found'>
      <div style={{ textAlign: 'center', marginTop: '150px' }}>
        <Image src='/404_error.png' alt='not found' width='700' height='350' />
      </div>
    </Layout>
  );
};

export default NotFound;
