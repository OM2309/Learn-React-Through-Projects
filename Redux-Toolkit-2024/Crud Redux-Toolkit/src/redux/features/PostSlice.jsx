import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk("post/getPost", async ({ id }) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch post");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
});

const postSlice = createSlice({
  name: "post",
  initialState: {
    loading: false,
    post: [],
    error: null,
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
        state.error = null;
      })
      .addCase(getPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default postSlice.reducer;

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const getPost = createAsyncThunk("post/getPosts", async ({ id }) => {
//   return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//   .then((data) => data.json());
// });

// const PostSlice = createSlice({
//   name: "post",
//   initialState: {
//     loading: false,
//     post: [],
//     error: null,
//   },

// @reduxjs_toolkit.js?v=50662397:2479 Uncaught Error: The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice
//     at buildReducer (@reduxjs_toolkit.js?v=50662397:2479:17)
//     at reducer (@reduxjs_toolkit.js?v=50662397:2510:22)
//     at @reduxjs_toolkit.js?v=50662397:248:26
//     at Array.forEach (<anonymous>)
//     at assertReducerShape (@reduxjs_toolkit.js?v=50662397:246:25)
//     at combineReducers (@reduxjs_toolkit.js?v=50662397:282:5)
//     at configureStore (@reduxjs_toolkit.js?v=50662397:1966:19)
//     at store.jsx:4:22

//  extraReducers: {
//     [getPost.pending]: (state) => {
//       state.loading = true;
//     },

//     [getPost.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.post = [action.payload];
//     },

//     [getPost.rejected]: (state, action) => {
//       state.error = action.payload;
//     },
//   },

// });

// export default PostSlice.reducer;

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const getPost = createAsyncThunk("post/getPost", async (id) => {
//   try {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     if (!response.ok) {
//       throw new Error("Failed to fetch post");
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     return error.message;
//   }
// });

// const postSlice = createSlice({
//   name: "post",
//   initialState: {
//     loading: false,
//     post: null,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getPost.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getPost.fulfilled, (state, action) => {
//         state.loading = false;
//         state.post = action.payload;
//         state.error = null;
//       })
//       .addCase(getPost.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default postSlice.reducer;
