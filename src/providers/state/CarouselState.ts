import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PokemoonNft } from "../../constants/types";

interface State {
  nfts?: Array<PokemoonNft>;
}

const initialState: State = {
  nfts: [
    { tokenId: "0", imageUrl: "002pikapuffUC.png" },
    { tokenId: "1", imageUrl: "015rashscratchumR.png" },
  ],
};

export const fetchNameById = createAsyncThunk(
  "carousel/fetchNameById",
  async (id: number, thunkApi) => {
    console.log(thunkApi);
    await new Promise((res) => setTimeout(res, 100));
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
    builder.addCase(fetchNameById.fulfilled, (state, action) => {
      state.nfts?.push(action.payload);
    });
  },
});
export const { setIds } = carouselSlice.actions;

export default carouselSlice.reducer;
