import React, { useEffect } from "react";
import { Story, Meta } from "@storybook/react";
import Button from "../Button";
import Modal from "./DialogModal";
import { PM_RARITY, PokemoonNft } from "../../constants/nfts";
import { Page, Content } from "../layout";
import SendToAddress from "./SendToAddress";
import { BLAST_OFF_CARDS } from "../../utils/StoryData";
import useModal from "../../hooks/useModal";
import { InspectorDialog } from "./InspectorModal";

export default {
  title: "Modal",
} as Meta;

const title = "Purchase Pokemoon Booster Pack?";
const content = "Lorem ipsum bullshit";

export const Demo: Story = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        title={title}
        content={content}
        open={open}
        handleClose={() => setOpen(false)}
      />
    </>
  );
};

const n: PokemoonNft = {
  tokenId: "60",
  imageUrl: "001meownautL.png",
  card: BLAST_OFF_CARDS[1],
  rarity: PM_RARITY.L,
  glbUrl: "/models/002pikapuffC.glb",
};

export const Inspect: Story = () => {
  const [onPresent] = useModal(<InspectorDialog nft={n} />);
  // useEffect(() => onPresent, []);
  return (
    <Page>
      <Content>
        <Button onClick={onPresent}>Open Modal</Button>
      </Content>
    </Page>
  );
};

export const TransferToAddress: Story = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <Page>
      <Content>
        <Button onClick={() => setOpen(true)}>Transfer Pack</Button>
        <SendToAddress
          handleClose={() => setOpen(false)}
          handleConfirm={(address) => {
            setOpen(false);
          }}
          open={open}
          onClose={() => setOpen(false)}
        />
      </Content>
    </Page>
  );
};
