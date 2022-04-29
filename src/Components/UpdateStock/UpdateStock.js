import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateStock = () => {
    const { id } = useParams()
    return (
        <div>
            <h3>stock of: {id}</h3>
        </div>
    );
};

export default UpdateStock;