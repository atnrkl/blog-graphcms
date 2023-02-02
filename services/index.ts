// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { request, gql } from "graphql-request";

import { Node, Post } from "../typings";
const GRAPH_API_KEY = process.env.HYGRAPH_KEY;

export const getPosts = async (): Promise<Post[]> => {
  const query = gql`
    query Posts {
      postsConnection {
        edges {
          node {
            id
            author {
              bio
              name
              id
              photo {
                url
              }
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
            featuredPost
          }
        }
      }
    }
  `;
  const result = await request(GRAPH_API_KEY!, query);

  const posts: Post[] = [];

  result.postsConnection.edges.map((node: Node) => posts.push(node.node));

  return posts;
};
