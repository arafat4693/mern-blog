import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import userServices from "../services/userService"
import { UserData, MongoUser, LoginData } from "../utils/types"
import { getErrMsg } from "../utils/utilFunctions"

interface State {
  user: MongoUser | null
  users: MongoUser[] | []
  userSuccess: boolean
  userError: boolean
  userLoading: boolean
  userMessage: string
  userRedirect: boolean
}

const initialState: State = {
  user: null,
  users: [],
  userSuccess: false,
  userError: false,
  userLoading: false,
  userMessage: "",
  userRedirect: false,
}

//register a user
export const registerUser = createAsyncThunk(
  "userSlice/register",
  async (userData: UserData, thunkApi) => {
    try {
      return await userServices.register("/auth/register", userData)
    } catch (err: any) {
      const message = getErrMsg(err)
      return thunkApi.rejectWithValue(message)
    }
  }
)

//login a user
export const loginUser = createAsyncThunk(
  "userSlice/login",
  async (loginData: LoginData, thunkApi) => {
    try {
      return await userServices.login("/auth/login", loginData)
    } catch (err: any) {
      const message = getErrMsg(err)
      return thunkApi.rejectWithValue(message)
    }
  }
)

//get all users
export const getUsers = createAsyncThunk(
  "userSlice/users",
  async (_, thunkApi) => {
    try {
      return await userServices.allUsers("/user/")
    } catch (err: any) {
      const message = getErrMsg(err)
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
      state.userSuccess = false
      state.userError = false
      state.userLoading = false
      state.userMessage = ""
      state.userRedirect = false
    },
    followAuthor: (
      state,
      action: PayloadAction<{ authorId: string; isFollowing: boolean }>
    ) => {
      userServices.PushOrPull(
        action.payload.authorId,
        action.payload.isFollowing,
        state.user,
        "following"
      )
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.userLoading = true
      })
      .addCase(
        getUsers.fulfilled,
        (state, action: PayloadAction<MongoUser[]>) => {
          state.userLoading = false
          state.users = action.payload
        }
      )
      .addCase(registerUser.pending, (state) => {
        state.userLoading = true
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<{ message: string }>) => {
          state.userLoading = false
          state.userSuccess = true
          state.userMessage = action.payload.message
          state.userRedirect = true
        }
      )
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        state.userError = true
        state.userLoading = false
        state.userMessage = action.payload
      })
      .addCase(loginUser.pending, (state) => {
        state.userLoading = true
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.userLoading = false
        state.userSuccess = true
        state.user = action.payload.user
        state.userMessage = action.payload.message
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.userError = true
        state.userLoading = false
        state.userMessage = action.payload
      })
  },
})

export const { addUser, resetState, followAuthor } = userSlice.actions
export default userSlice.reducer
