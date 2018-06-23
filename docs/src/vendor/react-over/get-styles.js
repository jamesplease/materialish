import { exists } from './identification';

export default function getStyles({
  top,
  left,
  pointerTop,
  pointerLeft,
  pointerRotation,
  pointerOpacity,
}) {
  const style = {};

  if (exists(top)) {
    style.top = `${top}px`;
  }

  if (exists(left)) {
    style.left = `${left}px`;
  }

  if (exists(pointerTop)) {
    style['--pointer-top'] = `${pointerTop}px`;
  }

  if (exists(pointerLeft)) {
    style['--pointer-left'] = `${pointerLeft}px`;
  }

  if (exists(pointerRotation)) {
    style['--pointer-rotation'] = `${pointerRotation}deg`;
  }

  if (exists(pointerOpacity)) {
    style['--pointer-opacity'] = pointerOpacity;
  }

  return style;
}
