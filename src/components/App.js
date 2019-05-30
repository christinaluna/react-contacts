import React from 'react';
import ContactCard from './ContactCard';
import NewContact from './NewContact';

class App extends React.Component {
    state = {firstname: 'John', lastname: 'Doe', phone: '123-456-7891'};

    render(){
        return (
            <div className="ui container">
                <div className="ui two column doubling stackable grid container">
                    <div className="column">
                        <div className="ui segment">
                        <h1>Contact List</h1>
                            <NewContact
                                firstname={this.state.firstname}
                                lastname={this.state.lastname}
                                phone={this.state.phone}
                            />
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui middle aligned divided list">
                            <ContactCard
                                firstname={this.state.firstname}
                                lastname={this.state.lastname}
                                phone={this.state.phone} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    } 
}

export default App;