import Box from "@src/Box/Box";
import BackGround from "./patterns/Background/Background";
import Menu from "../Menu/Menu";
import Text from "@src/components/Text/Text";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import theme from "@src/theme/theme";

export default function HomeScreen() {
  return (
    <Box
      tag="main"
      stylesheet={{
        backgroundColor: '#808080',
        flex: 1,
        alignItems: 'center',
        fontFamily: theme.typography.fontFamily, // Applying globally
      }}
    >
      <BackGround />
      <Menu />
      <Feed>
        <Feed.Header />
        <Text $variant="display1">
          Últimas Atualizações
        </Text>
        <Feed.Posts />
      </Feed>
      <Footer />
    </Box>
  );
}
