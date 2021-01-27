import useStyles from './Header.style';
import { SearchField, Button } from '../common';

function Header() {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <SearchField type="text" name="search" placeholder="Search keyword" />
      <Button>Search</Button>
    </header>
  );
}

export default Header;
