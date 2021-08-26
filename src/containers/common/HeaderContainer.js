import React from 'react';

import Header from '../../components/common/Header';



const HeaderContainer = () => {

  return (
    <Header/>
  );
};

export default HeaderContainer;
/*
const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;

*/
