import { createAsyncThunk } from '@reduxjs/toolkit';
import { battle } from '../../api';


export const fetchResponseResult = createAsyncThunk('battle/fetchResponseResult',
    async (players, { rejectWithValue }) => {
        try {
            const sortedPlayers = await battle(players);
            return sortedPlayers;
        } catch (error) {
            return rejectWithValue(error);
        }
    })


