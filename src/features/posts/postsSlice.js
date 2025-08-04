import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const POSTS_LIMIT = 5;

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${POSTS_LIMIT}`);
    if (!res.ok) throw new Error('Ошибка загрузки');
    return await res.json();
  }
);

const postsSlice = createSlice({
  name: 'post',
  initialState: {
    data: [],
    status: 'idle', // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export default postsSlice.reducer;