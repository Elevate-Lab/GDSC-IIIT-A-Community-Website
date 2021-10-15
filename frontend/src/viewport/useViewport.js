import React from "react";
import { ViewportContext } from "./index";

const useViewport = () => {
  const { width, height } = React.useContext(ViewportContext);
  const isMobile = 500 > width;
  const isTablet = 1030 > width;

  return { width, height, isMobile, isTablet };
};

export default useViewport;
