import React from "react";
import { Categories, PostCard, PostWidgets } from "../components";
import FeaturedPosts from "../components/FeaturedPosts";
/* import { getPosts } from "./api/getPosts"; */
import { getPosts } from "../services";
import { Post } from "../typings";

type Props = {
  posts: Post[];
};

export default function Main(props: Props) {
  return (
    <main className="container mx-auto px-10 mb-8">
      <FeaturedPosts posts={props.posts} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {props.posts?.map((post) => (
            <PostCard post={post} key={post.slug} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidgets />
            <Categories />
          </div>
        </div>
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API

  const res = await getPosts();

  /*  const data = await res.json(); */

  // Pass data to the page via props

  return { props: { posts: res } };
}
