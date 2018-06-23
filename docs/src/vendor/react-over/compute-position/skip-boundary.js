export default function skipBoundary({
  val,
  boundaryStart,
  boundaryEnd,
  goHigher = true,
}) {
  const isBetween = val > boundaryStart && val < boundaryEnd;

  if (isBetween) {
    return goHigher ? boundaryEnd : boundaryStart;
  } else {
    return val;
  }
}
