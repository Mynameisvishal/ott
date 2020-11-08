// import React from 'react'
// import { Dropdown,Checkbox } from 'semantic-ui-react';
// import "./Filter.css";

// function Filter({ show,checkGenre }) {
    
//     return (
//         <Dropdown text='Sort by' pointing className={`link item ${show?"nav__visible":""}`}>
//             <Dropdown.Menu>
//                 <Dropdown.Header>Categories</Dropdown.Header>
//                 <Dropdown.Item>
//                     <Dropdown text='Genre'>
//                         <Dropdown.Menu>
//                             <Dropdown.Header onClick={() => { localStorage.removeItem('filter') }} >Genre</Dropdown.Header>
//                             <Dropdown.Item onClick={() => { checkGenre('Action Movies')}}>Action Movies</Dropdown.Item>
//                             <Dropdown.Item onClick={() => { localStorage.setItem('filter', 'Comedy Movies') }}>Comedy Movies</Dropdown.Item>
//                             <Dropdown.Item onClick={() => { localStorage.setItem('filter', 'Romantic Movies') }}>Romantic Movies</Dropdown.Item>
//                             <Dropdown.Item onClick={() => { localStorage.setItem('filter', 'Crime Movies') }}>Crime Movies</Dropdown.Item>
//                         </Dropdown.Menu>
//                     </Dropdown>
//                 </Dropdown.Item>
//                 <Dropdown.Item>
//                     <Dropdown text='Language'>
//                         <div>
                          
//                             <Checkbox label='English' />
//                             <Checkbox label='Hindi' />
//                             <Checkbox label='Tamil' />
//                         {/* <Dropdown.Item><Checkbox label='English' /></Dropdown.Item>
//                         <Dropdown.Item><Checkbox label='Hindi' /></Dropdown.Item>
//                         <Dropdown.Item><Checkbox label='Tamil' /></Dropdown.Item> */}
//                         </div>
//                     </Dropdown>
//                 </Dropdown.Item>
//             </Dropdown.Menu>
//         </Dropdown>
//     )
// }

// export default Filter

import React, { Component } from 'react'
import { Dropdown,Checkbox } from 'semantic-ui-react';
import "./Filter.css";

export class Filter extends Component {
    constructor(props) {
        super();
       
      }
    render() {
        const { show } = this.props;
        return (
            <Dropdown text='Sort by' pointing className={`link item ${show?"nav__visible":""}`}>
            <Dropdown.Menu>
                <Dropdown.Header>Categories</Dropdown.Header>
                <Dropdown.Item>
                    <Dropdown text='Genre'>
                        <Dropdown.Menu>
                            <Dropdown.Header onClick={() => { this.props.checkGenre('') }} >Genre</Dropdown.Header>
                            <Dropdown.Item onClick={() => { this.props.checkGenre('Action Movies')}}>Action Movies</Dropdown.Item>
                            <Dropdown.Item onClick={() => { this.props.checkGenre('Comedy Movies') }}>Comedy Movies</Dropdown.Item>
                            <Dropdown.Item onClick={() => { this.props.checkGenre('Romantic Movies') }}>Romantic Movies</Dropdown.Item>
                            <Dropdown.Item onClick={() => { this.props.checkGenre('Crime Movies') }}>Crime Movies</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Dropdown text='Language'>
                        <div>
                          
                            <Checkbox label='English' />
                            <Checkbox label='Hindi' />
                            <Checkbox label='Tamil' />
                        {/* <Dropdown.Item><Checkbox label='English' /></Dropdown.Item>
                        <Dropdown.Item><Checkbox label='Hindi' /></Dropdown.Item>
                        <Dropdown.Item><Checkbox label='Tamil' /></Dropdown.Item> */}
                        </div>
                    </Dropdown>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        )
    }
}

export default Filter
