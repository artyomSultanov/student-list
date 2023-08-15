import "./styles.scss";

import cn from "classnames";
import { ComponentProps, FC } from "react";

import { TColorType, TFontVariant } from "../../types/styles";

type AntdTextProps = ComponentProps<"span">;
interface ITypographyProps extends AntdTextProps {
  variant?: TFontVariant;
  color?: TColorType;
}

export const Typography: FC<ITypographyProps> = ({
  color = "black",
  variant = "m16",
  children,
  className,
  ...props
}) => {
  return (
    <span
      className={cn(className, "typography", `typography_variant--${variant}`, `typography_color--${color}`)}
      {...props}
    >
      {children}
    </span>
  );
};
