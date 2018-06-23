import rotation from './rotation';
import coordinatesMap from './coordinates-map';
import computePixelCoordinates from './compute-pixel-coordinates';
import getDefaultOriginFromRotatedCoordinates from './get-default-origin-from-rotated-coordinates';
import getFirstResolutionAxisFromRotatedCoordinates from './get-first-resolution-axis-from-rotated-coordinates';
import getGoHigherFromRotatedCoordinates from './get-go-higher-from-rotated-coordinates';
import skipBoundary from './skip-boundary';
import clamp from './clamp';
import dimensionsOverlap from './dimensions-overlap';

export default function computePosition({
  targetBoundingBox,
  overBoundingBox,
  position,
  origin,
  config,
}) {
  const { allowOverlap } = config;

  if (!position) {
    position = 'top';
  } else if (typeof position === 'string') {
    position = position.toLowerCase();
  }

  let positionCoordinates;
  if (Array.isArray(position)) {
    positionCoordinates = position;
  } else if (typeof position === 'string') {
    positionCoordinates = coordinatesMap[position];
  }

  positionCoordinates = positionCoordinates || coordinatesMap['top-left'];

  // The relative anchor point is the anchor point relative to the trigger element
  // (0, 0) in this coordinate system is the top-left of the trigger element
  const relativeAnchorPoint = computePixelCoordinates({
    coordinates: positionCoordinates,
    boundingBox: targetBoundingBox,
  });

  const absoluteAnchorPoint = {
    left: relativeAnchorPoint.left + targetBoundingBox.left,
    top: relativeAnchorPoint.top + targetBoundingBox.top,
  };

  let transformedCoordinates;

  if (!origin) {
    transformedCoordinates = rotation({
      position: relativeAnchorPoint,
      boundingBox: targetBoundingBox,
    });

    origin = getDefaultOriginFromRotatedCoordinates(transformedCoordinates);
  } else if (typeof origin === 'string') {
    origin = origin.toLowerCase();
  }

  let originCoordinates;
  if (Array.isArray(origin)) {
    originCoordinates = origin;
  } else if (typeof origin === 'string') {
    originCoordinates = coordinatesMap[origin];
  }

  originCoordinates = originCoordinates || coordinatesMap['top-left'];

  const originAdjustment = computePixelCoordinates({
    coordinates: originCoordinates,
    boundingBox: overBoundingBox,
  });

  // These coordinates are where it would be if there was no bottom or
  // right boundary to the viewport. But there are, so we may not use these.
  const computedLeft = absoluteAnchorPoint.left - originAdjustment.left;
  const computedTop = absoluteAnchorPoint.top - originAdjustment.top;

  // These are the furthest to the left and top that the element can go
  // without extending beyond the viewport in that direction.
  const maxLeft = window.innerWidth - overBoundingBox.width;
  const maxTop = window.innerHeight - overBoundingBox.height;

  const clampedLeft = clamp(0, computedLeft, maxLeft);
  const clampedTop = clamp(0, computedTop, maxTop);

  let top, left;
  if (allowOverlap) {
    top = clampedTop;
    left = clampedLeft;
  } else {
    transformedCoordinates =
      transformedCoordinates ||
      rotation({
        position: relativeAnchorPoint,
        boundingBox: targetBoundingBox,
      });

    const axisToResolveFirst = getFirstResolutionAxisFromRotatedCoordinates(
      transformedCoordinates
    );

    const yAxisFirst = axisToResolveFirst === 'y';

    const firstLeftOne = yAxisFirst
      ? targetBoundingBox.left
      : targetBoundingBox.top;
    const firstRightOne = yAxisFirst
      ? targetBoundingBox.right
      : targetBoundingBox.bottom;
    const firstLeftTwo = yAxisFirst ? clampedLeft : clampedTop;
    const firstRightTwo = yAxisFirst
      ? clampedLeft + overBoundingBox.width
      : clampedTop + overBoundingBox.height;

    const overlapFirstDim = dimensionsOverlap({
      leftOne: firstLeftOne,
      rightOne: firstRightOne,
      leftTwo: firstLeftTwo,
      rightTwo: firstRightTwo,
    });

    if (overlapFirstDim) {
      let firstDimStartBoundary;
      let firstDimEndBoundary;

      if (yAxisFirst) {
        firstDimStartBoundary = targetBoundingBox.top - overBoundingBox.height;
        firstDimEndBoundary = targetBoundingBox.top + targetBoundingBox.height;
      } else {
        firstDimStartBoundary = targetBoundingBox.left - overBoundingBox.width;
        firstDimEndBoundary = targetBoundingBox.left + targetBoundingBox.width;
      }

      transformedCoordinates =
        transformedCoordinates ||
        rotation({
          position: relativeAnchorPoint,
          boundingBox: targetBoundingBox,
        });

      const firstDimSkippedValue = skipBoundary({
        val: yAxisFirst ? clampedTop : clampedLeft,
        boundaryStart: firstDimStartBoundary,
        boundaryEnd: firstDimEndBoundary,
        goHigher: getGoHigherFromRotatedCoordinates(transformedCoordinates),
      });

      if (yAxisFirst) {
        top = firstDimSkippedValue;
      } else {
        left = firstDimSkippedValue;
      }
    } else {
      if (yAxisFirst) {
        top = clampedTop;
      } else {
        left = clampedLeft;
      }
    }

    const secondLeftOne = yAxisFirst
      ? targetBoundingBox.top
      : targetBoundingBox.left;
    const secondRightOne = yAxisFirst
      ? targetBoundingBox.bottom
      : targetBoundingBox.right;

    const secondLeftTwo = yAxisFirst ? top : left;
    const secondRightTwo = yAxisFirst
      ? top + overBoundingBox.height
      : left + overBoundingBox.width;

    const overlapSecondDim = dimensionsOverlap({
      leftOne: secondLeftOne,
      rightOne: secondRightOne,
      leftTwo: secondLeftTwo,
      rightTwo: secondRightTwo,
    });

    if (overlapSecondDim) {
      let secondDimStartBoundary;
      let secondDimEndBoundary;

      if (yAxisFirst) {
        secondDimStartBoundary = targetBoundingBox.left - overBoundingBox.width;
        secondDimEndBoundary = targetBoundingBox.left + targetBoundingBox.width;
      } else {
        secondDimStartBoundary = targetBoundingBox.top - overBoundingBox.height;
        secondDimEndBoundary = targetBoundingBox.top + targetBoundingBox.height;
      }

      const secondDimSkippedValue = skipBoundary({
        val: yAxisFirst ? clampedLeft : clampedTop,
        boundaryStart: secondDimStartBoundary,
        boundaryEnd: secondDimEndBoundary,
        goHigher: getGoHigherFromRotatedCoordinates(transformedCoordinates),
      });

      if (yAxisFirst) {
        left = secondDimSkippedValue;
      } else {
        top = secondDimSkippedValue;
      }
    } else {
      if (yAxisFirst) {
        left = clampedLeft;
      } else {
        top = clampedTop;
      }
    }
  }

  if (position === 'bottom') {
    let topPos = targetBoundingBox.top + targetBoundingBox.height;
    let topEndPos = topPos + overBoundingBox.height;
    let pointerTop = 0;
    let pointerLeft = overBoundingBox.width / 2;
    let pointerRotation = 180;

    if (topEndPos > window.scrollY + window.innerHeight) {
      topPos = targetBoundingBox.top - overBoundingBox.height;
      pointerTop = overBoundingBox.height;
      pointerRotation = 0;
    }

    return {
      top,
      left,
      pointerTop,
      pointerLeft,
      pointerRotation,
    };
  }

  if (position === 'right') {
    let leftPos = targetBoundingBox.left + targetBoundingBox.width;
    let leftEndPos = leftPos + overBoundingBox.width;
    let pointerTop = overBoundingBox.height / 2;
    let pointerLeft = 0;
    let pointerRotation = 90;

    if (leftEndPos > window.innerWidth) {
      leftPos = targetBoundingBox.left - overBoundingBox.width;
      pointerLeft = overBoundingBox.width;
      pointerRotation = -90;
    }

    return {
      top,
      left,
      pointerLeft,
      pointerTop,
      pointerRotation,
    };
  }

  if (position === 'left') {
    let leftPos = targetBoundingBox.left - overBoundingBox.width;
    let pointerTop = overBoundingBox.height / 2;
    let pointerLeft = overBoundingBox.width;
    let pointerRotation = -90;

    if (leftPos < 0) {
      leftPos = targetBoundingBox.left + targetBoundingBox.width;
      pointerLeft = 0;
      pointerRotation = 90;
    }

    return {
      top,
      left,
      pointerTop,
      pointerLeft,
      pointerRotation,
    };
  }

  if (position === 'center') {
    return {
      top,
      left,
      pointerOpacity: 0,
    };
  }

  let topPos = targetBoundingBox.top - overBoundingBox.height;
  let pointerTop = overBoundingBox.height;
  let pointerLeft = overBoundingBox.width / 2;
  let pointerRotation = 0;

  if (topPos < window.scrollY) {
    topPos = targetBoundingBox.top + targetBoundingBox.height;
    pointerTop = 0;
    pointerRotation = 180;
  }

  return {
    top,
    left,
    pointerTop,
    pointerLeft,
    pointerRotation,
    relativeAnchorPoint,
    absoluteAnchorPoint,
  };
}
