import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const options = [
    {
        label: 'color red',
        value: 'red'
    },
    {
        label: 'color green',
        value: 'green'
    },
    {
        label: 'color blue',
        value: 'blue'
    }
];
const items = [
    {
        title: 'what is react?',
        content: 'description 1'
    },
    {
        title: 'why use react?',
        content: 'description 2'
    },
    {
        title: 'how do you use react?',
        content: 'description 3'
    }
];

const showAccordion = () => {
    if (window.location.pathname === '/') {
        return (
            <Accordion items={items} />
        );
    }
}

const showDropdown = () => {
    if (window.location.pathname === '/dropdown') {
        return (
            <Dropdown />
        );
    }
}

const showList = () => {
    if (window.location.pathname === '/list') {
        return (
            <Search />
        );
    }
}
const showTranslate = () => {
    if (window.location.pathname === '/translate') {
        return (
            <Translate />
        );
    }
}

export default () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Select a Color"
                    options={options}
                    selected={selected}
                    onSelectedChange = {setSelected}

                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};

