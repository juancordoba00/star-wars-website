import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { Logo } from "../components/atoms/logo/Logo";

import LogoStarWars from "../assets/images/STAR_WARS_LOGO.webp";
import { apiServices } from "../services/apiServices";
import { ContainerCards } from "../components/organisms/containerCards/ContainerCards";
import { Person } from "../interfaces/charactersResponse";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ModalDetails } from "../components/molecules/modalDetails/ModalDetails";
import { Layout } from "../components/templates/layout/Layout";

interface IProps {
  characters: Person[];
}

const Home: NextPage<IProps> = ({ characters }) => {
  const router = useRouter();

  const [characterDetails, setCharacterDetails] = useState<Person>(
    {} as Person
  );
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (router.query?.id) {
      const characterCurrent = characters.find(
        (ch) => ch.id === router.query.id
      )!;
      setCharacterDetails(characterCurrent);
      setShowModal(true);
      return;
    }
  }, [router.query, characters]);

  return (
    <Layout>
      <Head>
        <title>Star Wars Characters</title>
      </Head>

      <main className="container__main">
        <Logo source={LogoStarWars.src} />

        <ModalDetails
          character={characterDetails}
          show={showModal}
          closeModal={setShowModal}
        />

        <ContainerCards characters={characters} />
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const imageBaseUrl = process.env.CLOUDINARY_BASE_URL;

  const {
    data: { allPeople },
  } = await apiServices.getCharacters();

  const dataWithImage = allPeople.people.map((ch, index) => {
    const filmsWithIamge = ch.filmConnection.films.map((film) => {
      return { ...film, img: `${imageBaseUrl}${film.id}.jpg` };
    });

    return {
      ...ch,
      img: `${imageBaseUrl}${index + 1}.jpg`,
      filmConnection: { films: filmsWithIamge },
    };
  });

  return {
    props: {
      characters: dataWithImage,
    },
  };
};

export default Home;
