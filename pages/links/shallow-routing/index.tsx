import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { Router, useRouter } from 'next/router';
import * as React from 'react';

export interface IShallowRoutingProps {
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  console.log('call server');

  return {
    props: { stars: json.stargazers_count }
  }
}
export default function ShallowRouting({ stars }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { counter } = router.query;
  
  return (
    <>
      <Head>
        <title>Welcome to Next.js!</title>
      </Head>
      <div>Welcome to Next.js!</div>
      <span onClick={() => router.push('/links/shallow-routing/?counter=1', '/about?counter=1', { shallow: true })}>Reload</span>
      <br />
      <div>Next stars: {counter ? (stars as number) + (parseInt(counter as string)) : stars}</div>
    </>
  );
}
