import { NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Button from '../components/button_component'
import Input from '../components/input_component'
import LoginWrapper from '../components/login_wrapper_component'
import constants from '../constants';
import theme from '../theme';

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
    // /register ページに遷移
    router.push('/register');
  };
  return (
        <LoginWrapper>
            <Tittle>{ constants.login }</Tittle>
            <Input type="text" placeholder={ constants.mail_address } />
            <Input type="password" placeholder={ constants.password } />
            <Button title={ constants.login } onClick={() => console.log("test")} />
            <A href="#" onClick={ registerClick }>
              { constants.register_button }
            </A>
        </LoginWrapper>
  );
};

export default Login;
