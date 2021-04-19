import { Flex } from "components";
import WiggleBall from "./WiggleBall";

const Loading: React.FC = ({ ...props }) => {
  return (
    <div
      style={{
        height: "100%",
        padding: 0,
        margin: 0,
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <WiggleBall src={"/images/MAXRBALL.png"} />
    </div>
  );
};
export default Loading;
