import React, { useState, useEffect  } from 'react';
import { NextPage, GetStaticProps, GetServerSideProps } from 'next';
import api from '../helper/api';
import constants from '../helper/constants';
import theme from '../helper/theme';
import View from '../components/mail_view_component'
import { useRouter } from 'next/router';

type Data = {
  data: any;
}

const Mail: NextPage<SSGProps> = () => {
  const [mailData, setMailData] = useState([{}]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = async () => {
    try {
      const token = localStorage.getItem('token');
      const result = await api(`${constants.api}logout`, null, token);
      localStorage.setItem('token', "");
      router.push('/login');
    } catch (error) {
      alert('データの取得エラー');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const result = await api(`${constants.api}mail_data`, null, token);
        setMailData(result)
      } catch (error) {
        console.error('データの取得エラー:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="back" onClick={toggleMenu}>
          &#8592;
        </div>
        <button className="logout" onClick={logout}>Logout</button>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
      <div className={`title ${isMenuOpen ? 'open' : ''}`}>メール一覧</div>
      <div className="content">
        <View data={mailData} />
      </div>
    </div>
  );
}

export default Mail;
