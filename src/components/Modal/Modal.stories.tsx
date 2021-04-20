import React from "react";
import { Story, Meta } from "@storybook/react";
import Button from "../Button";
import Modal from "./DialogModal";
import InspectCard from "./InspectCard";
import { PM_RARITY, PM_TYPES, PokemoonNft } from "../../constants/nfts";
import { Page, Content } from "../layout";
import SendToAddress from "./SendToAddress";

export default {
  title: "Modal",
} as Meta;

const title = "Purchase Pokemoon Booster Pack?";
const content = "Lorem ipsum bullshit";

export const Demo: Story = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button label="Open Modal" onClick={() => setOpen(true)} />
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
  tokenId: "11000000",
  imageUrl: "001meownautC.png",
  card: {
    number: 1,
    name: "Meownaut",
    type: PM_TYPES.PSYCHIC,
    description:
      "Legend says that the bioluminescent coin in a Meownaut's chest is the source of its resilience and good fortune.",
    artist: {
      name: "Armilo Barrios",
    },
  },
  rarity: PM_RARITY.C,
};

export const Inspect: Story = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <Page>
      <Content>
        <Button label="Open Modal" onClick={() => setOpen(true)} />
        <InspectCard nft={n} open={open} handleClose={() => setOpen(false)} />
      </Content>
    </Page>
  );
};

export const TransferToAddress: Story = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <Page>
      <Content>
        <Button label="Transfer Pack" onClick={() => setOpen(true)} />
        <SendToAddress
          handleClose={() => setOpen(false)}
          handleConfirm={(address) => {
            setOpen(false);
            console.log(`send to ${address}`);
          }}
          open={open}
          onClose={() => setOpen(false)}
        />
      </Content>
    </Page>
  );
};
