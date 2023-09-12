import styled from 'styled-components';
import theme from '../helper/theme';

type ButtonProps = {
  title: string;
  onClick?: () => void;
};

const AnyButton = styled.button`
  width: ${theme.width.full};
  padding: ${theme.spacing.small};
  background: ${theme.colors.primary};
  color: ${theme.colors.font_white};
  border: none;
  border-radius: ${theme.radius};
  cursor: pointer;
  margin-top: ${theme.spacing.large};

  &:hover {
    background: #0056b3;
  }
`;

const Button = (props: ButtonProps) => {
  const { title, onClick } = props;

  return (
      <AnyButton onClick={ onClick }>{ title }</AnyButton>
  );
};

export default Button;
