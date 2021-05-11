import Gallery from "./Gallery";
import { Story, Meta } from "@storybook/react";
import { Page, Content } from "../layout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PackViewer from "./PackViewer";
import PackCollection from "./PackCollection";
import { nftBalance } from "../../utils/nftBalance";
import { BLAST_OFF_COLLECTION } from "../../config/constants/nfts/2114";
import { PokemoonNft } from "../../config/constants/nfts/types";

export default {
  title: "Gallery",
  component: Gallery,
} as Meta;

const nfts: PokemoonNft[] = Object.entries(BLAST_OFF_COLLECTION)
  .map(([key, value]) => {
    const { card } = value;
    return { ...value, ...card };
  })
  ?.sort((a, b) => parseInt(b.tokenId) - parseInt(a.tokenId));

nfts?.forEach((nft) => {
  nft.glbUrl = "/models/" + nft.imageUrl.replace(".png", ".glb");
});

export const Basic: Story = () => <Gallery nfts={nfts} />;

export const NftBalance: Story = () => (
  <Gallery nfts={nftBalance.blastOff.cards} />
);

export const PackId: Story = () => (
  <Page>
    <Content>
      <Router>
        <Link to="/pack/001">Get Pack</Link>
        <Switch>
          <Route path="/pack/:id" children={<PackViewer />} />
        </Switch>
      </Router>
    </Content>
  </Page>
);

export const ViewPackCollection: Story = () => {
  return (
    <Page>
      <PackCollection />
    </Page>
  );
};
