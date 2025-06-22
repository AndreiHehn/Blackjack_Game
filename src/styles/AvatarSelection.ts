import styled from "styled-components";

export const Container = styled.div`
  /* max-width: 360px; */
  width: 90%;
  overflow: hidden;
  gap: 5px;

  .avatar-wrapper {
    display: flex !important;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
  }

  .avatar-item {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid transparent;
    transition: transform 0.2s, border-color 0.2s;
    cursor: pointer;
    background-color: #f9f9f9;
  }

  .avatar-item:hover {
    transform: scale(1.1);
    border-color: #71717a;
  }

  .avatar-item.selected {
    border: 3px solid #aa0505;
  }

  .slick-slider {
    position: relative;
    width: 100%;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
  }

  .slick-track {
    display: flex;
    overflow: hidden;
  }

  .carouselArrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-50%) scale(1.1);
    }
  }

  .carouselArrow:first-of-type {
    left: 0px;
  }

  .carouselArrow:last-of-type {
    right: 0px;
  }
`;
