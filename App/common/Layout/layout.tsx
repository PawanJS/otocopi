import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../Firebase/firebase.utils';
import { Header } from './Header/header';

export const Layout = ({ children }) => {
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);

  // useEffect(() => {
  //   onAuthStateChanged(
  //     auth,
  //     async((userAuth) => {
  //       if (userAuth) console.log('useeffect', userAuth);
  //       else console.log('No User');
  //     })
  //   );
  // });

  return (
    <>
      <Header />
      <h1>
        Login: <span>{userInfo.isLogin ? 'Logged in' : 'Not logged in'}</span>
      </h1>
      <h2>{userInfo.users[0]}</h2>
      {children}
    </>
  );
};
