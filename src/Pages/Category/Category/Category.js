
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';

const Category = () => {
    const news = useLoaderData();
    useTitle('Category');
    return (
        <div>
            <h2>This is category has news: {news.length}</h2>
        </div>
    );
};

export default Category;