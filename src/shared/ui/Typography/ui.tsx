import { Typography as AntdTypography, TypographyProps } from "antd";
import cn from "classnames";
import { ComponentProps, FC } from "react";

import { TColorType, TFontVariant } from "../../types/styles";

type AntdTextProps = ComponentProps<Pick<TypographyProps, "Text">["Text"]>;
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
    <AntdTypography.Text
      className={cn(className, "typography", `typography_variant--${variant}`, `typography_color--${color}`)}
      {...props}
    >
      {children}
    </AntdTypography.Text>
  );
};
