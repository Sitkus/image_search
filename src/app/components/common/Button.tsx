import { ReactNode } from 'react';
import useStyles from './Button.style';

interface Props {
  children: ReactNode;
}

function Button({ children }: Props) {
  const classes = useStyles();

  return <button className={classes.button}>{children}</button>;
}

export default Button;
