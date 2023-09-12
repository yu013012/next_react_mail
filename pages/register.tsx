import { NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Button from '../components/button_component'
import Input from '../components/input_component'
import LoginWrapper from '../components/login_wrapper_component'
import constants from '../helper/constants';
import theme from '../helper/theme';
import React, { useRef, useCallback, useState } from 'react';
import api from '../helper/api';

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

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const nameRef = useRef<HTMLInputElement | null>(null);
  const mailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event) => {
    setStateForPlaceholder(event.target.placeholder)
  };

  const setStateForPlaceholder = (placeholder: string) => {
    switch (placeholder) {
      case `${ constants.name }`:
        setName(event.target.value);
        break;
      case `${ constants.mail_address }`:
        setMail(event.target.value);
        break;
      case `${ constants.password }`:
        setPassword(event.target.value);
        break;
      case `${ constants.confirm }`:
        setConfirm(event.target.value);
        break;
      default:
        // 何もしない
    }
  }

  const registerClick = useCallback(async () => {
    try {
      // useRefの場合は下記、正しuseCallbackを使う場合はuseCallbackの外で値を取得していないといけない
      // const name = nameRef.current?.value;
      // const email = mailRef.current?.value;
      // const password = passwordRef.current?.value;
      // const confirm = confirmRef.current?.value;

      const queryParams = {
        name                  : name,
        email                 : mail,
        password              : password,
        password_confirmation : confirm,
      };
      const result = await api(`${ constants.api }register`, queryParams, null);
      if (result) {
        localStorage.setItem('token', result);
        router.push('/mail');
      }
    } catch (error) {
      alert('データの取得エラー');
    }
  }, [name, mail, password, confirm]);

  const backClick = () => {
    router.push('/login');
  };

  return (
        <LoginWrapper>
            <Tittle>{ constants.register }</Tittle>
            <Input type_="text" placeholder_={ constants.name } ref_={ nameRef } value_={name} onChange_={handleChange} />
            <Input type_="text" placeholder_={ constants.mail_address } ref_={ mailRef } value_={mail} onChange_={handleChange} />
            <Input type_="password" placeholder_={ constants.password } ref_={ passwordRef } value_={password} onChange_={handleChange} />
            <Input type_="password" placeholder_={ constants.confirm } ref_={ confirmRef } value_={confirm} onChange_={handleChange} />
            <Button title={ constants.register_button } onClick={() => registerClick()} />
            <A href="#" onClick={ backClick }>
              { constants.back }
            </A>
        </LoginWrapper>
  );
};

export default Register;
