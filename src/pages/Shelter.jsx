import React, { Component } from 'react';
import { sendGetRequest } from 'services/htttpRequestSendingService';
import { renderWithRequest } from 'services/renderService';

class Shelter extends Component {
    state = { 
        isLoaded: false,
        error: null,
        shelter: {
            title: '',
            image_url: '',
            details: '',
            address: '',
            phone: ''
        }
    } 

    getShelterIdFromPath() {
        const shelterId = window.location.pathname.split('/')[2];
        return shelterId;
    }

    componentDidMount() {
        const url = 'http://web.test/api/shelters/' + this.getShelterIdFromPath() + '/info';
        sendGetRequest(url,
            response => this.setState({
                isLoaded: true,
                shelter: Object.assign({}, response.data.data)
            }),
            error => this.setState({
                isLoaded: true,
                error
            }))
    }

    getSidebar(shelter) {
        return (
            <div className="col-lg-4">
                <article className="card mb-4">
                    <div className="card-body text-center">
                        <img src={shelter.image_url} alt="avatar" className="rounded-circle img-fluid" style={{width: "150px"}}/>
                        <h5 className="my-3 text-info">{shelter.title}</h5>
                        <p className="text-muted mb-4">{shelter.details}</p>
                    </div>
                </article>
            </div>
        );
    }

    getProfile() {
        const shelter = {...this.state.shelter};
        return (
            <section className="row">
                {this.getSidebar(shelter)}
                {this.getCard(shelter)}
            </section>
        );
    }

    getField(name, value) {
        return (
            <div className="row">
                <div className="col-sm-3">
                    <p className="mb-0 text-info">{name}</p>
                </div>
                <div className="col-sm-9">
                    <p className="text-muted mb-0">{value}</p>
                </div>
            </div>
        );
    }

    getCard(shelter) {
        return (
            <section className="col-lg-8">
                <div className="card mb-4">
                    <div className="card-body">
                        {this.getField('Title', shelter.title)}
                    <hr />
                        {this.getField('Address', shelter.address)}
                    <hr />
                        {this.getField('Phone number', shelter.phone)}
                    </div>
                </div>
            </section>
        );
    }

    render() { 
        const { error, isLoaded } = this.state;
        return renderWithRequest(error, isLoaded, this.getProfile());
    }
}
 
export default Shelter;