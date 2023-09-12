import styled from 'styled-components';
import theme from '../helper/theme';
import React, { ReactNode } from 'react';

type LoginWrapperProps = {
  children: ReactNode;
};

const LoginWrapper_ = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

const LoginWrapper = (props: LoginWrapperProps) => {
  const { children } = props;

  return (
      <LoginWrapper_>
        { children }
      </LoginWrapper_>
  );
};

export default LoginWrapper;
