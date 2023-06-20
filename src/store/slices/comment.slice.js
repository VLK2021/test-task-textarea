import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {commentService} from "../../services";


export const getAllComments = createAsyncThunk(
    'commentSlice/getAllComments',
    async (skip, {rejectWithValue}) => {
        try {
            const comments = await commentService.getComments(skip);
            return comments
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const getCommentsMore = createAsyncThunk(
    'commentSlice/getCommentsMore',
    async (skip, {rejectWithValue, dispatch}) => {
        try {
            const response = await commentService.getComments(skip);
            const {comments} = response;
            dispatch(addComments({comments}));
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const initialState = {
    commentsArr: [],
    skip: 0,
    total: null,
    limit: null,
    status: null,
    error: null,
}

const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,

    reducers: {
        deleteComment: (state, action) => {
            state.commentsArr = state.commentsArr.filter(item => item.id !== action.payload)
        },
        addComments: (state, action) => {
            action.payload.comments.map(obj => state.commentsArr.push(obj));
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getAllComments.pending, (state) => {
                state.status = 'Loading....'
                state.error = null
            })
            .addCase(getAllComments.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.commentsArr = action.payload.comments
                state.skip = action.payload.skip
                state.total = action.payload.total
                state.limit = action.payload.limit

            })
            .addCase(getAllComments.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            })
    }
});

const {actions: {deleteComment, addComments}} = commentSlice;
const commentActions = {deleteComment, addComments};
export {commentActions};
export default commentSlice.reducer;