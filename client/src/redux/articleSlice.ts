import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import articleServices from "../services/articleService"
import { ArticleData, MongoArticle, UpdateArticle } from "../utils/types"
import { getErrMsg } from "../utils/utilFunctions"

interface State {
  articles: MongoArticle[] | []
  articleSuccess: boolean
  articleError: boolean
  articleLoading: boolean
  articleMessage: string
  articleAction: "DELETE" | "UPDATE" | "CREATE" | "GET" | ""
  articleSlug: string
}

interface ArticleAction {
  message: string
  article: MongoArticle
}

interface deleteArticleAction {
  message: string
  articleId: string
}

const initialState: State = {
  articles: [],
  articleSuccess: false,
  articleError: false,
  articleLoading: false,
  articleMessage: "",
  articleAction: "",
  articleSlug: "",
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
      const message = getErrMsg(err)
      return thunkApi.rejectWithValue(message)
    }
  }
)

//get all articles
export const getArticles = createAsyncThunk(
  "articleSlice/all",
  async (_, thunkApi: any) => {
    try {
      return await articleServices.allArticles("/article/")
    } catch (err: any) {
      const message = getErrMsg(err)
      return thunkApi.rejectWithValue(message)
    }
  }
)

//get random articles
export const getRandomArticles = createAsyncThunk(
  "articleSlice/random",
  async (_, thunkApi: any) => {
    try {
      return await articleServices.allArticles("/article/random")
    } catch (err: any) {
      const message = getErrMsg(err)
      return thunkApi.rejectWithValue(message)
    }
  }
)

//get recent articles
export const getRecentArticles = createAsyncThunk(
  "articleSlice/recent",
  async (_, thunkApi: any) => {
    try {
      return await articleServices.allArticles("/article/recent")
    } catch (err: any) {
      const message = getErrMsg(err)
      return thunkApi.rejectWithValue(message)
    }
  }
)

//get most bookmarked articles
export const getBookmarkedArticles = createAsyncThunk(
  "articleSlice/mostBookmarked",
  async (_, thunkApi: any) => {
    try {
      return await articleServices.allArticles("/article/mostBookmarked")
    } catch (err: any) {
      const message = getErrMsg(err)
      return thunkApi.rejectWithValue(message)
    }
  }
)

//delete article
export const deleteArticle = createAsyncThunk(
  "articleSlice/delete",
  async (article: MongoArticle, thunkApi: any) => {
    try {
      const userId = thunkApi.getState().user.user._id
      return await articleServices.deleteArticle(
        `/article/${userId}/${article._id}`,
        article
      )
    } catch (err: any) {
      const message = getErrMsg(err)
      return thunkApi.rejectWithValue(message)
    }
  }
)

//update article
export const updateArticle = createAsyncThunk(
  "articleSlice/update",
  async (articleData: UpdateArticle, thunkApi: any) => {
    try {
      const userId = thunkApi.getState().user.user._id
      return await articleServices.updateArticle(
        `/article/${userId}`,
        articleData
      )
    } catch (err: any) {
      const message = getErrMsg(err)
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
      state.articleAction = ""
      state.articleSlug = ""
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createArticle.pending, (state) => {
        state.articleAction = "CREATE"
        state.articleLoading = true
      })
      .addCase(
        createArticle.fulfilled,
        (state, action: PayloadAction<ArticleAction>) => {
          state.articleLoading = false
          state.articleSuccess = true
          state.articleAction = "CREATE"
          state.articleSlug = action.payload.article.slug
          state.articleMessage = action.payload.message
          state.articles = [...state.articles, action.payload.article]
        }
      )
      .addCase(createArticle.rejected, (state, action: PayloadAction<any>) => {
        state.articleLoading = false
        state.articleError = true
        state.articleAction = "CREATE"
        state.articleMessage = action.payload
      })
      .addCase(getArticles.pending, (state) => {
        state.articleAction = "GET"
        state.articleLoading = true
      })
      .addCase(
        getArticles.fulfilled,
        (state, action: PayloadAction<MongoArticle[]>) => {
          state.articles = action.payload
          state.articleAction = ""
          state.articleLoading = false
        }
      )
      .addCase(deleteArticle.pending, (state) => {
        state.articleAction = "DELETE"
        state.articleLoading = true
      })
      .addCase(
        deleteArticle.fulfilled,
        (state, action: PayloadAction<deleteArticleAction>) => {
          state.articleLoading = false
          state.articleSuccess = true
          state.articleAction = "DELETE"
          state.articleMessage = action.payload.message
          state.articles = state.articles.filter(
            (a) => a._id !== action.payload.articleId
          )
        }
      )
      .addCase(deleteArticle.rejected, (state, action: PayloadAction<any>) => {
        state.articleLoading = false
        state.articleError = true
        state.articleAction = "DELETE"
        state.articleMessage = action.payload
      })
      .addCase(updateArticle.pending, (state) => {
        state.articleLoading = true
        state.articleAction = "UPDATE"
      })
      .addCase(
        updateArticle.fulfilled,
        (state, action: PayloadAction<ArticleAction>) => {
          state.articleLoading = false
          state.articleSuccess = true
          state.articleAction = "UPDATE"
          state.articleMessage = action.payload.message
          state.articleSlug = action.payload.article.slug
          state.articles = state.articles.map((a) => {
            if (a._id === action.payload.article._id)
              return action.payload.article
            return a
          })
        }
      )
      .addCase(updateArticle.rejected, (state, action: PayloadAction<any>) => {
        state.articleLoading = false
        state.articleError = true
        state.articleAction = "UPDATE"
        state.articleMessage = action.payload
      })
  },
})

export const { resetState } = articleSlice.actions
export default articleSlice.reducer
