import React from 'react';

export default function SearchBox({ onChangeQuery }) {
    return (
        <div className='search-input'>
            <input
                type="text"
                defaultValue={""}
                onChange={e => {
                    onChangeQuery(e);
                }}
                placeholder="Search movie by name"
            />
        </div>
    );
}