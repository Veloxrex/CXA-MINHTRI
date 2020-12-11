import * as movieActions from './movie-actions';
const initState = {
    loading: false
};

export default function (state = initState, action) {
    switch (action.type) {
        case movieActions.GET_MOVIE_POPULAR_LIST:
            return { ...state,
                // currentPage: action.data.page,
                totalPagePopular: action.data.total_results,
                moviePopularList: action.data.results
            };
        case movieActions.GET_MOVIE_TOP_LIST:
            return { ...state,
                // currentPage: action.data.page,
                totalPageTop: action.data.total_results,
                movieTopList: action.data.results
            };
        case movieActions.GET_MOVIE_SEARCH:
            return { ...state,
                // currentPage: action.data.page,
                totalPageSearch: action.data.total_results,
                movieSearch: action.data.results
            };
        default:
            return state;
    }
}
