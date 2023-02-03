"use client";
import { Post } from "../typings";
import FeaturedCard from "./FeaturedCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

type Props = {
  posts: Post[];
};

function FeaturedPosts({ posts }: Props) {
  return (
    <section className="w-full mb:4 md:mb-6 lg:mb-10">
      <Carousel ssr responsive={responsive} arrows>
        {posts.map((post) => (
          <FeaturedCard key={post.slug} post={post} />
        ))}
      </Carousel>
    </section>
  );
}

export default FeaturedPosts;
