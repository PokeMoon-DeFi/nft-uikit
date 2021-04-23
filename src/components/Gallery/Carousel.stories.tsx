import Gallery from "./Gallery";
import { Story, Meta } from "@storybook/react";
import { Page, Content } from "../../components/layout";
import { BLAST_OFF_COLLECTION } from "../../utils/StoryData";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PackViewer from "./PackViewer";

export default {
  title: "Carousel",
  component: Gallery,
} as Meta;

export const Basic: Story = () => (
  <Page>
    <Content>
      <Gallery nfts={BLAST_OFF_COLLECTION} handleSubMenuCommand={() => null} />
    </Content>
  </Page>
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
