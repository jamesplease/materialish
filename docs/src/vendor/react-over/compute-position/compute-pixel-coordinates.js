export default function computePixelCoordinates({ coordinates, boundingBox }) {
  let left, top;

  const x = coordinates[0];
  const y = coordinates[1];

  if (typeof x === 'string') {
    let numericLeft;
    if (x.includes('px')) {
      numericLeft = Number(x.replace('px', ''));
    } else if (x.includes('%')) {
      numericLeft = (Number(x.replace('%', '')) * boundingBox.width) / 100;
    } else {
      numericLeft = Number(x);
    }

    left = Number.isNaN(numericLeft) ? 0 : numericLeft;
  } else if (typeof x === 'number') {
    left = Number.isNaN(x) ? 0 : x * boundingBox.width;
  }

  if (typeof y === 'string') {
    let numericTop;

    if (y.includes('px')) {
      numericTop = Number(y.replace('px', ''));
    } else if (y.includes('%')) {
      numericTop = (Number(y.replace('%', '')) * boundingBox.height) / 100;
    } else {
      numericTop = Number(y);
    }

    top = Number.isNaN(numericTop) ? 0 : numericTop;
  } else if (typeof y === 'number') {
    top = Number.isNaN(y) ? 0 : y * boundingBox.height;
  }

  return {
    left,
    top,
  };
}
