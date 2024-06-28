import React from 'react';
import styled from 'styled-components';
import { StyleSheet } from '@src/theme/StyleSheet';
import { parseStyleSheet } from '@skynexui/responsive_stylesheet';

interface StyledBaseComponentProps {
  $styleSheet?: StyleSheet;
  [key: string]: any; // Allow other props
}

const StyledBaseComponent = styled.div<StyledBaseComponentProps>`
  ${({ $styleSheet }) => parseStyleSheet($styleSheet)}
`;

export const BaseComponent = ({ styleSheet = {}, ...props }) => {
  return <StyledBaseComponent {...props} $styleSheet={styleSheet} />;
};



