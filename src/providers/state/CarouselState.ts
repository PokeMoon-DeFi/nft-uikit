import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BLAST_OFF_COLLECTION from "constants/nfts/2114";
import { PokemoonNft } from "../../constants/nfts/types";

interface State {
  nfts?: Array<PokemoonNft>;
}

const initialState: State = {
  nfts: [...BLAST_OFF_COLLECTION],
};

export const asyncFetchIds = createAsyncThunk(
  "carousel/asyncFetchIds",
  async (id: number, thunkApi) => {
    console.log(thunkApi);
    await new Promise((res) => setTimeout(res, 1000));
    return { tokenId: "2", imageUrl: "012goldenkobanC.png" };
  }
);

export const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    setIds: (state, action) => {
      const nfts: [PokemoonNft] = action.payload;
      state.nfts = nfts;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncFetchIds.fulfilled, (state, action) => {
      state.nfts?.push(action.payload);
    });
  },
});
export const { setIds } = carouselSlice.actions;

export default carouselSlice.reducer;
