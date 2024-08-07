import React from "react";
import { BaseComponent } from "src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";

interface BoxProps {
  tag?: "main" | "div" | "article" | "section" | "ul" | string;
  stylesheet?: StyleSheet & { [key: string]: any };
  children?: React.ReactNode;
}

export default function Box({ stylesheet, children, tag, ...props }: BoxProps) {
  const Tag = tag || "div";
  return (
    <BaseComponent as={Tag} styleSheet={stylesheet} {...props}>
      {children}
    </BaseComponent>
  );
}
