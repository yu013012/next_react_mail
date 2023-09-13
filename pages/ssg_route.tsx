import React from 'react';
import { useMyContext } from '../contexts/MyContext';
import { useRouter } from 'next/router';

const SSG = () => {
  return (
      <div>
        <CC />
      </div>
  );
}

const CC = () => {
  const { count, setCount, count2, setCount2 } = useMyContext();
  const router = useRouter();
  const increment = () => {
    setCount(count + 1);
    setCount2(count2 + "tt");
    router.push('/ssg');
  };
  return (
      <div>
        <button onClick={increment}>test</button>
        <p>{count}</p>
        <p>{count2}</p>
      </div>
  );
}

export default SSG;
