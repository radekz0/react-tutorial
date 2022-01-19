import React from 'react';
import Accordion from './components/Accordion'

const items = [
    {
        title: 'item1 title',
        content: 'item1 content'
    },
    {
        title: 'item2 title',
        content: 'item2 content'
    },
    {
        title: 'item3 title',
        content: 'item3 content'
    },
];

const App  = () => {
    return(
        <Accordion items = {items}/>
    );
}

export default App;