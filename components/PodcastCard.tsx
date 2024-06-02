import Image from "next/image";
import React from "react";

export default function PodcastCard({
  podcastId,
  title,
  description,
  imgUrl,
}: {
  podcastId: number;
  title: string;
  description: string;
  imgUrl: string;
}) {
  return (
    <div className="cursor-pointer">
      <figure className="flex flex-col gap-2">
        <Image
          src={imgUrl}
          alt={title}
          width={174}
          height={174}
          className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px ]"
        />
        <div className="flex flex-col">
          <h1 className="text-16 truncate font-bold text-white-1">{title}</h1>
          <h2 className="text-12 truncate font-normal capitalize text-white-4">
            {description}
          </h2>
        </div>
      </figure>
    </div>
  );
}
