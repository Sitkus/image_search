import { ChangeEvent } from 'react';
import useStyles from './SearchField.style';

interface Props {
  type: string;
  name?: string;
  placeholder?: string;
  collectInputData?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function SearchField({ type = 'text', name, placeholder, collectInputData }: Props) {
  const classes = useStyles();

  return (
    <input onChange={collectInputData} className={classes.input} type={type} name={name} placeholder={placeholder} />
  );
}

export default SearchField;
