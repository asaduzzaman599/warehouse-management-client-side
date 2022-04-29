import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({ title, children }) => {
    return (
        <>
            <Helmet>
                <title>{title} - StoreHouse</title>
            </Helmet>
            {children}
        </>
    );
};

export default PageTitle;