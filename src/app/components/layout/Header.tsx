import useStyles from './Header.style';
import { SearchField, Button } from '../helpers';

function Header() {
  const classes = useStyles();

  const onClick = () => {
    console.log('Works');
  };

  return (
    <header className={classes.header}>
      <SearchField type="text" name="search" placeholder="Search for images" />
      <Button onClick={onClick}>Search</Button>
    </header>
  );
}

export default Header;
