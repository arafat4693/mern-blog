import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import messageService from "../services/messageService"
import { MessageData, MongoMessage, UpdateMessage } from "../utils/types"

interface State {
  messages: MongoMessage[] | []
  messageLoading: boolean
  messageMsg: string
}

const initialState: State = {
  messages: [],
  messageLoading: false,
  messageMsg: "",
}

//get all messages
export const getMessages = createAsyncThunk(
  "messageSlice/all",
  async (_, thunkApi) => {
    try {
      return await messageService.allMessages("/message/")
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString()
      return thunkApi.rejectWithValue(message)
    }
  }
)

//create a message
export const createMessage = createAsyncThunk(
  "messageSlice/new",
  async (messageData: MessageData, thunkApi: any) => {
    try {
      const userId = thunkApi.getState().user.user._id
      return await messageService.newMessage(`/message/${userId}`, messageData)
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString()
      return thunkApi.rejectWithValue(message)
    }
  }
)

//edit a message
export const editMessage = createAsyncThunk(
  "messageSlice/update",
  async (messageData: UpdateMessage, thunkApi: any) => {
    try {
      const userId = thunkApi.getState().user.user._id
      return await messageService.updateMessage(
        `/message/${userId}`,
        messageData
      )
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString()
      return thunkApi.rejectWithValue(message)
    }
  }
)

//delete a message
export const removeMessage = createAsyncThunk(
  "messageSlice/delete",
  async (messageId: string, thunkApi: any) => {
    try {
      const userId = thunkApi.getState().user.user._id
      return await messageService.deleteMessage(
        `/message/${userId}/${messageId}`
      )
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString()
      return thunkApi.rejectWithValue(message)
    }
  }
)

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    resetState: (state) => {
      state.messageLoading = false
      state.messageMsg = ""
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getMessages.fulfilled,
        (state, action: PayloadAction<MongoMessage[]>) => {
          state.messages = action.payload
        }
      )
      .addCase(createMessage.pending, (state) => {
        state.messageLoading = true
      })
      .addCase(
        createMessage.fulfilled,
        (state, action: PayloadAction<MongoMessage>) => {
          state.messageLoading = false
          state.messages = [action.payload, ...state.messages]
        }
      )
      .addCase(createMessage.rejected, (state, action: PayloadAction<any>) => {
        state.messageLoading = false
        state.messageMsg = action.payload
      })
      .addCase(editMessage.pending, (state) => {
        state.messageLoading = true
      })
      .addCase(
        editMessage.fulfilled,
        (state, action: PayloadAction<MongoMessage>) => {
          state.messageLoading = false
          state.messages = state.messages.map((m) => {
            if (m._id === action.payload._id) return action.payload
            return m
          })
        }
      )
      .addCase(editMessage.rejected, (state, action: PayloadAction<any>) => {
        state.messageLoading = false
        state.messageMsg = action.payload
      })
      .addCase(removeMessage.pending, (state) => {
        state.messageLoading = false
      })
      .addCase(
        removeMessage.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.messageLoading = false
          state.messages = state.messages.filter(
            (m) => m._id !== action.payload
          )
        }
      )
      .addCase(removeMessage.rejected, (state, action: PayloadAction<any>) => {
        state.messageLoading = false
        state.messageMsg = action.payload
      })
  },
})

export default messageSlice.reducer
