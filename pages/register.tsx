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

const Register: NextPage<SSGProps> = () => {
  const router = useRouter();

  const registerClick = () => {
    // /register ページに遷移
    router.push('/mail');
  };

  const backClick = () => {
    // /register ページに遷移
    router.push('/login');
  };

  return (
        <LoginWrapper>
            <Tittle>{ constants.register }</Tittle>
            <Input type="text" placeholder={ constants.name } />
            <Input type="text" placeholder={ constants.mail_address } />
            <Input type="password" placeholder={ constants.password } />
            <Input type="password" placeholder={ constants.confirm } />
            <Button title={ constants.register_button } onClick={() => registerClick()} />
            <A href="#" onClick={ backClick }>
              { constants.back }
            </A>
        </LoginWrapper>
  );
};

export default Register;
