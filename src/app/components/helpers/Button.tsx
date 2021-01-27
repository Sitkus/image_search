import { ReactNode } from 'react';
import useStyles from './Button.style';

interface Props {
  children: ReactNode;
  onClick: () => void;
}

function Button({ children, onClick }: Props) {
  const classes = useStyles();

  return (
    <button onClick={onClick} className={classes.button}>
      {children}
    </button>
  );
}

export default Button;
