import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { FC, useState, useEffect } from "react";
import StoreOutlinedIcon from "@material-ui/icons/StoreOutlined";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import { Gallery } from "../Gallery";
import { BLAST_OFF_COLLECTION } from "../../utils/StoryData";
import { Fab } from "components/Fab";
import { NavHeader } from "components/Header";
import { Content } from "components/layout";
import { FilterDashboard } from "components/FilterDashboard";
import { PokemoonNft } from "constants/index";

//TODO: Swap icons for pokemoon stuff
const linkConfig = [
  {
    target: "/buy",
    label: "Buy",
    icon: <StoreOutlinedIcon />,
  },
  {
    target: "/gallery",
    label: "Gallery",
    icon: <PhotoSizeSelectActualIcon />,
  },
];

const StyledLinkContainer = styled(Typography)`
  background: white;
  border-radius: 28px;

  min-height: 40px;
  padding: 20px;
  margin: 10px;
  border: 2px solid #2e0cff;
  text-align: center;
`;

const ACCOUNT = "0xce753a7d4C36339B1e427684402bE0D53064FeA6";

interface FilterState {
  rarities: string[];
  types: string[];
  packs: string[];
}

const FullDemo: FC = () => {
  const [viewState, setViewState] = useState("table");
  const [filterState, setFilterState] = useState<FilterState>({
    rarities: [],
    types: [],
    packs: [],
  });

  const [userNfts, setUserNfts] = useState<PokemoonNft[]>(BLAST_OFF_COLLECTION);
  const [filterNfts, setFilterNfts] = useState<PokemoonNft[]>(
    BLAST_OFF_COLLECTION
  );

  useEffect(() => {
    const { rarities, types, packs } = filterState;
    const filteredNfts = userNfts.filter((nft) => {
      if (types && types.length > 0) {
        const type = nft.card?.type;
        if (!type || !types.includes(type)) {
          return false;
        }
      }

      return true;
    });
    setFilterNfts(filteredNfts);
  }, [filterState, userNfts]);

  return (
    <>
      <NavHeader account={ACCOUNT} />
      <Fab account={ACCOUNT} />
      <FilterDashboard
        onViewStateChange={(state) => setViewState(state)}
        onTypeFilterChange={(filter) =>
          setFilterState((state) => ({ ...state, types: filter }))
        }
        onRarityFilterChange={(filter) =>
          setFilterState((state) => ({ ...state, rarities: filter }))
        }
        onPackFilterChange={(filter) =>
          setFilterState((state) => ({ ...state, packs: filter }))
        }
      />
      <Content maxWidth="md">
        {viewState === "grid" ? <Gallery nfts={filterNfts} /> : <></>}
      </Content>
    </>
  );
};
export default FullDemo;
