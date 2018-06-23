export default function dimensionsOverlap({
  leftOne,
  rightOne,
  leftTwo,
  rightTwo,
}) {
  const overlap = rightOne > leftTwo && rightTwo > leftOne;

  return overlap;
}
