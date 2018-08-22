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
