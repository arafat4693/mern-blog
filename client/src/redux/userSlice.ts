import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface State {
  user: any | null
}

const initialState: State = {
  user: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload
    },
  },
})

export const { addUser } = userSlice.actions
export default userSlice.reducer
