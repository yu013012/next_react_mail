import { NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Button from '../components/button_component'
import Input from '../components/input_component'
import LoginWrapper from '../components/login_wrapper_component'
import constants from '../constants';
import theme from '../theme';
import api from '../api';

const Tittle = styled.h2`
  margin-bottom: 30px;
`;

const A = styled.a`
  margin-top: ${theme.spacing.small};
  font-size: ${theme.font.small};

  &:hover {
    color: #7b7b7b;
  }
`;

const Login: NextPage<SSGProps> = () => {
  const router = useRouter();

  const registerClick = () => {
    router.push('/register');
  };

  const loginClick = async () => {
    try {
      const queryParams = { email: 'yniwa0128@gmail.com', password: '11111111' };
      const result = await api(`${ constants.api }login`, queryParams);
      if (result) {
        localStorage.setItem('token', result);
        router.push('/mail');
      }
    } catch (error) {
      console.error('データの取得エラー:', error);
    }
  };

  return (
        <LoginWrapper>
            <Tittle>{ constants.login }</Tittle>
            <Input type="text" placeholder={ constants.mail_address } />
            <Input type="password" placeholder={ constants.password } />
            <Button title={ constants.login } onClick={() => loginClick()} />
            <A href="#" onClick={ registerClick }>
              { constants.register_a }
            </A>
        </LoginWrapper>
  );
};

export default Login;
