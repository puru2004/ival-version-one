import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import signUp_img from "../../images/Rectangle77.svg";
import customerimg from "../../icons/customer.svg";
import "swiper/css";
import { Navigation, Pagination , Autoplay} from "swiper/modules";
// import { Swiper, SwiperSlide } from 'swiper/swiper-react.mjs';

const SwiperComponent = () => {
  const myStyle = {
    backgroundImage: `url(${signUp_img})`,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={myStyle}>
      <div style={{width: "45%" }}>
        <Swiper
          loop={true}
          autoplay={{
            delay:3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            waitForTransition: true,
          }}
          speed={1600}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          pagination={{ clickable: true }}
          effect="flip"
        >
          <SwiperSlide>
            <div
              style={{
                background: "white",
                height: "100%",
                width: "100%",
                padding: "44px 24px 24px 24px",
              }}
            >
              <div
                style={{
                  color: "#1B3F58",
                  fontSize: "1.25rem",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "1.75rem",
                }}
              >
                “I have been using ival for the past few months, and I can
                honestly say that it has revolutionised the way I work. The
                speed and accuracy of the system are unmatched, and I am now
                able to obtain accurate pricing in a fraction of the time it
                used to take me. I highly recommend this product to any land
                buyer or residential development professional looking to
                streamline their workflow.”
              </div>
              <div style={{ display: "flex", marginTop: "66px" }}>
                <div>
                  <img src={customerimg} alt="" />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "Start",
                    flexDirection: "column",

                  }}
                >
                  <div
                    style={{
                      marginLeft: "1.25rem",
                      color: "#1B3F58",
                      fontWeight: "500",
                      fontSize: "18px",
                      lineHeight: "25.2px",
                    }}
                  >
                    Davis Siphron
                  </div>
                  <div
                    style={{
                      marginLeft: "1.25rem",
                      color: "#F09021",
                      fontWeight: "500",
                      fontSize: "18px",
                      lineHeight: "25.2px",
                      marginTop: "5px",
                    }}
                  >
                    COO – Sage Homes
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background: "white",
                height: "100%",
                width: "100%",
                padding: "2.75rem 1.5rem 1.5rem 1.5rem",
              }}
            >
              <div
                style={{
                  color: "#1B3F58",
                  fontSize: "1.25rem",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "1.75rem",
                }}
              >
                “I have been using ival for the past few months, and I can
                honestly say that it has revolutionised the way I work. The
                speed and accuracy of the system are unmatched, and I am now
                able to obtain accurate pricing in a fraction of the time it
                used to take me. I highly recommend this product to any land
                buyer or residential development professional looking to
                streamline their workflow.”
              </div>
              <div style={{ display: "flex", marginTop: "4rem" }}>
                <div>
                  <img src={customerimg} alt="" />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "start",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      marginLeft: "1.25rem",
                      color: "#1B3F58",
                      fontWeight: "500",
                      fontSize: "18px",
                      lineHeight: "25.2px",
                    }}
                  >
                    Davis Siphron
                  </div>
                  <div
                    style={{
                      marginLeft: "1.25rem",
                      color: "#F09021",
                      fontWeight: "500",
                      fontSize: "18px",
                      lineHeight: "25.2px",
                      marginTop: "5px",
                    }}
                  >
                    COO – Sage Homes
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background: "white",
                height: "100%",
                width: "100%",
                padding: "2.75rem 1.5rem 1.5rem 1.5rem",
              }}
            >
              <div
                style={{
                  color: "#1B3F58",
                  fontSize: "1.25rem",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "1.75rem",
                }}
              >
                “I have been using ival for the past few months, and I can
                honestly say that it has revolutionised the way I work. The
                speed and accuracy of the system are unmatched, and I am now
                able to obtain accurate pricing in a fraction of the time it
                used to take me. I highly recommend this product to any land
                buyer or residential development professional looking to
                streamline their workflow.”
              </div>
              <div style={{ display: "flex", marginTop: "4rem" }}>
                <div>
                  <img src={customerimg} alt="" />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "start",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      marginLeft: "1.25rem",
                      color: "#1B3F58",
                      fontWeight: "500",
                      fontSize: "18px",
                      lineHeight: "25.2px",
                    }}
                  >
                    Davis Siphron
                  </div>
                  <div
                    style={{
                      marginLeft: "1.25rem",
                      color: "#F09021",
                      fontWeight: "500",
                      fontSize: "18px",
                      lineHeight: "25.2px",
                      marginTop: "5px",
                    }}
                  >
                    COO – Sage Homes
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background: "white",
                height: "100%",
                width: "100%",
                padding: "2.75rem 1.5rem 1.5rem 1.5rem",
              }}
            >
              <div
                style={{
                  color: "#1B3F58",
                  fontSize: "1.25rem",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "1.75rem",
                }}
              >
                “I have been using ival for the past few months, and I can
                honestly say that it has revolutionised the way I work. The
                speed and accuracy of the system are unmatched, and I am now
                able to obtain accurate pricing in a fraction of the time it
                used to take me. I highly recommend this product to any land
                buyer or residential development professional looking to
                streamline their workflow.”
              </div>
              <div style={{ display: "flex", marginTop: "4rem" }}>
                <div>
                  <img src={customerimg} alt="" />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "start",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      marginLeft: "1.25rem",
                      color: "#1B3F58",
                      fontWeight: "500",
                      fontSize: "18px",
                      lineHeight: "25.2px",
                    }}
                  >
                    Davis Siphron
                  </div>
                  <div
                    style={{
                      marginLeft: "1.25rem",
                      color: "#F09021",
                      fontWeight: "500",
                      fontSize: "18px",
                      lineHeight: "25.2px",
                      marginTop: "5px",
                    }}
                  >
                    COO – Sage Homes
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComponent;
