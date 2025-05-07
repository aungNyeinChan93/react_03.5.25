import React from 'react';
import { Link } from 'react-router-dom';

const SingleList = ({ id, title, price, image, product }) => {
    return (
        <React.Fragment>
            <Link to={`/products/${id}`} className="block">
                <img
                    src={image}
                    className="h-40 w-100 rounded-tr-3xl rounded-bl-3xl object-cover sm:h-64 lg:h-72 "
                />

                <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                    <strong className="font-medium">{title}</strong>

                    <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500">{id} || </span>

                    <p className="mt-0.5 opacity-50 sm:mt-0">{price}</p>
                </div>
            </Link>
        </React.Fragment>
    );
};

export default SingleList;