import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import { useLayout } from './use-layout';

function Layout(): JSX.Element {
  const {isMainPage, isLoginPage, rootClassName} = useLayout();

  return (
    <div className={`page${rootClassName}`}>
      <Header
        isMainPage={isMainPage}
        isLoginPage={isLoginPage}
      />

      <Outlet/>
    </div>
  );
}

export default Layout;
