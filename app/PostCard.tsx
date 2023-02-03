import Image from "next/image";
import { Post } from "../typings";
import moment from "moment";
import { CiCalendarDate } from "react-icons/ci";
import Link from "next/link";

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  return (
    <div className="w-full p-8 mb-8 bg-orange-100 rounded-md space-y-5">
      <Image
        className="w-full rounded-xl"
        src={post.featuredImage.url}
        alt={post.title + " image"}
        width={1000}
        height={600}
      />

      <h1 className="text-2xl font-semibold ">{post.title}</h1>

      <div className="flex w-full justify-center space-x-2 items-center">
        {post.author && (
          <>
            <Image
              className="rounded-full"
              src={post.author.photo?.url!}
              alt={post.title + " image"}
              width={30}
              height={30}
            />
            <p className="font-normal text-lg">{post.author.name}</p>
            <span className="flex items-center justify-center space-x-2 float-right pl-10 text-sm">
              <CiCalendarDate size={30} />
              <p className=" text-gray-600">
                {moment(post.createdAt).fromNow()}
              </p>
            </span>
          </>
        )}
      </div>
      <p className="mt-2 text-ellipsis overflow-hidden">{post.excerpt}</p>
      <div className="w-full flex items-center justify-center">
        <Link href={`/post/${post.slug}`}>
          <button className="bg-blue-400 my-3 text-white p-3 rounded-2xl hover:-translate-y-1 transition-all duration-200">
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
