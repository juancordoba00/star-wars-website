import React from "react";
import { Card } from "../../molecules/card/Card";
import { Person } from "../../../interfaces/charactersResponse";

interface IProps {
  characters: Person[];
}

export const ContainerCards = React.memo(({ characters }: IProps) => {

  return (
    <section className="containerCards">
      {
        characters.map((character: Person, index: number) => {
            return <Card character={character} key={index} />;
        })
      }
    </section>
  );
});
