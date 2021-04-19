import { Flex } from "components";
import { Content, Page } from "components/layout";
import WiggleBall from "./WiggleBall";

const Loading: React.FC = ({ ...props }) => {
  return (
    <Page>
      <Content>
        <WiggleBall src={"/images/MAXRBALL.png"} />
      </Content>
    </Page>
  );
};
export default Loading;
