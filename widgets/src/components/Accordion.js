import React from 'react';

const Accordion = ( {items} ) => {
    const handleTitleClick = (index) => {
        console.log(index);
    };

    const renderedItems = items.map( (item, index) => {
        return (
            <div key={item.title}>
                <div className="title active" onClick={ () => handleTitleClick(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className="content active">
                    <p>{item.content}</p>
                </div>
            </div>
        );
    });
return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;