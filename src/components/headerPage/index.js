import React from 'react';
import { Link } from 'react-router-dom';
import { isUserAuthenticated } from '../../utils/cookie';

function logout() {
  document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  document.cookie = 'userData=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

const Header = () => {
  const listMenu = ['home', 'product', 'contact', 'infoCorona'];
  return (
    <div className="header">
      {listMenu.map((name) => {
        return (
          <Link to={`/${name}`} key={name}>
            <div className="menu">{name}</div>
          </Link>
        );
      })}
      {isUserAuthenticated() ? (
        <button
          onClick={() => {
            logout();
          }}
          type="button"
        >
          logout
        </button>
      ) : (
        <div />
      )}
    </div>
  );
};
export default Header;
