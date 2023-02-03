import Image from "next/image";
import React from "react";
import { DetailedPost } from "../../../typings";

type Props = {
  detailedPost: DetailedPost;
};

const Article = ({ detailedPost }: Props) => {
  return (
    <article className="container overflow-hidden text-ellipsis bg-orange-50 p-10 space-y-4 rounded-md flex flex-col items-center justify-center">
      <Image
        alt={detailedPost.title + " image"}
        src={detailedPost.featuredImage.url}
        width={800}
        height={500}
      />
      <h1 className="text-2xl font-semibold">{detailedPost.title}</h1>

      <div
        dangerouslySetInnerHTML={{
          __html: detailedPost.content.html,
        }}
      />
    </article>
  );
};

export default Article;
