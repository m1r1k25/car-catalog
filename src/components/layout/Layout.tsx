import { FC, PropsWithChildren } from 'react';
import Header from './header/Header';
import Meta from '../seo/Meta';
import { IMeta } from '../seo/Meta.interface';

const Layout: FC<PropsWithChildren<IMeta>> = ({ title, description, children }) => {
  return (
    <Meta title={title} description={description}>
      <Header />
      {children}
    </Meta>
  );
};

export default Layout;
