import React, { useState, useEffect } from "react";
import styled from "styled-components";
import customer from "../../icons/customer.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowLeft,
  faLongArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    id: 1,
    image: "image1.jpg",
    name: "Davis Siphron",
    description:
      "This software is a game-changer for everyone in the residential market place. Many claim to be a disruptor but this platform is the real deal",
  },
  {
    id: 2,
    image: "image2.jpg",
    name: "Davis Siphron",
    description:
      "This software is a game-changer for everyone in the residential market place. Many claim to be a disruptor but this platform is the real deal",
  },
  {
    id: 3,
    image: "image3.jpg",
    name: "Davis Siphron",
    description:
      "This software is a game-changer for everyone in the residential market place. Many claim to be a disruptor but this platform is the real deal",
  },
  {
    id: 4,
    image: "image4.jpg",
    name: "Davis Siphron",
    description:
      "This software is a game-changer for everyone in the residential market place. Many claim to be a disruptor but this platform is the real deal",
  },
  {
    id: 5,
    image: "image5.jpg",
    name: "Davis Siphron",
    description:
      "This software is a game-changer for everyone in the residential market place. Many claim to be a disruptor but this platform is the real deal",
  },
];

const CarouselHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;
  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 3rem;
    letter-spacing: 0em;
    text-align: left;
    width: 40%;
  }

  .arrow-container {

    display: flex;
    width: 15%;
    justify-content: space-evenly;

    .icon-container {
      .font-icons {
        font-size: 3rem;
      }
      .right-arrow {
      }
    }

    // .right {
    //   border: 1px solid #000;
    //   width: 80%;
    //   .right-arrow {
    //     width: 100%;
    //   }
    // }
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 90%;
  max-width: 100%; /* Adjust the maximum width as needed */
  gap: 2rem;
`;

const CarouselSlide = styled.div`
  flex: 0 0 32.33%; /* Show three slides at a time */
  transition: transform 0.5s ease;
  background: #fff;
  height: 100%;
`;

const SlideContent = styled.div`
  background: #1b3f58;
  color: #fff;
  padding: 32px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4rem;
  height: 100%;

  p {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.75rem;
    letter-spacing: 0em;
    text-align: left;
  }

  .customer-info {
    display: flex;
    gap: 2rem;

    .customer-name {
      h5 {
        font-size: 1.375rem;
        font-weight: 600;
        line-height: 1.93rem;
        letter-spacing: 0em;
        text-align: left;
      }
      h6 {
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 1.56rem;
        letter-spacing: 0em;
        text-align: left;
      }
    }
  }
`;

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + data.length) % data.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto slide every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <>
      <CarouselHeader>
        <h1 className="heading">What our customers are saying</h1>
        <div className="arrow-container">
          <span className="icon-container left" onClick={prevSlide}>
            <FontAwesomeIcon
              icon={faLongArrowLeft}
              size="lg"
              color={currentIndex === 0 ? "#ccc" : "orange"}
              className="font-icons"
            />
          </span>
          <span className="icon-container right" onClick={nextSlide}>
            <FontAwesomeIcon
              icon={faLongArrowRight}
              size="100px"
              color={currentIndex === data.length - 1 ? "#ccc" : "orange"}
              className="font-icons right-arrow"
            />
          </span>
        </div>
      </CarouselHeader>

      <CarouselContainer>
        {data.map((slide, index) => (
          <CarouselSlide
            key={slide.id}
            style={{
              transform: `translateX(-${currentIndex * 33.33}%)`,
            }}
          >
            <SlideContent>
              <p>{slide.description}</p>
              <div className="customer-info">
                <div className="customer-icon">
                  <img src={customer} alt="customer icon" />
                </div>
                <div className="customer-name">
                  <h5>{slide.name}</h5>
                  <h6>COO - Sage Homes</h6>
                </div>
              </div>
            </SlideContent>
          </CarouselSlide>
        ))}
      </CarouselContainer>
    </>
  );
};

export default Slider;
