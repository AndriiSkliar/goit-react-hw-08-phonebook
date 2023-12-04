import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAuthenticated, selectUserData } from 'redux/selectors/auth.selectors';
import css from './HomePage.module.css'

const HomePage = () => {
  const isAuthenticated = useSelector(selectAuthenticated);
  const userName = useSelector(selectUserData)?.name;

  return (
    <div className={css.homeContainer}>
      <h1>Contacts book</h1>
        {isAuthenticated ? (
          <h2>
            Hello, <span className={css.name}>{userName}</span>, enter to your{" "}
            <Link className={css.link} to="/contacts">
              contacts{" "}
            </Link>
            to find or create your contacts!
          </h2>
        ) : (
          <h2>
            Please{" "}
            <Link className={css.link} to="/register">
              register{" "}
            </Link>
            or{" "}
            <Link className={css.link} to="/login">
              login{" "}
            </Link>
            to see your contacts!
          </h2>
        )}
    </div>
  );
}

export default HomePage;
