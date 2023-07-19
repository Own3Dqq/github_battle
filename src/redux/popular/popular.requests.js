import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPopularRepos = createAsyncThunk('popular/fetchPopularRepos',
    async (language, { rejectWithValue }) => {
        try {
            const encodeURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}`);
            const responce = await axios.get(encodeURI)
            return responce.data.items;
        } catch (error) {
            return rejectWithValue(error)
        }

    }
)
