import { NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Button from '../components/button_component'
import Input from '../components/input_component'
import LoginWrapper from '../components/login_wrapper_component'
import constants from '../helper/constants';
import theme from '../helper/theme';
import api from '../helper/api';
import React, { useRef, useCallback, useState } from 'react';

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
const ttt = "1"

const Login: NextPage<SSGProps> = () => {
  const router = useRouter();

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const mailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event) => {
    setStateForPlaceholder(event.target.placeholder)
  };

  const setStateForPlaceholder = (placeholder: string) => {
    switch (placeholder) {
      case `${ constants.mail_address }`:
        setMail(event.target.value);
        break;
      case `${ constants.password }`:
        setPassword(event.target.value);
        break;
      default:
        // 何もしない
    }
  }

  const registerClick = () => {
    router.push('/register');
  };

  const loginClick = useCallback(async () => {
    try {

      // useRefの場合は下記、正しuseCallbackを使う場合はuseCallbackの外で値を取得していないといけない
      //const email = mailRef.current?.value;
      //const password = passwordRef.current?.value;

      const queryParams = {
        email: mail,
        password: password,
      };

      const result = await api(`${constants.api}login`, queryParams);
      if (result) {
        localStorage.setItem('token', result);
        router.push('/mail');
      }
    } catch (error) {
      alert('データの取得エラー');
    }

  }, [mail, password]);

  return (
        <LoginWrapper>
            <Tittle>{ constants.login }</Tittle>
            <Input type_="text" placeholder_={ constants.mail_address } ref_={ mailRef } value_={mail} onChange_={handleChange} />
            <Input type_="password" placeholder_={ constants.password } ref_={ passwordRef } value_={password} onChange_={handleChange} />
            <Button title={ constants.login } onClick={() => loginClick()} />
            <A href="#" onClick={ registerClick }>
              { constants.register_a }
            </A>
        </LoginWrapper>
  );
};

export default Login;
