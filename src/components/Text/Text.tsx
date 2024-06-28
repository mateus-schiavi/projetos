import React from "react";
import Box from "../../Box/Box";
import theme from "@src/theme/theme";

interface TextProps {
  tag?: "p" | "li" | "h1" | "h2" | string;
  children?: React.ReactNode;
}

export default function Text({ tag = "p", ...props }: TextProps) {
  return (
    <Box
      stylesheet={{
        fontFamily: theme.typography.fontFamily,
      }}
      {...props}
    />
  );
}
