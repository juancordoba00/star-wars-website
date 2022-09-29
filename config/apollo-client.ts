import { ApolloClient, InMemoryCache, NormalizedCacheObject, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
    uri: process.env.API_URL,
})

const client = new ApolloClient({
    uri: process.env.API_URL,
    cache: new InMemoryCache(),
});

export default client;