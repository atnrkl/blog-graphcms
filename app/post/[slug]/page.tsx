import { getDetailedPost, getPosts, getSlugs } from "../../../services";
import { DetailedPost } from "../../../typings";
import FeaturedPosts from "../../FeaturedPosts";
import PostCard from "../../PostCard";
import PostWidgets from "../../PostWidgets";
import Article from "./Article";

type Props = {
  params: {
    slug: string;
  };
};
async function page({ params }: Props) {
  const posts = await getPosts();
  const { slug } = params;

  const detailedPost = await getDetailedPost(slug);

  return (
    <article className="container mx-auto px-4 md:px-5 lg:px-10 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <Article detailedPost={detailedPost[0].node as DetailedPost} />
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            {/* @ts-expect-error */}
            <PostWidgets />
          </div>
        </div>
      </div>
      <div className="my-10 pb-5">
        <FeaturedPosts posts={posts} />
      </div>
    </article>
  );
}

export default page;

export async function generateStaticParams() {
  const slugs = await getSlugs();

  return slugs?.map((slug) => ({
    slug: slug.slug,
  }));
}
