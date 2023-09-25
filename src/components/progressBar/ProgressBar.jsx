import React, { useState, useEffect } from "react";
import "./ProgressBar.css";
import styled from "styled-components";

const Content = styled.div`
  width: 85%;

  div {
    padding: 20px;
    width: 100%;

    p {
      font-family: Figtree;
      font-size: 18px;
      font-weight: 500;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
`;

const VerticalProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 10%;
`;

const VerticalProgressBar = () => {
  const [progress, setProgress] = useState(25);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const paragraphs = [
    "Market Leading Tendering Software with Partner Identification Algorithm",
    "Automated Reports to assist Land Bids & Board Reports",
    "Sales progression software with real-time notifications and updates",
    "Integrated platform with bespoke management reporting",
  ];

  // Function to update progress
  const updateProgress = () => {
    if (progress < 100) {
      setProgress(progress + 25);
    } else {
      setProgress(25);
    }
  };

  // Function to highlight the paragraph at the given index
  const highlightParagraph = (index) => {
    setHighlightedIndex(index);
  };

  // Set up a timer to update progress every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      updateProgress();
      highlightParagraph(displayNumber % paragraphs.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [progress, highlightedIndex]);

  // Calculate the number to display based on progress
  const displayNumber = Math.floor((progress / 100) * 4);

  return (
    <>
      <Content>
        {paragraphs.map((paragraph, index) => (
          <div
            key={index}
            className={`highlight-paragraph ${
              index === highlightedIndex ? "highlighted" : ""
            }`}
          >
            <p>{paragraph}</p>
          </div>
        ))}
      </Content>
      <VerticalProgressBarContainer>
        <div className="vertical-progress-bar">
          <div
            className="vertical-progress"
            style={{ height: `${progress}%`, backgroundColor: "orange" }}
          ></div>
        </div>
        <div className="number">0{displayNumber}/04</div>
      </VerticalProgressBarContainer>
    </>
  );
};

export default VerticalProgressBar;
