import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Layout.module.css'
import { useSelector } from 'react-redux';
import { selectAuthenticated } from 'redux/selectors/auth.selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { ReactComponent as IconBook} from "assets/icons/phonebook.svg";
import { ReactComponent as IconHome } from "assets/icons/home.svg";
import { ReactComponent as IconLogin} from "assets/icons/login.svg";
import { ReactComponent as IconRegistration} from "assets/icons/registration.svg";

export const Layout = ({ children }) => {
  const authenticated = useSelector(selectAuthenticated);
  const navLinkClass = `${css.navLink} ${css.active}`

  return (
    <>
      <header>
        <nav className={css.nav}>
          <NavLink className={({ isActive }) =>
            (isActive ? navLinkClass : css.navLink)
          }
            to="/"
          >
            <IconHome className={css.icon} />Home
          </NavLink>
          {authenticated ? (
            <>
              <NavLink className={({ isActive }) =>
            (isActive ? navLinkClass : css.navLink)
          }
              to="/contacts"
            >
              <IconBook className={css.icon} /> Contacts
            </NavLink>
          <UserMenu />
        </>
          ) : (
            <div className={css.navContainer}>
              <NavLink className={({ isActive }) =>
            (isActive ? navLinkClass : css.navLink)
          }
                  to="/register"
                >
                <IconRegistration className={css.icon} />Register
              </NavLink>
              <NavLink className={({ isActive }) =>
            (isActive ? navLinkClass : css.navLink)
          }
                  to="/login"
                >
                <IconLogin className={css.icon} />Login
              </NavLink>
            </div>
          )}
        </nav>
      </header>
      <main>
        {children}
      </main>
    </>
  )
}
