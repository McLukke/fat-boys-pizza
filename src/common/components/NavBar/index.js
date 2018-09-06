import { withRouter } from 'react-router-dom';
import logo from 'assets/logo.jpg';
import menuItemTomato from 'assets/menu/menu-item.png';

import menuItems from './constants';
import styles from './styles';

const NavBar = ({ history }) => (
  <div className={styles.base}>
    <img className={styles.logo} src={logo} alt="Fat Boys Pizza" />

    <div>
      {menuItems.map((item, index) => {
        const isCurrentRoute = history.location.pathname === item.path;

        return (
          <button
            type="button"
            className={styles['menu-item']}
            onKeyPress={() => {}}
            key={`menu-item-${index}`}
            onClick={() => history.push(item.path)}
          >
            {isCurrentRoute && (
              <img
                className={styles['menu-tomato']}
                src={menuItemTomato}
                alt={item.displayName}
              />
            )}
            <span className={isCurrentRoute ? styles.isActive : ''}>{item.displayName}</span>
          </button>
        );
      })}
    </div>
  </div>
);

NavBar.propTypes = {
  history: PropTypes.shape(),
};

export default withRouter(NavBar);
