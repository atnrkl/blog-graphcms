import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Author } from "../typings";

type Props = {
  title: string;
  author?: Author;
  slug: string;
};

const WidgetCard = (props: Props) => {
  return (
    <Link className="w-full" href={`/post/${props.slug}`}>
      <div className="flex flex-row h-16 my-2 rounded-md p-3 items-center justify-start space-x-5 bg-red-100 w-full">
        {props.author && (
          <Image
            src={props.author?.photo?.url!}
            alt={props.title + " image"}
            width={30}
            height={30}
            className="rounded-full"
          />
        )}
        <h1 className="text-md">{props.title}</h1>
      </div>
    </Link>
  );
};

export default WidgetCard;
