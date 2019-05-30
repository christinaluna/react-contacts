import React from 'react';
import faker from 'faker';

const ContactCard = props => {
    return (
        <div className="item">
            <div className="right floated content">
            <div className="ui button">Delete</div>
            </div>
            <img className="ui avatar image" alt={props.firstname} src={faker.image.avatar()} />
            <div className="content">
                {props.firstname} {props.lastname}
            </div>
            <div className="content">
                {props.phone}
            </div>
        </div>
    );
}

export default ContactCard;