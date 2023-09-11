import styled from 'styled-components';
import theme from '../theme';

type InputProps = {
  placeholder: string;
  type: string;
};

const AnyInput = styled.input`
  width: ${theme.width.full};
  padding: ${theme.spacing.small};
  margin: 5px 0;
`;

const Input = (props: InputProps) => {
  const { placeholder, type } = props;

  return (
      <AnyInput type={ type } placeholder={ placeholder } />
  );
};

export default Input;
