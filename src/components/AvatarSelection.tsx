/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "react-slick";
import avatar1 from "../../src/assets/icons/avatar_suits.png";
import avatar2 from "../../src/assets/icons/avatar_diamonds.png";
import avatar3 from "../../src/assets/icons/avatar_spades.png";
import avatar4 from "../../src/assets/icons/avatar_hearts.png";
import avatar5 from "../../src/assets/icons/avatar_clubs.png";

import ArrowNextIcon from "../../src/assets/icons/ArrowNextIcon.svg?react";
import ArrowPrevIcon from "../../src/assets/icons/ArrowPrevIcon.svg?react";
import { Container } from "../styles/AvatarSelection";

interface Props {
  selectedAvatar: string;
  onSelectAvatar: (avatar: string) => void;
}

const avatarList = [avatar1, avatar2, avatar3, avatar4, avatar5];

function NextArrow(props: any) {
  const { onClick } = props;
  return <ArrowNextIcon className="carouselArrow" onClick={onClick} />;
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return <ArrowPrevIcon className="carouselArrow" onClick={onClick} />;
}

export function AvatarSelection({ selectedAvatar, onSelectAvatar }: Props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Container>
      <Slider {...settings}>
        {avatarList.map((avatar, index) => (
          <div className="avatar-wrapper" key={index}>
            <img
              src={avatar}
              alt={`Avatar ${index + 1}`}
              className={`avatar-item ${
                selectedAvatar === avatar ? "selected" : ""
              }`}
              onClick={() => onSelectAvatar(avatar)}
            />
          </div>
        ))}
      </Slider>
    </Container>
  );
}
