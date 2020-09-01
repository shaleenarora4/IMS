import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function Sidebar(props){
    const updateActivity=props.updateActivity;
    const [categoryDisplayStatus, setCategoryDisplayStatus] = useState('hide');
    const [subcategoryDisplayStatus, setSubcategoryDisplayStatus] = useState('hide');
    const [productDisplayStatus, setProductDisplayStatus] = useState('hide');

    const displayChange = (optionSelected) => {
        switch (optionSelected) {
            case 'category': categoryDisplayStatus === 'hide' ? setCategoryDisplayStatus('show') :
                setCategoryDisplayStatus('hide');
                break;
            case 'subcategory': subcategoryDisplayStatus === 'hide' ? setSubcategoryDisplayStatus('show') :
                setSubcategoryDisplayStatus('hide');
                break;
            case 'product': productDisplayStatus === 'hide' ? setProductDisplayStatus('show') :
                setProductDisplayStatus('hide');
                break;
        }
    }

    return (
        <div>
            <div class="sidebar categories-dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button"  onClick={() => displayChange('category')}>Categories
            <span class="caret"></span></button>
                <ul class={categoryDisplayStatus}>
                    <li><a href="#" onClick={()=>updateActivity('categories/view')}>View</a></li>
                    <li><a href="#" onClick={()=>updateActivity('categories/create')}>Add</a></li>
                    <li><a href="#" onClick={()=>updateActivity('categories/update')}>Update</a></li>
                    <li><a href="#" onClick={()=>updateActivity('categories/delete')}>Delete</a></li>
                </ul>
            </div>
            <div class="sidebar subcategores-dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" onClick={() => displayChange('subcategory')}>Subategories
            <span class="caret"></span></button>
                <ul class={subcategoryDisplayStatus}>
                    <li><a href="#">HTML</a></li>
                    <li><a href="#">CSS</a></li>
                    <li><a href="#">JavaScript</a></li>
                </ul>
            </div>
            <div class="sidebar products-dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" onClick={() => displayChange('product')}>Products
            <span class="caret"></span></button>
                <ul class={productDisplayStatus}>
                    <li><a href="#">HTML</a></li>
                    <li><a href="#">CSS</a></li>
                    <li><a href="#">JavaScript</a></li>
                </ul>
            </div>
        </div>
    );

}

export default Sidebar;