export default function getGoHigherFromRotatedCoordinates({ x, y }) {
  if (x > 0 && y > 0) {
    return true;
  } else if (x < 0 && y > 0) {
    return true;
  } else if (x < 0 && y < 0) {
    return false;
  } else if (x > 0 && y < 0) {
    return false;
  }

  // We do not specify specific values for 5 out of 9 conditions: the 4 axes and the center.
  // This is because we do not think that it matters whether they are true or false.
  // Accordingly, we just return true to keep things simple. If you run into an edge case,
  // let us know and we can revisit this decision.
  return true;
}
