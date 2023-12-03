import { useDispatch, useSelector } from "react-redux";
import { logOutThunk } from "redux/auth/auth.operations";
import { selectUserData } from "redux/selectors/auth.selectors";

export const UserMenu = () => {
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(logOutThunk())
  }

  return (
  <div>
    <span>Hello, {userData.name}!</span>
    <p>{userData.email} <span>active!</span></p>
    <button onClick={onClick}>Log Out</button>
  </div>
)
}
