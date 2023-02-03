// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { request, gql } from "graphql-request";

import { LatestPost, Node, Post, Slug } from "../typings";
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

export const getDetailedPost = async (slug: string) => {
  const query = gql`
    query DetailedPost($slug: String) {
      postsConnection(where: { slug: $slug }) {
        edges {
          node {
            author {
              name
              photo {
                url
              }
            }
            categories {
              name
              slug
            }
            id
            slug
            title
            createdAt
            featuredImage {
              url
            }
            content {
              html
            }
          }
        }
      }
    }
  `;
  const result = await request(GRAPH_API_KEY!, query, { slug: slug });
  return result.postsConnection.edges;
};

export const getSlugs = async () => {
  const query = gql`
    query GetSlugs {
      postsConnection {
        edges {
          node {
            slug
          }
        }
      }
    }
  `;
  const result = await request(GRAPH_API_KEY!, query);

  const slugs: Slug[] = [];
  result.postsConnection.edges.map((node: Node) => slugs.push(node.node));
  return slugs;
};

export const getLatestTitles = async (): Promise<LatestPost[]> => {
  const query = gql`
    query GetLatestTitles {
      posts(first: 3, orderBy: publishedAt_DESC) {
        title
        slug
        author {
          photo {
            url
          }
          name
        }
      }
    }
  `;
  const result = await request(GRAPH_API_KEY!, query);

  /* const latestTitles: Slug[] = [];
  result.postsConnection.edges.map((node: Node) =>
    latestTitles.push(node.node)
  ); */
  console.log(result.posts);
  return result.posts;
};
