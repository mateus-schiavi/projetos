import React from "react"
import Box from "../src/components/Box"
import theme from "../src/theme/theme"


export default function HomeScreen() {
  return (
    <Box
    tag="main"
    stylesheet={{
      fontFamily: theme.typography.fontFamily,
      backgroundColor: {
        xs: 'green',
        sm: 'yellow',
        md: 'blue'
      }
    }}
    >
    Meu nome é Mateus, tenho 25 anos
    </Box>
  )
}
