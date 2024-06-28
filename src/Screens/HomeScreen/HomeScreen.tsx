import Box from "@src/Box/Box";
import BackGround from "./patterns/Background/Background";
import Menu from "../Menu/Menu";
import Text from "@src/components/Text/Text";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";

export default function HomeScreen() {
  return (
    <Box tag="main"
    stylesheet={{
      backgroundColor: '#808080',
      flex: 1,
      alignItems: 'center',
    }}
    >
      <BackGround />
      <Menu />
      <Feed>
        <Feed.Header/>
        <Text>
          Últimas Atualizações
        </Text>
        <Feed.Posts/>
      </Feed>
      <Footer/>
    </Box>
  );
}
