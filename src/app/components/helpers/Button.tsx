import { ReactNode } from 'react';
import useStyles from './Button.style';

interface Props {
  children: ReactNode;
  btnType: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  clickEvent?: () => void;
}

function Button({ children, btnType, className, clickEvent }: Props) {
  const classes = useStyles();

  return (
    <button onClick={clickEvent} type={btnType} className={`${classes.button} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
