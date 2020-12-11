import * as movieService from "../../services/movie";
//
// export const LOADING_STATUS = "LOADING_STATUS";
export const GET_MOVIE_POPULAR_LIST = "GET_MOVIE_POPULAR_LIST";
export const GET_MOVIE_TOP_LIST = "GET_MOVIE_TOP_LIST";
export const GET_MOVIE_SEARCH = "GET_MOVIE_SEARCH";

//
const actionGetData = (type , data) => {
    return{
       type , data
    }
};
//
// const actionLoading = () => {
//     return {
//         type: "LOADING_STATUS",
//         data: true
//     }
// };
//
//
//
export const getMoviePopularList = (page) => async (dispatch) => {
    // dispatch(actionLoading());
    const data = await movieService.getListMoviePopular(page);
    dispatch(actionGetData(GET_MOVIE_POPULAR_LIST , data))
};

export const getMovieTopList = (page) => async (dispatch) => {
    // dispatch(actionLoading());
    const data = await movieService.getListMovieTop(page);
    dispatch(actionGetData(GET_MOVIE_TOP_LIST , data))
};

export const getMovieSearch = (query) => async (dispatch) => {
    // dispatch(actionLoading());
    const data = await movieService.getSearchMovie(query);
    console.log(data)
    dispatch(actionGetData(GET_MOVIE_SEARCH , data))
};


