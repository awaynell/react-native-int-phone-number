import React, { cloneElement, FC } from "react";
import Svg from "react-native-svg";

import { svgs } from "./svgs";

interface Props {
  name: keyof typeof svgs;
  fill?: string;
  width?: string | number;
  height?: string | number;
  stroke?: string;
  strokeWidth?: string | number;
  viewBox?: string;
  fillRule?: string;
}

const getViewBox = (name: keyof typeof svgs, propsViewBox?: string) => {
  if (propsViewBox) {
    return propsViewBox;
  }
  return svgs[name]?.viewBox || "0 0 100 100";
};

export const Icon: FC<Props> = ({
  name,
  fill,
  width = "24",
  height = "24",
  stroke,
  strokeWidth,
  viewBox,
  fillRule = "evenodd",
}) => {
  const svgElement = svgs[name]?.svg;
  if (!svgElement) {
    return null;
  }

  return (
    <Svg width={width} height={height} viewBox={getViewBox(name, viewBox)}>
      {cloneElement(svgElement, {
        fill: fill !== undefined ? fill : svgElement.props.fill,
        stroke: stroke !== undefined ? stroke : svgElement.props.stroke,
        strokeWidth:
          strokeWidth !== undefined
            ? strokeWidth
            : svgElement.props.strokeWidth,
        fillRule: fillRule || svgElement.props.fillRule,
      })}
    </Svg>
  );
};
