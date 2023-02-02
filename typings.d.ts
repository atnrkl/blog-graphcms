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
