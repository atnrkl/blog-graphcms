// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { request, gql } from "graphql-request";

const GRAPH_API_KEY = process.env.HYGRAPH_KEY;

export const getPosts = async () => {
  const query = gql`
    query PostsQuery {
      query
      Posts {
        postsConnection {
          edges {
            node {
              id
              author {
                bio
                name
                id
              }
              createdAt
              excerpt
              slug
              title
              featuredImage {
                url
              }
              categories {
                slug
                name
              }
            }
          }
        }
      }
    }
  `;
  const result = await request(GRAPH_API_KEY!, query);
  console.log(result);
  return result.postsConnection.edges.node;
};
