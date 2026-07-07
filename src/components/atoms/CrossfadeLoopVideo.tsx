"use client";
import { videoLoopFadeSeconds } from "@/constants";
import { classNames } from "@/utils";
import { useRef, useState, useEffect, SyntheticEvent } from "react";

export function CrossfadeLoopVideo({
  ariaLabel,
  src,
}: {
  ariaLabel: string;
  src: string;
}) {
  const firstVideoRef = useRef<HTMLVideoElement>(null);
  const secondVideoRef = useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const isTransitioningRef = useRef(false);

  useEffect(() => {
    setActiveVideo(0);
    setIsReady(false);
    setShowLoader(false);

    const markReadyIfLoaded = () => {
      const firstVideo = firstVideoRef.current;

      if (
        firstVideo &&
        firstVideo.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA
      ) {
        setIsReady(true);
        setShowLoader(false);
      }
    };

    markReadyIfLoaded();

    const loaderTimer = window.setTimeout(() => {
      markReadyIfLoaded();
      setShowLoader(() => {
        const firstVideo = firstVideoRef.current;
        return (firstVideo?.readyState ?? 0) >=
          HTMLMediaElement.HAVE_CURRENT_DATA
          ? false
          : true;
      });
    }, 450);

    const preloadTimer = window.setTimeout(() => {
      secondVideoRef.current?.load();
    }, 1200);

    return () => {
      window.clearTimeout(loaderTimer);
      window.clearTimeout(preloadTimer);
    };
  }, [src]);

  const startNextLoop = (currentIndex: number) => {
    if (isTransitioningRef.current) {
      return;
    }

    const currentVideo =
      currentIndex === 0 ? firstVideoRef.current : secondVideoRef.current;
    const nextVideo =
      currentIndex === 0 ? secondVideoRef.current : firstVideoRef.current;

    if (!currentVideo || !nextVideo) {
      return;
    }

    isTransitioningRef.current = true;
    nextVideo.currentTime = 0;
    void nextVideo.play().catch(() => {
      isTransitioningRef.current = false;
    });
    setActiveVideo(currentIndex === 0 ? 1 : 0);

    window.setTimeout(
      () => {
        currentVideo.pause();
        currentVideo.currentTime = 0;
        isTransitioningRef.current = false;
      },
      (videoLoopFadeSeconds + 0.08) * 1000,
    );
  };

  const handleTimeUpdate = (
    event: SyntheticEvent<HTMLVideoElement>,
    index: number,
  ) => {
    if (index !== activeVideo) {
      return;
    }

    const video = event.currentTarget;

    if (
      Number.isFinite(video.duration) &&
      video.duration > videoLoopFadeSeconds &&
      video.duration - video.currentTime <= videoLoopFadeSeconds
    ) {
      startNextLoop(index);
    }
  };

  const handleVideoReady = (index: number, video?: HTMLVideoElement) => {
    if (isReady) {
      return;
    }

    const isFirstVideoReady =
      index === 0 ||
      (firstVideoRef.current?.readyState ?? 0) >=
        HTMLMediaElement.HAVE_CURRENT_DATA ||
      video === firstVideoRef.current;

    if (isFirstVideoReady) {
      setIsReady(true);
      setShowLoader(false);
      void firstVideoRef.current?.play().catch(() => {
        setShowLoader(true);
      });
      secondVideoRef.current?.load();
    }
  };

  return (
    <div
      aria-busy={!isReady}
      aria-label={ariaLabel}
      className={classNames("hp-loop-video", isReady && "hp-loop-video-ready")}
      role="img"
    >
      {[firstVideoRef, secondVideoRef].map((videoRef, index) => (
        <video
          aria-hidden="true"
          autoPlay={index === 0}
          className={classNames(
            "hp-loop-video-media",
            activeVideo === index && "hp-loop-video-active",
          )}
          key={index}
          muted
          onEnded={() => startNextLoop(index)}
          onLoadedData={(event) => handleVideoReady(index, event.currentTarget)}
          onCanPlay={(event) => handleVideoReady(index, event.currentTarget)}
          onPlaying={(event) => handleVideoReady(index, event.currentTarget)}
          onStalled={() => setShowLoader(true)}
          onWaiting={() => setShowLoader(true)}
          onTimeUpdate={(event) => handleTimeUpdate(event, index)}
          playsInline
          preload={index === 0 ? "auto" : "metadata"}
          ref={videoRef}
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}
      {!isReady && showLoader ? (
        <div className="hp-loop-video-loader" aria-live="polite">
          <span className="hp-loop-video-spinner" />
          <span>Loading video</span>
        </div>
      ) : null}
    </div>
  );
}
