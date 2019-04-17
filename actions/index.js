import axios from 'axios';
import _ from 'lodash';

const API_KEY = 'da2bb6abe2mshda441b8ba078465p1f52a5jsn653fee6fc9f2'
const axiosInstance = axios.create({
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com',
    timeout: 2000,
    headers: {'X-RapidAPI-Key': API_KEY}
})

export const searchTracks = singerName => {
    return axiosInstance.get(`search?q=${singerName}`)
                        .then((response) => {
    debugger;
    const albums =  response.data.data.map(item => item.album);
    const uniqueAlbums = _.uniqBy(albums, 'title');
    return uniqueAlbums;
})
}