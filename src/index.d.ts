/**
 * Materialish typings.
 * TODO: TS does not yet support bundling *.d.ts files, so for now all definitions will live here:
 * https://github.com/Microsoft/TypeScript/issues/4433
 */

import React from 'react';

function refFn<T>(): React.RefObject<T>;

export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  nodeRef?: refFn<HTMLButtonElement>;
  flat?: boolean;
  ripple?: boolean;
  raised?: boolean;
  stroked?: boolean;
  compact?: boolean;
};

export class Button extends React.Component<ButtonProps> { }
