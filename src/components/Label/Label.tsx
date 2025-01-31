import { ReactNode } from "react";

type LabelProps = {
  title?: string,
  className?: string,
  children?: ReactNode
}

const Label = ({ title, className, children }: LabelProps) => {
  return (
    <label className={`label ${className}`}>
      {title}
      {children}
    </label>
  );
}

export default Label;