import { NavLink, Outlet } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.navigation}>
          <ul className={css.navList}>
            <NavLink className={css.logoItem} to="/">
              Camper Rent
            </NavLink>
            <li className={css.navItem}>
              <NavLink className={css.navText} to="/">
                Home
              </NavLink>
            </li>
            <li className={css.navItem}>
              <NavLink className={css.navText} to="/catalog">
                Catalog
              </NavLink>
            </li>
            <li className={css.navItem}>
              <NavLink className={css.navText} to="/favorites">
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
