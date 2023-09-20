import React from "react";
import PropTypes from "prop-types";
import { Button } from "@progress/kendo-react-buttons";
// import "./KendoButton.css";
import styled from "styled-components";

const ButtonContainer = styled.div`
  .custom-button {
    background-color: #f09021;
    color: white;
    border-radius: 0;
    border: none;
  }
`;

const KendoButton = ({ className, style, children, onClick }) => {
  return (
    <ButtonContainer>
      <Button className={`custom-button ${className}`} style={style} onClick={onClick}>
        {children}
      </Button>
    </ButtonContainer>
  );
};

KendoButton.propTypes = {
  className: PropTypes.string, // Additional CSS classes
  style: PropTypes.object, // Inline styles
  children: PropTypes.node, // Button content
  onClick: PropTypes.func,// function calling
};

export default KendoButton;
