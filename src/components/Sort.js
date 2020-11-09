import React from 'react'
import { Dropdown } from 'semantic-ui-react';
import "./Sort.css";

function Sort() {

    const reload = () => {
        window.location.reload();
    }
    const additem = (value) => {
        localStorage.setItem('sort', value)
        reload()
    }
    return (
        <div className="sort__sort">
            <Dropdown
                text='Sort'
                icon='filter'
                floating
                labeled
                button
                className='icon sort__btn'
            >
                <Dropdown.Menu>
                    <Dropdown.Header icon='tags' content='Sort by tag' />
                    <Dropdown.Divider />
                    <Dropdown.Item
                        onClick={() => { additem('recent') }}
                        text="Recent Added"
                    />
                    <Dropdown.Item
                        onClick={() => { additem('rating') }}
                        text="Rating"
                    />
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Sort
