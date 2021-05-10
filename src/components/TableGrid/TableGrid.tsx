import React, { FC, ReactElement } from "react";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridCellParams,
} from "@material-ui/data-grid";
import { PokemoonNft } from "constants/index";
import { makeStyles } from "@material-ui/core/styles";
import { TypeChip, RarityChip } from "components/Chip";
import Box from "@material-ui/core/Box";
//@ts-ignore
import Jdenticon from "react-jdenticon";
import Button from "components/Button";
import SearchIcon from "@material-ui/icons/Search";

export interface TableGridProps {
  nfts: Array<PokemoonNft>;
}

const TypeCellFormatter = ({ value }: GridCellParams) => {
  return <TypeChip type={value as string} label={value} />;
};

const RarityCellFormatter = ({ value }: GridCellParams) => {
  return <RarityChip rarity={value as string} label={value} />;
};

const PackIdFormatter = ({ value }: GridCellParams) => {
  return (
    <Box
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "space-around",
        alignContent: "center",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      #{value}
      {value && (
        <div
          style={{ paddingTop: 15, cursor: "pointer" }}
          onClick={() => {
            window.location.href = `/pack/${value}`;
          }}
        >
          {/* <Jdenticon size="24" value={value} style={{ margin: "auto" }} /> */}
        </div>
      )}
    </Box>
  );
};

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
  },
});

const columns: GridColDef[] = [
  {
    field: "tokenId",
    headerName: "ID",
    headerAlign: "center",
    align: "center",
    width: 70,
    // flex: 1,
    valueFormatter: ({ value }) => `#${value}`,
  },
  {
    field: "packId",
    headerName: "Pack ID",
    headerAlign: "center",
    align: "center",
    // flex: 1,
    renderCell: PackIdFormatter,
  },
  {
    field: "name",
    headerAlign: "center",
    align: "center",
    headerName: "Name",
    // width: 140,
    // flex: 1,
  },
  {
    field: "type",
    headerAlign: "center",
    align: "center",
    headerName: "Type",
    // width: 140,
    // flex: 1,
    renderCell: TypeCellFormatter,
  },
  {
    field: "rarity",
    headerName: "Rarity",
    // width: 140,
    // flex: 1,
    headerAlign: "center",
    align: "center",
    renderCell: RarityCellFormatter,
  },
  {
    field: "set",
    headerName: "Set",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "uniqueId",
    align: "center",
    headerName: "Actions",
    width: 120,
    renderCell: () => {
      return <Button endIcon={<SearchIcon />}>Inspect</Button>;
    },
  },
];

const TableGrid: FC<TableGridProps> = ({ nfts }) => {
  const classes = useStyles();
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={nfts ?? []}
        columns={columns}
        pageSize={10}
        getRowId={(row) => row.tokenId}
        hideFooterSelectedRowCount={false}
        autoHeight
        className={classes.root}
      />
    </div>
  );
};

export default TableGrid;
