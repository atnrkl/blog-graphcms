import { HtmlHTMLAttributes } from "react";

export type Post = {
  id: string;
  author?: Author;
  createdAt: string;
  excerpt: string;
  slug: string;
  title: string;
  featuredPost: boolean;
  featuredImage: Photo;
  categories: Categories;
};

export type Node = {
  node: Post;
};
export type Author = {
  bio?: string;
  name?: string;
  id?: string;
  photo?: Photo;
};

export type Photo = {
  url: string;
};

export type Slug = {
  slug: string;
};

export type SlugNode = {
  node: Slug;
};

export type DetailedPost = {
  id: string;
  author?: Author;
  createdAt: string;
  excerpt: string;
  slug: string;
  title: string;
  featuredPost: boolean;
  featuredImage: Photo;
  categories: Categories;
  content: any;
};

export type LatestPost = {
  title: string;
  slug: string;
  author?: Author;
};
