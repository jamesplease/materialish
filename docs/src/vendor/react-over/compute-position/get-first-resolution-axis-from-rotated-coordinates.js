export default function getFirstResolutionAxisFromRotatedCoordinates({ x, y }) {
  if (x > 0 && y > 0) {
    return 'y';
  } else if (x < 0 && y > 0) {
    return 'x';
  } else if (x < 0 && y < 0) {
    return 'y';
  } else if (x > 0 && y < 0) {
    return 'x';
  } else if (x > 0 && y === 0) {
    return 'y';
  } else if (x < 0 && y === 0) {
    return 'y';
  } else if (x === 0 && y > 0) {
    return 'y';
  } else if (x === 0 && y < 0) {
    return 'y';
  } else if (x === 0 && y === 0) {
    return 'y';
  }

  // I don't think this will ever happen, but just in case.
  return 'x';
}
