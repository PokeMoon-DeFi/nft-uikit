import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { FC, useState, useEffect, useMemo } from "react";
import StoreOutlinedIcon from "@material-ui/icons/StoreOutlined";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import { Gallery } from "../Gallery";
import { Fab } from "components/Fab";
import { NavHeader } from "components/Header";
import { Content } from "components/layout";
import { FilterDashboard } from "components/FilterDashboard";
import { PokemoonNft } from "constants/index";
import { TableGrid } from "components/TableGrid";
import { nftBalance } from "utils/nftBalance";
import { LinkConfigState } from "components/Header/types";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import { getFlatCollection, getFilteredNfts } from "utils";
import { FilterState } from "components/FilterDashboard";

//TODO: Swap icons for pokemoon stuff
const linkConfig: LinkConfigState[] = [
  {
    target: "/buy",
    label: "Buy",
    icon: <StoreOutlinedIcon />,
  },
  {
    target: "/gallery",
    label: "Gallery",
    icon: <PhotoSizeSelectActualIcon />,
    group: [
      {
        target: "/blastOff",
        label: "Blast Off!",
        icon: <PhotoSizeSelectActualIcon />,
      },
      {
        target: "/ampedUp",
        label: "Amped Up",
        icon: <PhotoSizeSelectActualIcon />,
      },
    ],
  },
  {
    target: "/collection",
    label: "Collection",
    icon: <AccountBalanceIcon />,
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

const FullDemo: FC = () => {
  const [viewState, setViewState] = useState("table");
  const [filterState, setFilterState] = useState<FilterState>({
    rarities: [],
    types: [],
    packs: [],
    search: "",
  });

  const modifiedBalance = getFlatCollection(["blastOff", "ampedUp"]);

  const filterNfts = useMemo(() => {
    return getFilteredNfts(modifiedBalance, filterState);
  }, [filterState, modifiedBalance]);

  return (
    <>
      <NavHeader account={ACCOUNT} linkConfig={linkConfig} />
      <Fab account={ACCOUNT} linkConfig={linkConfig} />
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
        onSearchFilterChange={(filter) => {
          setFilterState((state) => ({ ...state, search: filter }));
        }}
      />
      <Content maxWidth="md">
        {viewState === "grid" ? (
          <Gallery nfts={filterNfts} />
        ) : (
          <TableGrid nfts={filterNfts} hidePackId />
        )}
      </Content>
    </>
  );
};
export default FullDemo;
