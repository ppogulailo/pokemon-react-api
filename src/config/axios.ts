import axios from 'axios'

export const API_URL = 'https://pokeapi.co/api/v2/'
export const $api = axios.create({
    baseURL: API_URL,
    withCredentials: false,
    headers: { 'Content-Type': 'application/json' },
})
