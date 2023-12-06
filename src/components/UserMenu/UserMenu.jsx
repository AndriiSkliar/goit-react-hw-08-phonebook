import { useDispatch, useSelector } from "react-redux";
import { logOutThunk } from "redux/auth/auth.operations";
import { selectUserData } from "redux/selectors/auth.selectors";
import { ReactComponent as IconLogout } from "assets/icons/logout.svg";
import css from './UserMenu.module.css'

export const UserMenu = () => {
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  return (
  <div className={css.navContainer}>
    <p className={css.navText}>{userData.email}</p>
    <button className={css.navBtn} onClick={() => { dispatch(logOutThunk()) }}><IconLogout className={css.icon} />Logout</button>
  </div>
)
}
