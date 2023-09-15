import styled from 'styled-components';
import theme from '../helper/theme';
import { RefObject, InputHTMLAttributes, MutableRefObject } from 'react';

type InputProps = {
  placeholder_: string;
  type_: string;
  ref_: MutableRefObject<HTMLInputElement | null>
  value_: string;
  onChange_?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AnyInput = styled.input`
  width: ${theme.width.full};
  padding: ${theme.spacing.small};
  margin: 5px 0;
`;

const Input = (props: InputProps) => {
  const { placeholder_, type_, ref_, value_, onChange_ } = props;

  return (
      <AnyInput type={ type_ } placeholder={ placeholder_ } ref={ ref_ } value={ value_ } onChange={ onChange_ } />
  );
};

export default Input;
