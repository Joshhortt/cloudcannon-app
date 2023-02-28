import styles from "./Footer.module.scss";

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      &copy; GitHub Space, Creative Ligtbox {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
