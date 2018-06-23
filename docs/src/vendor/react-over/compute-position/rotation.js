const rotationSin = Math.sin(Math.PI / 4);
const rotationCos = Math.cos(Math.PI / 4);

// This applies two rotations:
//
// First, a circular rotation by 45 degrees
// Then, a hyperbolic rotation
// Lastly, a reflection about the x axis
//
// This is to simplify the calculation of the default origin
export default function rotateCoordinateSystem({ position, boundingBox }) {
  const absoluteX = position.left;
  const absoluteY = position.top;

  const xOffset = boundingBox.width / 2;
  const yOffset = boundingBox.height / 2;

  // Relative coordinates treat the `boundingBox` origin as "center".
  // This centers our coordinate system on the center of the bounding box.
  const relativeX = absoluteX - xOffset;
  const relativeY = absoluteY - yOffset;

  // Rotate the system by 45 degrees...
  const xPrime = relativeX * rotationCos - relativeY * rotationSin;
  const yPrime = relativeX * rotationSin + relativeY * rotationCos;

  // Now we apply our squeeze map. There may be a more succinct way to do this
  // using a hyperbolic rotation matrix, but I am not clever enough to come up
  // with that, so I made up this solution.
  const area = boundingBox.height * boundingBox.width;
  const squeezeFactor = Math.sqrt(area);
  const squeezeFactorX = boundingBox.width / squeezeFactor;
  const squeezeFactorY = boundingBox.height / squeezeFactor;

  const squeezedXPrime = xPrime / squeezeFactorX;
  const squeezedYPrime = yPrime / squeezeFactorY;

  return {
    // We fix the numbers to get rid of precision errors
    x: Number(squeezedXPrime.toFixed(2)),
    y: -Number(squeezedYPrime.toFixed(2)),
  };
}
