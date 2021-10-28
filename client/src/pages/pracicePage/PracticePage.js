import React from 'react';

function PracticePage(props) {
    // 백엔드에서 movies 라느 ㄴ정보를줌
    const movies = [
        {title: "독전", desc: "독전에대한설명"},
        {title: "보이스", desc: "독전에대한설명"},
        {title: "독전", desc: "독전에대한설명"},
        {title: "독전", desc: "독전에대한설명"},
        {title: "독전", desc: "독전에대한설명"},
        {title: "독전", desc: "독전에대한설명"},
        {title: "독전", desc: "독전에대한설명"},
        {title: "독전", desc: "독전에대한설명"},
        {title: "독전", desc: "독전에대한설명"},
        {title: "독전", desc: "독전에대한설명"},
        {title: "독전", desc: "독전에대한설명"},
    ]
    //백엔드 다만들었음
    return (
        <div>
            {movies.map(item => (
                <div>{item.title}</div>
            ))}
        </div>

    );
}

export default PracticePage;