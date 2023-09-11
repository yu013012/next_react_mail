import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';

type SSGProps = {
  test: string;
};

const SSG: NextPage<SSGProps> = (props) => {
  const { test } = props;

  return (
    <div>
      <Head>
        <title>Static</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          このページ {test}
        </p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<SSGProps> = async () => {
  const test = 'sdgdfgdfg';

  return {
    props: {
      test: test,
    },
  };
};

export default SSG;
