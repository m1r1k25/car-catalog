import { FC, PropsWithChildren } from 'react';
import { NextPage } from 'next';
import { IMeta } from './Meta.interface';
import Head from 'next/head';

const Meta: FC<PropsWithChildren<IMeta>> = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description ? (
          <>
            <meta name='description' content={description} />
            <meta name='og:title' content={description} />
            <meta name='og:description' content={description} />
          </>
        ) : (
          <meta name='robots' content='noindex, nofollow' />
        )}
      </Head>
      {children}
    </>
  );
};

export default Meta;
