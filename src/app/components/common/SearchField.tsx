import useStyles from './SearchField.style';

interface Props {
  type: string;
  name?: string;
  placeholder?: string;
}

function SearchField({ type = 'text', name, placeholder }: Props) {
  const classes = useStyles();

  return <input className={classes.input} type={type} name={name} placeholder={placeholder} />;
}

export default SearchField;
