import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: null,
    },
    reducers: {
        setpostsData: (state, { payload }) => {
            state.posts = payload;
        },
        addPost: (state, { payload })  => {
            state.posts.push(payload);
        },
        editPost: (state, { payload }) => {
            state.posts = state.posts.map((post) => {
                if(post.id === payload[1]){
                    return {
                        ...post,
                        title: payload[0]
                    }
                } else {
                    return post;
                }
            }
        )},
        deletePost: (state, { payload }) => {
            state.posts = state.posts.filter((post) => post.id !== payload);
        }
    }
});

export const { setpostsData, addPicture, editPicture, deletePicture } = postsSlice.actions;
export default postsSlice.reducer;