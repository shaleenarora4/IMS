import React, { useState, useEffect } from 'react';
import Home from './Home';

function Category(props) {

    const [categoryData, setCategoryData] = useState([]);

    const getCategoryData=()=>{
        fetch('http://localhost:4000/categories/list').then(
            res => res.json()).then((data) => {
                setCategoryData(data.categories);
                // categoryData=data.categories;
            });
    }

    useEffect(() => {
       getCategoryData()
    },(''));

    return (
        <>
            <div className='category'>
                <table>
                    <thead>
                        <tr>
                            <th>{'Name'}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categoryData.map((data) => {
                            return (
                                <tr><td>{data.name}</td></tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}



export default Category;