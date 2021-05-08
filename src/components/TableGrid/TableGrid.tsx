import React, { FC, ReactElement } from "react";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridCellParams,
} from "@material-ui/data-grid";
import { PokemoonNft } from "constants/index";
import { flattenUserNfts } from "utils/nftStats";
import { makeStyles } from "@material-ui/core/styles";
import { TypeChip, RarityChip } from "components/Chip";

export interface TableGridProps {
  nfts: Array<PokemoonNft>;
}

const TypeCellFormatter = ({ value }: GridCellParams) => {
  return <TypeChip type={value as string} label={value} />;
};

const RarityCellFormatter = ({ value }: GridCellParams) => {
  return <RarityChip rarity={value as string} label={value} />;
};

const useStyles = makeStyles({
  root: {},
});

const columns: GridColDef[] = [
  {
    field: "tokenId",
    headerName: "ID",
    headerAlign: "center",
    align: "center",
    // width: 70,
    flex: 1,
    valueFormatter: ({ value }) => `#${value}`,
  },
  {
    field: "number",
    headerAlign: "center",
    align: "center",
    headerName: "Number",
    // width: 120,
    flex: 1,
  },
  {
    field: "name",
    headerAlign: "center",
    align: "center",
    headerName: "Name",
    // width: 140,
    flex: 1,
  },
  {
    field: "type",
    headerAlign: "center",
    align: "center",
    headerName: "Type",
    // width: 140,
    flex: 1,
    renderCell: TypeCellFormatter,
  },
  {
    field: "rarity",
    headerName: "Rarity",
    // width: 140,
    flex: 1,
    headerAlign: "center",
    align: "center",
    renderCell: RarityCellFormatter,
  },
];

const TableGrid: FC<TableGridProps> = ({ nfts }) => {
  const userNfts = flattenUserNfts(nfts);
  const classes = useStyles();
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={userNfts ?? []}
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
