import { ReactNode } from 'react';
import useStyles from './Button.style';

interface Props {
  children: ReactNode;
  className?: string;
  btnType: 'button' | 'submit' | 'reset' | undefined;
  eventFunction?: () => void;
}

function Button({ children, className, btnType = 'button', eventFunction }: Props) {
  const classes = useStyles();

  return (
    <button onClick={eventFunction} type={btnType} className={`${classes.button} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
