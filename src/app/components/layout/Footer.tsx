import useStyles from './Footer.style';

function Footer() {
  const classes = useStyles();

  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer className={classes.footer}>
      <p>&#xA9; {currentYear} by Lukas Šitkus. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
