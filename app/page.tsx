import PostWidgets from "./PostWidgets";
import FeaturedPosts from "./FeaturedPosts";

import { getPosts } from "../services";
import PostCard from "./PostCard";

type Props = {};

export default async function Main(props: Props) {
  const posts = await getPosts();

  return (
    <main className="container mx-auto  px-4 md:px-5 lg:px-10 mb-8">
      <FeaturedPosts posts={posts} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts?.map((post) => (
            <PostCard post={post} key={post.slug} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            {/* @ts-expect-error */}
            <PostWidgets />
          </div>
        </div>
      </div>
    </main>
  );
}
