import React from "react";

export default function PodcastDetails({
  params,
}: {
  params: { podcastId: string };
}) {
  return <p className="text-white-1">PodcastDetails for {params.podcastId}</p>;
}
