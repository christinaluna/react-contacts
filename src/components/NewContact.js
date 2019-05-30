import React from 'react';

const NewContact = props => {
    return (
        <div className="ui one column doubling stackable grid container">
            <div className="column">
                <div className="ui fluid input">
                    <input type="text" placeholder={props.firstname}/>
                </div>
                <div className="ui fluid input">
                    <input type="text" placeholder={props.lastname}/>
                </div>
                <div className="ui fluid input">
                    <input type="text" placeholder={props.phone}/>
                </div>
                <button className="ui active button">
                    <i className="plus icon"></i>
                    Add new contact
                </button>
            </div>
        </div>
    );
}

export default NewContact;