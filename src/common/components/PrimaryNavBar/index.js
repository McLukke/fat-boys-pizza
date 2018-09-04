import logo from 'assets/logo.jpg'; 

import styles from './styles';

const PrimaryNavBar = () => (
  <div className={styles.base}>
    <img className={styles.logo} src={logo} alt="Fat Boys Pizza" />

    <div>
      menu items
    </div>
  </div>
);

export default PrimaryNavBar;
