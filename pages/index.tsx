import { useEffect } from 'react';
import { useRouter } from 'next/router';

const IndexPage = () => {
  const router = useRouter();
  let token: string | null = ""
  useEffect(() => {
    // localStorageからトークンを取得
    token = localStorage.getItem('token');
    if (token) {
      // トークンが存在する場合、通常のページにリダイレクト
      router.push('/mail');
    } else {
      // トークンが存在しない場合、/loginページにリダイレクト
      router.push('/login');
    }
  // トークンを依存リストに登録して監視する
  }, [token]);

  return (
    <div />
  );
};

export default IndexPage;
