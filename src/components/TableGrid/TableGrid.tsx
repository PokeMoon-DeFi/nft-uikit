import React, { FC, ReactElement } from "react";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridCellParams,
} from "@material-ui/data-grid";
import { PokemoonNft, UserNft } from "constants/index";
import { flattenUserNfts } from "utils/nftStats";
export interface TableGridProps {
  nfts: Array<PokemoonNft>;
}

const ProgressBarFormatter = ({ value }: GridCellParams) => {
  return <div>{value}</div>;
};

const columns: GridColDef[] = [
  { field: "tokenId", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Name",
    width: 140,
    renderCell: ProgressBarFormatter,
  },
];

const TableGrid: FC<TableGridProps> = ({ nfts }) => {
  const userNfts = flattenUserNfts(nfts);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={userNfts ?? []}
        columns={columns}
        pageSize={10}
        getRowId={(row) => row.tokenId}
        hideFooterSelectedRowCount={false}
        autoHeight
      />
    </div>
  );
};

export default TableGrid;
