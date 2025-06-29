/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "react-slick";

import avatar1 from "../../src/assets/icons/avatar_suits.png";
import avatar2 from "../../src/assets/icons/avatar_diamonds.png";
import avatar3 from "../../src/assets/icons/avatar_spades.png";
import avatar4 from "../../src/assets/icons/avatar_hearts.png";
import avatar5 from "../../src/assets/icons/avatar_clubs.png";
import avatar6 from "../../src/assets/icons/avatar_gambler.png";
import avatar7 from "../../src/assets/icons/avatar_dealer.png";
import avatar8 from "../../src/assets/icons/avatar_cards.png";
import avatar9 from "../../src/assets/icons/avatar_chips.png";

import ArrowNextIcon from "../../src/assets/icons/ArrowNextIcon.svg?react";
import ArrowPrevIcon from "../../src/assets/icons/ArrowPrevIcon.svg?react";
import { Container } from "../styles/AvatarSelection";
import { useRef } from "react";

interface Props {
  selectedAvatar: string;
  onSelectAvatar: (avatar: string) => void;
}

function NextArrow(props: any) {
  const { onClick } = props;
  return <ArrowNextIcon className="carouselArrow" onClick={onClick} />;
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return <ArrowPrevIcon className="carouselArrow" onClick={onClick} />;
}

export function AvatarSelection({ selectedAvatar, onSelectAvatar }: Props) {
  const avatarList = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
    avatar9,
  ];

  const reorderedList = useRef<string[]>(
    selectedAvatar
      ? [selectedAvatar, ...avatarList.filter((a) => a !== selectedAvatar)]
      : avatarList
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    draggable: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Container>
      <Slider {...settings}>
        {reorderedList.current.map((avatar, index) => (
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
