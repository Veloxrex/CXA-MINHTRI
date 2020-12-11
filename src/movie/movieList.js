import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Button} from 'primereact/button';

import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import * as movieAction from "../store/movie/movie-actions"


export const MovieList = (props) => {
    const {onHandleGetData , data , title, total , searchParam , status } = props;
    const [first, setFirst] = useState(1)
    const [loading , setLoading] = useState(false)

    useEffect(() => {
        status !== "search" && onHandleGetData({query:searchParam || '' , page: 1 });
    }, []);

    const imageBodyTemplate = (rowData) => {
        return <img width={120} height={130}
                    src={`https://image.tmdb.org/t/p/w440_and_h660_face/${rowData.poster_path}`}
                    onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
                    alt={rowData.image} className="product-image"/>;
    };


    const onPage = (e) => {
        setTimeout(() => {
            const startIndex = e.first;
            setLoading(true)
            onHandleGetData({query:searchParam || '' , page: e.page +  1 || 1})
            setFirst(startIndex);
            setLoading(false)
        }, 250);
    };
    if (!data) return <h1>Loading</h1>

    return (
        <div className="card" style={{padding: "30px"}}>
            <h1>{title}</h1>
            <DataTable value={data} paginator rows={20} totalRecords={total}
                       lazy first={first} onPage={onPage}>
                <Column field="title" header="Name"/>
                <Column header="Image" body={imageBodyTemplate}/>
                <Column field="vote_average" header="Vote average"/>
                <Column field="release_date" header="Date release"/>
            </DataTable>
        </div>
    );

};


