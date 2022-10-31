import axios from "axios";

export async function apiRequest({url, config}) {
    return axios.get(url, config);
}
