import React from 'react';
import Box from '../src/components/Box';
import theme from '../src/theme/theme';
import BackGround from 'src/Screens/HomeScreen/patterns/Background/Background';
import Menu from 'src/Screens/Menu/Menu';

export default function HomeScreen() {
  return (
    <Box
      tag="main"
      stylesheet={{
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <BackGround/>
      <Menu/>
    </Box>
  );
}
