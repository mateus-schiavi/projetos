import React from 'react';
import Menu from '@src/Screens/Menu/Menu';
import BackGround from '@src/Screens/HomeScreen/patterns/Background/Background';
import theme from '@src/theme/theme';
import Box from '@src/components/Box';


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
