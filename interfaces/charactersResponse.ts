// Generated by https://quicktype.io

/* export interface ICharactersResponse {
    allPeople: AllPeople;
}

export interface AllPeople {
    people:     Person[];
}

export interface Person {
    name:       string;
    id:         string;
    img?:        string
} */

export interface ICharactersResponse {
    allPeople: AllPeople;
}

export interface AllPeople {
    people:     Person[];
}

export interface Person {
    name:           string;
    id:             string;
    homeworld:      Homeworld;
    species:        Homeworld | null;
    gender:         string;
    height:         number | null;
    mass:           number | null;
    skinColor:      string;
    eyeColor:       string;
    birthYear:      string;
    filmConnection: FilmConnection;
    img?:            string;
}

export interface FilmConnection {
    films:      Film[];
}

export interface Film {
    title:            string;
    director:         string;
    planetConnection: PlanetConnection;
    id:               string;
    img?:              string;
}

export interface PlanetConnection {
    planets:    Homeworld[];
}

export interface Homeworld {
    name:       string;
}
