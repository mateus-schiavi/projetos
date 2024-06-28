import Box from "@src/Box/Box";
import BackGround from "./patterns/Background/Background";
import Menu from "../Menu/Menu";
import Text from "@src/components/Text/Text";
import Feed from "./patterns/Feed/Feed";

export default function HomeScreen() {
  return (
    <Box tag="main">
      <BackGround />
      <Menu />
      <Feed>
        <Feed.Header/>
        <Text>
          Últimas Atualizações
        </Text>
        <Feed.Posts/>
      </Feed>
    </Box>
  );
}
