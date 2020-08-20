import React from 'react';
import { useParams } from 'react-router-dom';

export default function UserDetail(){
    const params = useParams()

    return(
        <div>User Detail {params.id}</div>
    )
}