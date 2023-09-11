import { NextPage, GetStaticProps } from 'next';
import styled from 'styled-components';
import Button from '../components/button_component'
import Input from '../components/input_component'
import LoginWrapper from '../components/login_wrapper_component'
import constants from '../constants';

type SSGProps = {
  test: string;
};

const Tittle = styled.h2`
  margin-bottom: 30px;
`;

const SSG: NextPage<SSGProps> = (props) => {
  const { test } = props;

  return (
        <LoginWrapper>
            <Tittle>{ constants.login }</Tittle>
            <Input type="text" placeholder={ constants.mail_address } />
            <Input type="password" placeholder={ constants.password } />
            <Button title={ constants.login } onClick={() => console.log("test")} />
        </LoginWrapper>
  );
};

// ビルド時に一度だけ読み込まれる
// トリガーを付けることでも実行可能
export const getStaticProps: GetStaticProps<SSGProps> = async () => {
  const test = 'sdgdfgdfg';

  return {
    props: {
      test: test,
    },
  };
};

export default SSG;
