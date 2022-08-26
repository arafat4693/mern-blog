import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import messageService from "../services/messageService"
import { MessageData, MongoMessage, UpdateMessage } from "../utils/types"
import { getErrMsg } from "../utils/utilFunctions"

interface State {
  messages: MongoMessage[] | []
  messageLoading: boolean
  messageSuccess: boolean
  messageError: boolean
  messageMsg: string
  currentMessageId: string
  messageAction: "ROOT" | "DELETE" | "EDIT" | "REPLY" | ""
}

const initialState: State = {
  messages: [],
  messageLoading: false,
  messageSuccess: false,
  messageError: false,
  messageMsg: "",
  messageAction: "",
  currentMessageId: "",
}

//get all messages
export const getMessages = createAsyncThunk(
  "messageSlice/all",
  async (articleId: string, thunkApi) => {
    try {
      return await messageService.allMessages(`/message/${articleId}`)
    } catch (err: any) {
      const message = getErrMsg(err)
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
      const message = getErrMsg(err)
      return thunkApi.rejectWithValue(message)
    }
  }
)

//reply message
export const replyMessage = createAsyncThunk(
  "messageSlice/reply",
  async (messageData: MessageData, thunkApi: any) => {
    try {
      const userId = thunkApi.getState().user.user._id
      return await messageService.newMessage(`/message/${userId}`, messageData)
    } catch (err: any) {
      const message = getErrMsg(err)
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
      const message = getErrMsg(err)
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
      const message = getErrMsg(err)
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
      state.messageSuccess = false
      state.messageError = false
      state.messageMsg = ""
      state.messageAction = ""
    },
    resetCurrentMessage: (state) => {
      state.currentMessageId = ""
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
        state.messageAction = "ROOT"
      })
      .addCase(
        createMessage.fulfilled,
        (state, action: PayloadAction<MongoMessage>) => {
          state.messageLoading = false
          state.messageSuccess = true
          state.messageAction = "ROOT"
          state.messages = [action.payload, ...state.messages]
        }
      )
      .addCase(createMessage.rejected, (state, action: PayloadAction<any>) => {
        state.messageLoading = false
        state.messageError = true
        state.messageAction = "ROOT"
        state.messageMsg = action.payload
      })
      .addCase(replyMessage.pending, (state) => {
        state.messageLoading = true
        state.messageAction = "REPLY"
      })
      .addCase(
        replyMessage.fulfilled,
        (state, action: PayloadAction<MongoMessage>) => {
          state.messageLoading = false
          state.messageSuccess = true
          state.messageAction = "REPLY"
          state.currentMessageId = action.payload.parentId as string
          state.messages = [action.payload, ...state.messages]
        }
      )
      .addCase(replyMessage.rejected, (state, action: PayloadAction<any>) => {
        state.messageLoading = false
        state.messageError = true
        state.messageAction = "REPLY"
        state.messageMsg = action.payload
      })
      .addCase(editMessage.pending, (state) => {
        state.messageLoading = true
        state.messageAction = "EDIT"
      })
      .addCase(
        editMessage.fulfilled,
        (state, action: PayloadAction<MongoMessage>) => {
          state.messageLoading = false
          state.messageSuccess = true
          state.messageAction = "EDIT"
          state.messages = state.messages.map((m) => {
            if (m._id === action.payload._id) return action.payload
            return m
          })
        }
      )
      .addCase(editMessage.rejected, (state, action: PayloadAction<any>) => {
        state.messageLoading = false
        state.messageError = true
        state.messageAction = "EDIT"
        state.messageMsg = action.payload
      })
      .addCase(removeMessage.pending, (state) => {
        state.messageLoading = false
        state.messageAction = "DELETE"
      })
      .addCase(
        removeMessage.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.messageLoading = false
          state.messageSuccess = true
          state.messageAction = "DELETE"
          state.messages = state.messages.filter(
            (m) => m._id !== action.payload && m.parentId !== action.payload
          )
        }
      )
      .addCase(removeMessage.rejected, (state, action: PayloadAction<any>) => {
        state.messageLoading = false
        state.messageError = true
        state.messageAction = "DELETE"
        state.messageMsg = action.payload
      })
      .addCase("articleSlice/delete/fulfilled", (state, action: any) => {
        state.messages = state.messages.filter(
          (m) => m.articleId !== action.payload.articleId
        )
      })
  },
})

export const { resetState, resetCurrentMessage } = messageSlice.actions
export default messageSlice.reducer
