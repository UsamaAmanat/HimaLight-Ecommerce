import { BasketToggle } from "@/components/basket";
import { HOME, SIGNIN, SHOP } from "@/constants/routes";
import { ShoppingOutlined, MenuOutlined } from "@ant-design/icons";
import logo from "@/images/logo-full.png";
import PropType from "prop-types";
import React, { useState } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import UserNav from "@/views/account/components/UserAvatar";
import Badge from "./Badge";
import FiltersToggle from "./FiltersToggle";
import SearchBar from "./SearchBar";

const MobileNavigation = (props) => {
  const { isAuthenticating, basketLength, disabledPaths, user } = props;
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClickLink = (e) => {
    if (isAuthenticating) e.preventDefault();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="mobile-navigation">
      <div className="mobile-navigation-main">
        <button
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          type="button"
        >
          <MenuOutlined style={{ fontSize: "1.5rem" }} />
        </button>

        <div className="mobile-navigation-logo">
          <Link onClick={onClickLink} to={HOME}>
            <img alt="HimaLight Logo" src={logo} />
          </Link>
        </div>

        <div className="mobile-nav-actions">
          <BasketToggle>
            {({ onClickToggle }) => (
              <button
                className="button-link navigation-menu-link basket-toggle"
                onClick={onClickToggle}
                disabled={disabledPaths.includes(pathname)}
                type="button"
              >
                <Badge count={basketLength}>
                  <ShoppingOutlined style={{ fontSize: "1.5rem" }} />
                </Badge>
              </button>
            )}
          </BasketToggle>
          {user && (
            <li className="mobile-navigation-item">
              <UserNav />
            </li>
          )}
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu-overlay">
          <ul className="mobile-menu-list">
            <li>
              <NavLink
                to={HOME}
                activeClassName="active"
                exact
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={SHOP} activeClassName="active" onClick={closeMenu}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to={SHOP} activeClassName="active" onClick={closeMenu}>
                Featured
              </NavLink>
            </li>
            <li>
              <NavLink to={SHOP} activeClassName="active" onClick={closeMenu}>
                Recommended
              </NavLink>
            </li>
            {!user && pathname !== SIGNIN && (
              <li>
                <Link
                  className="mobile-signin-link"
                  onClick={() => {
                    onClickLink();
                    closeMenu();
                  }}
                  to={SIGNIN}
                >
                  Sign In
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}

      <div className="mobile-navigation-sec">
        <SearchBar />
        <FiltersToggle>
          <button className="button-link button-small" type="button">
            <i className="fa fa-filter" />
          </button>
        </FiltersToggle>
      </div>
    </nav>
  );
};

MobileNavigation.propTypes = {
  isAuthenticating: PropType.bool.isRequired,
  basketLength: PropType.number.isRequired,
  disabledPaths: PropType.arrayOf(PropType.string).isRequired,
  user: PropType.oneOfType([PropType.bool, PropType.object]).isRequired,
};

export default MobileNavigation;
