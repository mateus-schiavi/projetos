import React from "react"
import Box from "../src/components/Box"
import theme from "../src/theme/theme"
theme

export default function HomeScreen() {
  return (
    <Box
    tag="main"
    styleSheet={{
      fontFamily: theme.typography.fontFamily
    }}
    >
    Oi
    </Box>
  )
}
