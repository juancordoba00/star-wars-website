import React from "react";
import { Film } from "../../../interfaces/charactersResponse";
import { DetailCharacter } from "../detailCharacter/DetailCharacter";

interface IProps {
  film: Film;
}

export const ChipDetail = ({ film }: IProps) => {
  const planets: string = film?.planetConnection.planets
    .map((planet) => planet.name)
    .slice(0, 6)
    .join(", ");

  return (
    <div className="chip-container">
      <img
        className="chip-container__imgFilm"
        src={film.img}
        alt={film.title}
      />
      <div className="chip-container__boxDetails">
        <h3 className="chip-container__boxDetails__title">{film.title}</h3>
        <hr />
        <DetailCharacter title={"Director"} value={film.director} type="chip" />
        <div className="chip-container__boxDetails__planets">
          <DetailCharacter title={"Planets"} value={planets} type="chip" />
        </div>
      </div>
    </div>
  );
};
