import  axios from "axios";

const BASE_URL = "https://uniton.onrender.com/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmMyNjcyMDVlMTc3NmI5NWJhNWNmYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMTk1NDg4MCwiZXhwIjoxNzAyMjE0MDgwfQ.I_wEVFbHBWtAxroO10cx44hi-_5CvlQ5T5ds2SUvonc"

export const publicRequest = axios.create({
    baseURL : BASE_URL,
});
export const userRequest = axios.create({
    baseURL : BASE_URL,
    header: {token:`Bearer ${TOKEN}`},
}); 