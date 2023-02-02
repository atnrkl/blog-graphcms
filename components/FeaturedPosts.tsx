import React from "react";
import { Post } from "../typings";

type Props = {
  posts: Post[];
};

function FeaturedPosts({ posts }: Props) {
  return <div>FeaturedPosts</div>;
}

export default FeaturedPosts;
