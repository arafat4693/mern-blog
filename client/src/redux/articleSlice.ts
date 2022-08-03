import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import articleServices from "../services/articleService"
import { ArticleData, MongoArticle } from "../utils/types"

interface State {
  articles: MongoArticle[] | []
  articleSuccess: boolean
  articleError: boolean
  articleLoading: boolean
  articleMessage: string
}

interface createArticleAction {
  message: string
  newArticle: MongoArticle
}

const initialState: State = {
  articles: [],
  articleSuccess: false,
  articleError: false,
  articleLoading: false,
  articleMessage: "",
}

//create a article
export const createArticle = createAsyncThunk(
  "articleSlice/create",
  async (articleData: ArticleData, thunkApi: any) => {
    try {
      const userId = thunkApi.getState().user.user._id
      return await articleServices.createArticle(
        `/article/${userId}`,
        articleData
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

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    resetState: (state) => {
      state.articleSuccess = false
      state.articleError = false
      state.articleLoading = false
      state.articleMessage = ""
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createArticle.pending, (state) => {
        state.articleLoading = true
      })
      .addCase(
        createArticle.fulfilled,
        (state, action: PayloadAction<createArticleAction>) => {
          state.articleLoading = false
          state.articleSuccess = true
          state.articleMessage = action.payload.message
          state.articles = [...state.articles, action.payload.newArticle]
        }
      )
      .addCase(createArticle.rejected, (state, action: PayloadAction<any>) => {
        state.articleLoading = false
        state.articleError = true
        state.articleMessage = action.payload
      })
  },
})

export const { resetState } = articleSlice.actions
export default articleSlice.reducer
