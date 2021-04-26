import React, { useEffect, useState } from "react";
import { Story, Meta } from "@storybook/react";
import Button from "../Button";
import Modal from "./DialogModal";
import InspectCard from "./InspectCard2";
import { PM_RARITY, PM_TYPES, PokemoonNft } from "../../constants/nfts";
import { Page, Content } from "../layout";
import SendToAddress from "./SendToAddress";
import { BLAST_OFF_CARDS, BLAST_OFF_COLLECTION } from "../../utils/StoryData";
import useModal from "../../hooks/useModal";
import Dialog from "@material-ui/core/Dialog";
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
  tokenId: "60",
  imageUrl: "001meownautL.png",
  card: BLAST_OFF_CARDS[1],
  rarity: PM_RARITY.L,
};

const ModalDialog = (props: any) => {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    if (!open) {
      props.handleClose();
    }
  }, [open, props]);
  return (
    <Dialog open={open} onClick={() => setOpen(false)} fullScreen>
      <InspectCard nft={props.nft} />
    </Dialog>
  );
};

export const Inspect: Story = () => {
  const [open, setOpen] = React.useState(true);
  const [onPresent, onDismiss] = useModal(<ModalDialog nft={n} />);
  return (
    <Page>
      <Content>
        <Button label="Open Modal" onClick={onPresent} />
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
          }}
          open={open}
          onClose={() => setOpen(false)}
        />
      </Content>
    </Page>
  );
};
