import { useEffect, useState } from "react";

export function useSlideshow(
  slideCount: number,
  intervalMs = 6000,
) {
  // Position of the currently visible slide.
  const [activeIndex, setActiveIndex] =
    useState<number>(0);

  // Controls whether the slideshow advances automatically.
  const [isPlaying, setIsPlaying] =
    useState<boolean>(true);

  function goTo(index: number) {
    if (slideCount === 0) {
      return;
    }

    setActiveIndex(index);
  }

  function showNext() {
    setActiveIndex((currentIndex) => {
      if (slideCount === 0) {
        return 0;
      }

      return (currentIndex + 1) % slideCount;
    });
  }

  function showPrevious() {
    setActiveIndex((currentIndex) => {
      if (slideCount === 0) {
        return 0;
      }

      return (
        (currentIndex - 1 + slideCount) %
        slideCount
      );
    });
  }

  function togglePlayback() {
    setIsPlaying((currentValue) => !currentValue);
  }

  useEffect(() => {
    // Do not start a timer when paused or when fewer
    // than two slides exist.
    if (!isPlaying || slideCount <= 1) {
      return;
    }

    const timerId = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        return (currentIndex + 1) % slideCount;
      });
    }, intervalMs);

    // Remove the timer when the component unmounts
    // or when one of the dependencies changes.
    return () => {
      window.clearInterval(timerId);
    };
  }, [intervalMs, isPlaying, slideCount]);

  return {
    activeIndex,
    isPlaying,
    goTo,
    showNext,
    showPrevious,
    togglePlayback,
  };
}