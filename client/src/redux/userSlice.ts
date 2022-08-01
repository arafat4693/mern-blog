import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import userServices from "../services/userService"
import { UserData, MongoUser } from "../utils/types"

interface State {
  user: MongoUser | null
  userSuccess: boolean
  userError: boolean
  userLoading: boolean
  userMessage: string
  userRedirect: boolean
}

const initialState: State = {
  user: null,
  userSuccess: false,
  userError: false,
  userLoading: false,
  userMessage: "",
  userRedirect: false,
}

//register a user
export const registerUser = createAsyncThunk(
  "userSlice",
  async (userData: UserData, thunkApi) => {
    try {
      return await userServices.register("/auth/register", userData)
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString()
      return thunkApi.rejectWithValue(message)
    }
  }
)

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload
    },
    resetState: (state) => {
      state.user = null
      state.userSuccess = false
      state.userError = false
      state.userLoading = false
      state.userMessage = ""
      state.userRedirect = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.userLoading = true
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.userLoading = false
        state.userSuccess = true
        state.userMessage = action.payload.message
        state.userRedirect = true
      })
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        state.userError = true
        state.userLoading = false
        state.userMessage = action.payload
      })
  },
})

export const { addUser, resetState } = userSlice.actions
export default userSlice.reducer
