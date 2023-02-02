import Image from "next/image";
import React from "react";
import { Post } from "../typings";
import moment from "moment";

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  return (
    <div className="w-full p-8 bg-orange-100 rounded-md space-y-5">
      <Image
        className="w-full rounded-xl"
        src={post.featuredImage.url}
        alt={post.title + " image"}
        width={1000}
        height={600}
      />
      <div>
        <h1 className="text-2xl ">{post.title}</h1>
        <p className="mt-2">{post.excerpt}</p>
      </div>
      <div className="flex space-x-2 items-center">
        {post.author && (
          <>
            <Image
              className="rounded-full"
              src={post.author.photo?.url!}
              alt={post.title + " image"}
              width={30}
              height={30}
            />
            <p>{post.author.name}</p>
            <p className="float-right text-sm text-gray-600">
              {moment(post.createdAt).fromNow()}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default PostCard;
