import axios from "axios";


const ENV = process.env;

// Get list movie popular
export const getListMoviePopular = async ({page}) => {

    const url = `${ENV.REACT_APP_MOVIE_DB_URL}/movie/popular?language=en-US&page=${page}`;
    try {
        const {data} = await axios.get(url, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                'Authorization': `Bearer ${ENV.REACT_APP_MOVIE_DB_TOKEN}`
            }
        });
        return data;
    } catch (e) {
        console.error(e);
    }

};

// Get list movie top
export const getListMovieTop = async ({page}) => {

    const url = `${ENV.REACT_APP_MOVIE_DB_URL}/movie/top_rated?language=en-US&page=${page}`;
    try {
        const {data} = await axios.get(url, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                'Authorization': `Bearer ${ENV.REACT_APP_MOVIE_DB_TOKEN}`
            }
        });
        return data;
    } catch (e) {
        console.error(e);
    }

};


export const getSearchMovie = async ({query, page}) => {

    const url = `${ENV.REACT_APP_MOVIE_DB_URL}/search/movie?query=${query}&language=en-US&page=${page}`;
    try {
        const {data} = await axios.get(url, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                'Authorization': `Bearer ${ENV.REACT_APP_MOVIE_DB_TOKEN}`
            }
        });
        return data;
    } catch (e) {
        console.error(e);
    }

};
