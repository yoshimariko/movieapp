import { RestLink } from 'apollo-link-rest';
import { ApolloClient, DocumentNode, InMemoryCache, gql } from '@apollo/client';

// ================================================
// GraphQL Settings
// ================================================
const restLink = new RestLink({
  uri: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
  }
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink
});

export const GET = (query: DocumentNode, variables?: any) => {
  return client.query({ query, variables }).then((res) => res.data);
};

// ================================================
// TMDB Config
// ================================================
const configQuery = gql`
  query GetConfig($key: String) {
    config(key: $key)
      @rest(type: "Config", path: "/configuration?api_key={args.key}") {
      images
    }
  }
`;

export const IMAGE_PATH = client
  .query({
    query: configQuery,
    variables: { key: process.env.REACT_APP_API_KEY }
  })
  .then((res) => {
    return res.data.config.images.secure_base_url + 'original/';
  });

// ================================================
// Others
// ================================================
/**
 * No genre API available, using this as alternative.
 * source: https://www.themoviedb.org/talk/5f58b094befb0900355684a6
 */
export const GENRE: { [key: string]: string } = {
  '28': 'Action',
  '12': 'Adventure',
  '16': 'Animation',
  '35': 'Comedy',
  '80': 'Crime',
  '99': 'Documentary',
  '18': 'Drama',
  '10751': 'Family',
  '14': 'Fantasy',
  '36': 'History',
  '27': 'Horror',
  '10402': 'Music',
  '9648': 'Mystery',
  '10749': 'Romance',
  '878': 'Sci-Fi',
  '10770': 'TV Movie',
  '53': 'Thriller',
  '10752': 'War',
  '37': 'Western'
};
