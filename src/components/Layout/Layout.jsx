import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Layout.module.css'
import { useSelector } from 'react-redux';
import { selectAuthenticated } from 'redux/selectors/auth.selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Layout = ({ children }) => {
  const authenticated = useSelector(selectAuthenticated);

  return (
    <div className="container">
      <header>
        <nav className={css.nav}>
          <NavLink className={css.navLink} to="/"><span className={css.navLinkSpan}>Home</span></NavLink>
          {authenticated ? (
            <>
              <NavLink className={css.navLink} to="/contacts"><span className={css.navLinkSpan}>Contacts</span></NavLink>
              <UserMenu />
            </>
          ) : (
            <>
              <NavLink className={css.navLink} to="/register"><span className={css.navLinkSpan}>Register</span></NavLink>
              <NavLink className={css.navLink} to="/login"><span className={css.navLinkSpan}>Login</span></NavLink>
            </>
          )}
        </nav>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}
