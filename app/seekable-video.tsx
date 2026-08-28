"use client";

import { useEffect, useRef } from "react";

const videoSource = "/sinq-overview.mp4?v=1";

export default function SeekableVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const controller = new AbortController();
    let objectUrl: string | null = null;
    let cancelled = false;

    async function loadSeekableCopy() {
      const response = await fetch(videoSource, {
        cache: "force-cache",
        signal: controller.signal,
      });
      if (!response.ok) return;

      const blob = await response.blob();
      const video = videoRef.current;
      if (cancelled || !video) return;

      const currentTime = video.currentTime;
      const wasPlaying = !video.paused;
      objectUrl = URL.createObjectURL(blob);

      video.addEventListener(
        "loadedmetadata",
        () => {
          video.currentTime = Math.min(currentTime, video.duration || currentTime);
          if (wasPlaying) void video.play().catch(() => undefined);
        },
        { once: true },
      );

      video.src = objectUrl;
      video.load();
    }

    void loadSeekableCopy().catch(() => undefined);

    return () => {
      cancelled = true;
      controller.abort();
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      controls
      playsInline
      preload="metadata"
      poster="/video-poster.jpg"
      src={videoSource}
    >
      Your browser does not support embedded video.
    </video>
  );
}
