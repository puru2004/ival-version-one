import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import logo from "../../icons/logo.svg";
import ButtonComponent from "../button/ButtonComponent";
import { useSelector } from "react-redux";
import { getUserDetails } from "./store/_request";
const HeaderComponent = styled.div`
  .main {
    width: 100%;
    padding: 60px 80px 40px;
    background: #1b3f58;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    .footer-top {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: flex-start;
      .left-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 48px;
        .contact-details {
          display: flex;
          align-items: flex-start;
          gap: 32px;
        }
      }
      .right-info {
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
        .buttons-container {
          display: flex;
          width: 100%;
          .getstarted-btn {
            background-color: #f09021;
            border: none;
            color: white;
            margin-right: 20px;
            padding: 0.7rem 2.8rem;
          }
          .login-btn {
            color: white;
            background-color: #1b3f58;
            padding: 0.66rem 4rem;
            border: 1px solid #fff;
          }
        }
      }
    }
    .footer-liner {
      width: 100%;
      height: 1px;
      background-color: #fff;
    }
    .footer-bottom {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      .service {
        display: flex;
        align-items: flex-start;
        gap: 32px;
      }
    }
    .heading {
      font-family: Figtree;

      font-size: 48px;
      font-weight: 600;
      line-height: 67px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
`;

const Header = () => {
  const user_details = useSelector((state)=>
    state?.authReducer?.user
  );
  return (
    <HeaderComponent>
      <div className="main">
        <div className="footer-top">
          <div className="left-info">
            <h1>Site valuation form</h1>
            <div>
              Your site valuation report will be sent to your email address in
              the next 24 hours</div> <div>and an agent will be in touch.</div>
            
          </div>
        
        <div className="right-info">
          <div>USER  :  {user_details?.name}</div>
          <div>Developer  :  {user_details?.developer_name}</div>
          <div>Email  :  {user_details?.email}</div>
        </div>
        </div>
      </div>
    </HeaderComponent>
  );
};

export default Header;
