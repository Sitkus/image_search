import { ChangeEvent } from 'react';
import useStyles from './SearchField.style';

interface Props {
  type: string;
  value?: string;
  name?: string;
  placeholder?: string;
  changeEvent?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function SearchField({ type, value, name, placeholder, changeEvent }: Props) {
  const classes = useStyles();

  return (
    <input
      value={value}
      onChange={changeEvent}
      className={classes.input}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
}

export default SearchField;
