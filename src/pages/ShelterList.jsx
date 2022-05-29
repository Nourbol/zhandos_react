import React, { Component } from 'react';
import ShelterPreview from 'components/ShelterPreview/ShelterPreview';
import { renderWithRequest } from 'services/renderService';
import { sendGetRequest } from 'services/htttpRequestSendingService';

class ShelterList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            shelters: [],
        };
    }

    componentDidMount() {
      const url = 'http://web.test/api/shelter_infos';
      sendGetRequest(url, 
        response => {
          this.setState({
            isLoaded: true,
            shelters: response.data.data
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        })
    }

    render() {
        const { error, isLoaded } = this.state;
        return renderWithRequest(error, isLoaded, this.getShelterList());
    }

    getShelterList() {
      const shelters = this.state.shelters;
      return (
        <>
          {shelters.map(shelter => (
            <ShelterPreview key={shelter.shelter_id} shelter={shelter} />
          ))}
        </>
      );
    }
}
 
export default ShelterList;