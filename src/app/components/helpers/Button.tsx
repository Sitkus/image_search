import { ReactNode } from 'react';
import useStyles from './Button.style';

interface Props {
  children: ReactNode;
  btnType: 'button' | 'submit' | 'reset' | undefined;
}

function Button({ children, btnType = 'button' }: Props) {
  const classes = useStyles();

  return (
    <button type={btnType} className={classes.button}>
      {children}
    </button>
  );
}

export default Button;
