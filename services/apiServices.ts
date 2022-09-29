import { gql, ApolloQueryResult } from "@apollo/client";
import client from "../config/apollo-client";
import { ICharactersResponse } from "../interfaces/charactersResponse";

interface IApiServices {
  getCharacters: () => Promise<ApolloQueryResult<ICharactersResponse>>;
}

const queries = {
  getCharacters: gql`
    {
      allPeople {
        people {
          name
          id
          homeworld {
            name
          }
          species {
            name
          }
          gender
          height
          mass
          skinColor
          eyeColor
          birthYear
          filmConnection {
            films {
              title
              director
              planetConnection {
                planets {
                  name
                }
              }
              id
            }
          }
        }
      }
    }
  `
};

export const apiServices: IApiServices = {
  getCharacters: () => {
    return client.query({
      query: queries.getCharacters,
    });
  }
};
