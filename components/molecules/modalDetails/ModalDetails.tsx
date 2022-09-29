import { Modal } from "@mui/material";
import React from "react";

import Slider from "react-slick";

import { AiOutlineCloseCircle } from "@react-icons/all-files/ai/AiOutlineCloseCircle";
import { Person } from "../../../interfaces/charactersResponse";
import { DetailCharacter } from "../../atoms/detailCharacter/DetailCharacter";
import { ChipDetail } from '../../atoms/chipDetail/ChipDetail';

interface IProps {
  character: Person;
  show: boolean;
  closeModal: (_: boolean) => void
}

interface IDetails {
  skinColor: string;
  mass: number;
  height: number;
  eyeColor: string;
  gender: string;
  species: string;
}

export const ModalDetails = ({ character, show, closeModal }: IProps) => {
  const details: IDetails = {
    skinColor: character.skinColor,
    mass: character.mass || 0,
    height: character.height || 0,
    eyeColor: character.eyeColor,
    gender: character.gender || "n/a",
    species: character.species?.name || "n/a",
  };

  const settings = {
    infinite: character.filmConnection?.films.length > 2 ? true : false,
    autoplay: character.filmConnection?.films.length > 2 ? true : false,
    slidesToShow: character.filmConnection?.films.length > 2 ? 2 : 1,
    swipeToSlide: true,
    slideToScroll: 1,
    speed: 500,
    initialSlide: 0,
    draggable: true,
    variableWidth: true,
  };

  return (
    <Modal open={show} classes={{ root: "modal-backGround" }}>
      <div className="modal-container">
        <AiOutlineCloseCircle className="modal-container__close" onClick={() => closeModal(false)} />
        <div className="modal-container__boxImageAndDatails">
          <img
            src={character.img}
            alt={character.name}
            className="modal-container__characterImg"
          />
          <div className="modal-container__details">
            <h2 className="modal-container__details__name">{character.name}</h2>
            {Object.entries(details).map((entrie, index) => {
              return (
                <DetailCharacter
                  title={entrie[0]}
                  value={entrie[1]}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <hr />
        <div className="modal-container__boxFilms">
          <h2>Films</h2>
          <Slider {...settings}>
            {
                character.filmConnection?.films.map(film => {
                    return (
                        <ChipDetail film={film} />
                    )
                })
            }
          </Slider>
        </div>
      </div>
    </Modal>
  );
};
