import React, { useRef, useState } from "react";
import styled from "styled-components";
import Accordion from "../../components/accordion/Accordion";
import Footer from "../../components/footer/Footer";
import currency_exchange from "../../icons/currency_exchange.svg";
import real_estate_agent from "../../icons/real_estate_agent.svg";
import handshake from "../../icons/handshake.svg";
import edit from "../../icons/edit.svg";
import file_text from "../../icons/file_text.svg";
import loyalty from "../../icons/loyalty.svg";
import mail from "../../icons/mail.svg";
import monitoring from "../../icons/monitoring.svg";
import query_stats from "../../icons/query_stats.svg";
import webhook from "../../icons/webhook.svg";
import factory from "../../icons/factory.svg";
import logo from "../../icons/logo.svg";
import legal from "../../icons/legal.svg";
import places from "../../icons/places.svg";
import metropolitan from "../../icons/metropolitan.svg";
import hyde from "../../icons/hyde.svg";
import orbit from "../../icons/orbit.svg";
import sage from "../../icons/sage.svg";
import mixed_tenure from "../../icons/mixed_tenure.svg";
import { NavLink, useNavigate } from "react-router-dom";
import SliderComponent from "../../components/slider/Slider";

import ReactPlayer from "react-player";
import ButtonComponent from "../../components/button/ButtonComponent";
import { Dialog } from "@progress/kendo-react-dialogs";
import Login from "../../components/auth/component/Login";
import ForgotPassword from "../../components/auth/component/ForgotPassword";
import EmailSentVerification from "../modals/EmailSentVerification";

// media queries for different screen sizes
const mediaQueries = {
  small: "@media (max-width: 699px)",
  medium: "@media (min-width: 700px) and (max-width: 1024px)",
  large: "@media (min-width: 1025px)",
};

const Navbar = styled.div`
  width: 100%;
  display: flex;
  padding: 16px 5%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.2px solid #fff;
  background: #1b3f58;
  color: #fff;
`;

const NavbarMid = styled.ul`
  width: 40%;
  display: flex;
  justify-content: space-around;
  // gap: 2rem;
  align-items: flex-start;
  list-style: none;

  ${mediaQueries.medium} {
    width: 50%;
  }

  ${mediaQueries.small} {
  }

  li a {
    text-decoration: none;
    color: #fff;
    // font-weight: bold;
  }

  // li a:hover {
  //   color: #fff;
  // }

  .active {
    color: #f09021;
  }
`;

const NavbarButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  a {
    text-decoration: none;
    color: #fff;
  }
  .active {
    color: #f09021;
  }
`;

const HeroComponent = styled.div`
  height: 110vh;
  // width: 100%;
  background: #1b3f58;
  color: #fff;
  padding: 20px 80px 0;
  position: relative;
`;

const HeroComponentInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  // height: 100%;
  margin-top: 40px;

  .left {
    padding: 20px 0 10px;
    width: 55%;
    // height: 100%;

    h1 {
      weight: 600;
      font-size: 3rem;
      line-height: 67.2px;
    }
    .orangered {
      color: #f09021;
    }

    // ${mediaQueries.small} {
    //   h1 {
    //     font-size: 1.5rem;
    //   }
    // }
  }

  .right {
    // height: 100%;
    width: 40%;

    p {
      weight: 500;
      font-size: 1.125rem;
      line-height: 25.2px;
      margin-bottom: 25px;
    }

    .right-mid {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .inp-container {
        width: 100%;
        display: flex;

        input {
          width: 77%;
          padding: 10px 20px;
          border: none;
          outline: none;
        }

        .signup-container {
          width: 23%;

          .sign-up-btn {
            width: 100%;
          }
        }
      }

      .partitioner {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;

        .liner {
          width: 35%;
          height: 1px;
          background: #d9d9d9;
        }
      }

      .signup-365 {
        width: 100%;
      }
    }
  }
`;

const HeroComponentImage = styled.div`
  // position: absolute;
  // bottom: -100px;
  // left: 20;
  // right: 20;
  // transform: translate(-50%, -50%);
  width: 100%;
  height: 70vh;
  margin-top: 6rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AchievementsComponent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 56px 80px;
  margin-top: 200px;
  // gap: 2rem;
  justify-content: space-between;
  ${mediaQueries.small} {
    display: block;
  }
  ${mediaQueries.medium} {
    // margin-top: 50px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  max-width: 30%;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  h1 {
    font-family: Figtree;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 3.5rem;
    letter-spacing: 0em;
    text-align: left;
  }

  p {
    font-family: Figtree;
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.5625rem;
    letter-spacing: 0em;
    text-align: left;
  }
`;

const RightSection = styled.div`
  display: flex;
  max-width: 60%;
  align-items: center;
  gap: 2rem;
  justify-content: space-around;

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    .svg-icon {
      width: 4rem;
      height: 4rem;

      > img {
        height: 100%;
        width: 100%;
      }
    }

    .numbers-info {
      display: inline-flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;

      .numbers {
        color: #f09021;
        font-family: Figtree;
        font-size: 2rem;
        font-weight: 700;
        line-height: 3rem;
        letter-spacing: 0em;
      }

      .info {
        color: #556877;
        font-family: Figtree;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.375rem;
        letter-spacing: 0.04em;
      }
    }
  }
`;

const EvaluationComponent = styled.div`
  width: 100%;
  padding: 80px;
  display: flex;
  align-items: center;
  gap: 3rem;

  .left {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .left-img {
      width: 80%;
      height: auto;
      background: lightgray 50% / cover no-repeat, #1b3f58;
    }
  }

  .right {
    width: 60%;
    border: 1px solid red;
  }
`;

const WhyIvalComponent = styled.div`
  padding: 16px 5% 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fcfbf9;

  h1 {
    padding: 50px;
  }

  .ival-info-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

    .ival-info-card {
      display: flex;
      width: 288px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      padding: 20px 0;
    }
  }
`;

const VideoContainerComponent = styled.div`
  padding: 16px 80px;
  display: flex;
  background: #1b3f58;
  color: #fff;
  height: 80vh;
  align-items: center;
  gap: 50px;

  .left {
    width: 60%;

    .react-player {
      // height: auto !important;
      // aspect-ratio: 16/9;
    }
  }

  .right {
    display: flex;
    width: 482px;
    flex-direction: column;
    align-items: flex-start;
    gap: 54px;

    .steps-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 32px;
      align-self: stretch;

      .steps {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;

        .steps-icon {
          .inner-svg {
            position: absolute;
            left: 12px;
            bottom: 11.5px;
          }
        }

        .steps-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
        }
      }
    }
  }
`;

const CarouselComponent = styled.div`
  background: #fff;
  height: 90vh;
  padding: 50px 5% 20px;
  // margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

const PartnerComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 64px;
  padding: 50px 5%;

  .partner-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    gap: 1.5rem;
    padding: 3rem 0;

    p {
      text-align: center;
    }
  }

  .partner-icons {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
    padding: 3rem 0;

    img {
      width: 8.81rem;
      height: 3.5rem;
    }
  }
`;

const LearnMoreComponent = styled.div`
  background: #1b3f58;
  width: 100%;
  // height: 60vh;
  color: #fff;
  display: flex;
  padding: 80px 5%;
  align-items: center;
  justify-content: space-between;
  // gap: 50px;

  .tenure-info {
    // height: 80%;
    display: flex;
    width: 60%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.5rem;

    .tenure-details {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding-bottom: 20px;

      h1 {
        font-family: Figtree;
        font-size: 2.5rem;
        font-weight: 600;
        line-height: 3.5rem;
        letter-spacing: 0em;
      }

      p {
        width: 80%;
        font-family: Figtree;
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 1.5625rem;
        letter-spacing: 0em;
        text-align: left;
      }
    }
  }

  .tenure-img {
    width: 28.7rem;
    height: 5rem;

    img {
      height: 100%;
      width: 100%;
    }
  }
`;

const VIDEO_PATH = "https://youtu.be/0BIaDVnYp2A";

const Home = () => {
  const playerRef = useRef(null);
  const [showDialog , setShowDialog] = useState(false);
  const [showForgotPassword,setShowForgotPassword] = useState(false)
  const [showEmailVerification, setShowEmailVerification] = useState(false);
   

  const toggleDialog=()=>{
    setShowDialog(true);
  }
  const navigate = useNavigate();
  const handleGetStarted = () =>{
    navigate("/signup");
  }
  return (
    <>
      <Navbar>
        <div>
          <img src={logo} alt="" />
        </div>
        <NavbarMid>
          <li>
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/about">
              About us
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/how">
              How it works
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/partners">
              Partners
            </NavLink>
          </li>
        </NavbarMid>
        <NavbarButtonContainer>
          <NavLink activeClassName="active" onClick={toggleDialog}>
            LogIn
          </NavLink>
          <ButtonComponent className="getstarted-btn" onClick={handleGetStarted}>
            get started
          </ButtonComponent>
        </NavbarButtonContainer>
      </Navbar>

      <HeroComponent>
        <HeroComponentInfo>
          <div className="left">
            <h1>
              Transforming the Valuation and Tendering of{" "}
              <span className="orangered"> Mixed Tenure Developments </span>
            </h1>
          </div>
          <div className="right">
            <p>
              Instant Desktop Valuations for S106, Affordable Housing and
              PRS/BTR
            </p>
            <div className="right-mid">
              <div className="inp-container">
                <input type="text" placeholder="Enter your email" />
                <div className="signup-container">
                  <ButtonComponent className="sign-up-btn">
                    Sign up
                  </ButtonComponent>
                </div>
              </div>
              <div className="partitioner">
                <div className="liner"></div>
                <span>or</span>
                <div className="liner"></div>
              </div>
              <ButtonComponent className="signup-365">
                Sign up with office 365
              </ButtonComponent>
            </div>
          </div>
        </HeroComponentInfo>
        <HeroComponentImage>
          <img src="/heroImage.png" alt="Hero section" />
        </HeroComponentImage>
      </HeroComponent>

      <AchievementsComponent>
        <LeftSection>
          <h1>Over a decade of Achievements</h1>
          <p>With our super powers we have reached this.</p>
        </LeftSection>
        <RightSection>
          <div>
            <span className="svg-icon">
              <img src={currency_exchange} alt="" />
              {/* <img className="currency" src={} alt="currency exchange" /> */}
            </span>
            <div className="numbers-info">
              <span className="numbers">£ 200,000K</span>
              <span className="info">VALUATIONS</span>
            </div>
          </div>
          <div>
            <span className="svg-icon">
              <img src={real_estate_agent} alt="" />
            </span>
            <div className="numbers-info">
              <span className="numbers">153</span>
              <span className="info">LAND OWNERS</span>
            </div>
          </div>
          <div>
            <span className="svg-icon">
              <img src={handshake} alt="" />
            </span>
            <div className="numbers-info">
              <span className="numbers">38</span>
              <span className="info">PARTNERS</span>
            </div>
          </div>
        </RightSection>
      </AchievementsComponent>

      <EvaluationComponent>
        <div className="left">
          <h1>We help you to Valuation & Tendering</h1>
          <div className="left-img">
            <img src="/valuationImg.png" alt="" />
          </div>
        </div>
        <div className="right">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, non?
          Illo eum neque praesentium suscipit voluptates dignissimos fugiat
          nulla pariatur error natus sint iste mollitia, harum fuga id dicta
          voluptas quaerat sit et facilis! Deleniti voluptate nobis, cum
          dignissimos earum culpa? Reprehenderit quidem voluptatem illo pariatur
          iste vero accusantium dignissimos.
        </div>
      </EvaluationComponent>

      <WhyIvalComponent>
        <h1>Why use Ival ?</h1>
        <div className="ival-info-container">
          <div className="ival-info-card">
            <span className="card-svg">
              <img src={handshake} alt="" />
            </span>
            <h3>Access to Partners</h3>
            <p>
              Over 38* Industry recognised Partners including regional and
              national (for profit and not for profit) HA's & Funds
            </p>
          </div>
          <div className="ival-info-card">
            <span className="card-svg">
              <img src={factory} alt="" />
            </span>
            <h3>Access to Partners</h3>
            <p>
              Over 38* Industry recognised Partners including regional and
              national (for profit and not for profit) HA's & Funds
            </p>
          </div>
          <div className="ival-info-card">
            <span className="card-svg">
              <img src={real_estate_agent} alt="" />
            </span>
            <h3>Access to Partners</h3>
            <p>
              Over 38* Industry recognised Partners including regional and
              national (for profit and not for profit) HA's & Funds
            </p>
          </div>
          <div className="ival-info-card">
            <span className="card-svg">
              <img src={query_stats} alt="" />
            </span>
            <h3>Access to Partners</h3>
            <p>
              Over 38* Industry recognised Partners including regional and
              national (for profit and not for profit) HA's & Funds
            </p>
          </div>
          <div className="ival-info-card">
            <span className="card-svg">
              <img src={monitoring} alt="" />
            </span>
            <h3>Access to Partners</h3>
            <p>
              Over 38* Industry recognised Partners including regional and
              national (for profit and not for profit) HA's & Funds
            </p>
          </div>
          <div className="ival-info-card">
            <span className="card-svg">
              <img src={webhook} alt="" />
            </span>
            <h3>Access to Partners</h3>
            <p>
              Over 38* Industry recognised Partners including regional and
              national (for profit and not for profit) HA's & Funds
            </p>
          </div>
          <div className="ival-info-card">
            <span className="card-svg">
              <img src={loyalty} alt="" />
            </span>
            <h3>Access to Partners</h3>
            <p>
              Over 38* Industry recognised Partners including regional and
              national (for profit and not for profit) HA's & Funds
            </p>
          </div>
        </div>
      </WhyIvalComponent>

      <VideoContainerComponent>
        <div className="left">
          <ReactPlayer
            className="react-player"
            ref={playerRef}
            url={VIDEO_PATH}
            controls={true}
            width="100%"
          />
        </div>
        <div className="right">
          <div className="steps-container">
            <h3>Just 3 easy steps</h3>
            <div className="steps">
              <span className="steps-icon">
                <img src={mail} alt="" />
              </span>
              {/* <span className="inner-svg">
                
              </span> */}
              <div className="steps-info">
                <span className="steps-heading">Step 1</span>
                <span className="steps-details">
                  Simply register with your email or google account
                </span>
              </div>
            </div>
            <div className="steps">
              <span className="steps-icon">
                <img src={edit} alt="" />
              </span>
              <div className="steps-info">
                <span className="steps-heading">Step 2</span>
                <span className="steps-details">Input your scheme data</span>
              </div>
            </div>
            <div className="steps">
              <span className="steps-icon">
                <img src={file_text} alt="" />
              </span>
              <div className="steps-info">
                <span className="steps-heading">Step 3</span>
                <span className="steps-details">
                  Receive your instant valuation
                </span>
              </div>
            </div>
          </div>
          <div className="download">
            <ButtonComponent className="">Download Example</ButtonComponent>
          </div>
        </div>
      </VideoContainerComponent>

      <CarouselComponent>
        <SliderComponent />
      </CarouselComponent>

      <PartnerComponent>
        <div className="partner-info">
          <h1>Become a partner</h1>
          <p>
            ival is used by the nations biggest affordable housing and PRS
            platforms, but is open to anyone. To learn how to become a partner
            you can learn more here
          </p>
          <ButtonComponent className="">Enquire</ButtonComponent>
        </div>
        <div className="partner-icons">
          <img src={legal} alt="" />
          <img src={sage} alt="" />
          <img src={places} alt="" />
          <img src={metropolitan} alt="" />
          <img src={hyde} alt="" />
          <img src={orbit} alt="" />
        </div>
      </PartnerComponent>

      <LearnMoreComponent>
        <div className="tenure-info">
          <div className="tenure-details">
            <h1>Disrupting the Real Estate Industry</h1>
            <p>
              A Technology and Consultancy company like no other.
              Revolutionising the way in which Prop-Tech can help maximise
              returns for everyone in the property chain.
            </p>
          </div>
          <div className="learn-more-btn">
            <ButtonComponent className="">Learn more</ButtonComponent>
          </div>
        </div>
        <div className="tenure-img">
          <img src={mixed_tenure} alt="" />
        </div>
      </LearnMoreComponent>

      <Accordion />

      <Footer />
      {showDialog && (
                <Dialog >
                <Login setShowForgotPassword={setShowForgotPassword} setShowLogin ={setShowDialog}/>
              </Dialog>
              )}
              
              {showForgotPassword && (
              <Dialog>
                <ForgotPassword setShowEmailVerification={setShowEmailVerification} setShowForgotPassword={setShowForgotPassword}/>
              </Dialog>
            )}
            {showEmailVerification && (
              <Dialog>
                <EmailSentVerification setShowEmailVerification = {setShowEmailVerification} setShowLogin={setShowDialog}/>
              </Dialog>
            )}
    </>
  );
};

export default Home;
