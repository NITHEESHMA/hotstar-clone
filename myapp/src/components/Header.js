import React from "react";
import styled from "styled-components";
//import { Link } from 'react-router-dom';
import { auth, provider } from "../Firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../features/user/userSlice";
//
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      history.push("/");
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push("/login");
    });
  };

  return (
    <Nav>
      <Logo src="/images/logo.svg" />

      {!username ? (
        <LoginContainer>
          <Login onClick={signIn}>login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src="/images/home-icon.svg" alt="" />
              <span>Home</span>
            </a>

            <a>
              <img src="/images/search-icon.svg" alt="" />
              <span>Search</span>
            </a>

            <a>
              <img src="/images/watchlist-icon.svg" />
              <span>Watchlist</span>
            </a>

            <a>
              <img src="/images/original-icon.svg" />
              <span>Original</span>
            </a>

            <a>
              <img src="/images/movie-icon.svg" />
              <span>Movies</span>
            </a>

            <a>
              <img src="/images/series-icon.svg" />
              <span>Series</span>
            </a>
          </NavMenu>

          <UserImg
            onClick={signOut}
            src="https://tse1.mm.bing.net/th?id=OIP.OOh0PWJjoab-C0l3WQs4ugHaLL&pid=Api&P=0&w=122&h=184"
          />
        </>
      )}
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        right: 0;
        left: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: gray;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
    color: black;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
