import "./style.scss"
import React, {useState} from "react"

import {Button} from 'primereact/button';
import {MovieList} from "./movieList";
import {useDispatch, useSelector} from "react-redux";
import {InputText} from 'primereact/inputtext';

import * as movieAction from "../store/movie/movie-actions"

export const MovieComponent = () => {
    const [status, setStatus] = useState('popular');
    const [searchValue, setSearchValue] = useState('')
    const dispatch = useDispatch();
    const {movie: {movieTopList, moviePopularList, totalPageTop, totalPagePopular , totalPageSearch , movieSearch}} = useSelector(state => state);
    const dispatchGetMovieTopList = (page) => dispatch(movieAction.getMovieTopList(page));
    const dispatchGetMoviePopularList = (page) => dispatch(movieAction.getMoviePopularList(page));
    const dispatchSearchMovie = (query) => dispatch(movieAction.getMovieSearch(query));


    const onHandleInputSearch = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value)
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        setStatus('search');
        dispatchSearchMovie({query: searchValue, page:1})
    };
    return (
        <div className="card">
            <div className="sizes">
                <Button label="Popular movies" className="p-button" onClick={() => setStatus('popular')}/>
                <Button label="Top movies" className="p-button" onClick={() => setStatus('top')}/>
            </div>

            <span className="p-input-icon-left" style={{margin: "30px 0 10px 30px"}}>
                    <i className="pi pi-search"/>
                    <InputText placeholder="Search" onChange={(e) => onHandleInputSearch(e)}/>
                    <Button label="Search" className="p-button" onClick={(e) => onHandleSubmit(e)}/>
            </span>
            {status === "popular" && <MovieList
                title={"Popular movie"}
                total={totalPagePopular}
                data={moviePopularList}
                onHandleGetData={dispatchGetMoviePopularList}/>}
            {status === "top" && <MovieList
                title={"Top movie"}
                total={totalPageTop}
                data={movieTopList}
                onHandleGetData={dispatchGetMovieTopList}/>}
            {status === "search" && <MovieList
                title={`${totalPageSearch} movie has been found`}
                total={totalPageSearch}
                data={movieSearch}
                status={"search"}
                searchParam={searchValue}
                onHandleGetData={dispatchSearchMovie}/>}

        </div>
    )
};
