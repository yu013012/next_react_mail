import styled from 'styled-components';
import theme from '../helper/theme';

type InputProps = {
  placeholder_: string;
  type_: string;
  ref_: HTMLInputElement | null;
  name_: string;
  onChange_: HTMLInputElement | null;
};

const AnyInput = styled.input`
  width: ${theme.width.full};
  padding: ${theme.spacing.small};
  margin: 5px 0;
`;

const Input = (props: InputProps) => {
  const { placeholder_, type_, ref_, name_, onChange_ } = props;

  return (
      <AnyInput type={ type_ } placeholder={ placeholder_ } ref={ ref_ } name={ name_ } onChange={ onChange_ } />
  );
};

export default Input;
