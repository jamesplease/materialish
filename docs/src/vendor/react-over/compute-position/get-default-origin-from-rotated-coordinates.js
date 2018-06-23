export default function getDefaultOriginFromRotatedCoordinates({ x, y }) {
  if (x > 0 && y > 0) {
    return 'bottom';
  } else if (x < 0 && y > 0) {
    return 'right';
  } else if (x < 0 && y < 0) {
    return 'top';
  } else if (x > 0 && y < 0) {
    return 'left';
  } else if (x > 0 && y === 0) {
    return 'top-left';
  } else if (x < 0 && y === 0) {
    return 'top-left';
  } else if (x === 0 && y > 0) {
    return 'top-right';
  } else if (x === 0 && y < 0) {
    return 'top-right';
  } else if (x === 0 && y === 0) {
    return 'center';
  }

  // I don't think this will ever happen, but just in case.
  return 'top-left';
}
