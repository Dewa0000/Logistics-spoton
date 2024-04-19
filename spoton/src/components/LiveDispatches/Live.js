import React from "react";
import "./Live.css";
import { useParams } from "react-router-dom";
import useFetch from "../Fetch/Fetch";
const Live = () => {

    const { id } = useParams();
    const {value,loading,error} = useFetch("http://localhost:3000/delivery_centers/" + id);

    return (
        <>
        hi - {id}
        { loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {value && (value.map(shipments => <article key={shipments.id}>
            <h2>{shipments.name}</h2>
        </article>)) }
        </>
    )
}

export default Live;