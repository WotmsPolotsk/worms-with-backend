import { BREAKPOINT, DESKTOP, MOBILE, TABLET } from "@worms/utils/constants";
import { useCallback, useLayoutEffect, useState } from "react";

const LARGE_DESKTOP = "LARGE_DESKTOP";

export const getWidth = (): number =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

export const getHeight = (): number =>
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

const getScreenType = (width: number) => {
  if (width < BREAKPOINT.md) {
    return MOBILE;
  }

  if (width >= BREAKPOINT.md && width < BREAKPOINT.lg) {
    return TABLET;
  }

  if (width >= BREAKPOINT.lg && width < BREAKPOINT.xlg) {
    return DESKTOP;
  }

  return LARGE_DESKTOP;
};

const getWindowResolution = (screenType: string) => ({
  isMobileView: screenType === MOBILE,
  isTabletView: screenType === TABLET,
  isDesktopView: screenType === DESKTOP,
  isLargeDesktopView: screenType === LARGE_DESKTOP,
  isInfiniteDesktopView: screenType === DESKTOP || screenType === LARGE_DESKTOP,
});

export interface UseWindowSizeResult {
  width: number | undefined;
  height: number | undefined;
  isMobileView: boolean;
  isTabletView: boolean;
  isDesktopView: boolean;
  isLargeDesktopView: boolean;
  isInfiniteDesktopView: boolean;
}

/**
 * useWindowSize - common hook
 *
 * @returns Object with props:
 * { width, height, isMobileView, isTabletView, isDesktopView, isLargeDesktopView, isInfiniteDesktopView }
 *
 * general returnProp of this hook (which returned value of width/height)
 * @returnProp width number of width screen;
 * @returnProp height  number of heigh screen;
 *
 * main props of this hook (which returned boolean value)
 * @returnProp isMobileView (boolean) | width < 768
 * @returnProp isTabletView (boolean) | width >= 768 && width < 1025
 * @returnProp isDesktopView (boolean) | width >= 1025 && width < 1440
 * @returnProp isLargeDesktopView (boolean) | width >= 1440
 *
 * Extra props
 * @returnProp isInfiniteDesktopView (boolean) | width >= 1025
 */

export const useWindowSize = (): UseWindowSizeResult => {
  const [width, setWidth] = useState<number>(getWidth());
  const [height, setHeight] = useState<number>(getHeight());

  const screenType = getScreenType(width);

  const onResizeHandler = useCallback(() => {
    setWidth(getWidth());
    setHeight(getHeight());
  }, []);

  useLayoutEffect(() => {
    window.addEventListener("resize", onResizeHandler);

    return () => window.removeEventListener("resize", onResizeHandler);
  }, [onResizeHandler]);

  const windowResolution = getWindowResolution(screenType);

  return {
    width,
    height,
    ...windowResolution,
  };
};
