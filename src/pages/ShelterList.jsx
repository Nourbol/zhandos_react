import React, { Component } from 'react';
import axios from 'axios';
import ShelterPreview from 'components/ShelterPreview/ShelterPreview';

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
      axios({
        method: 'get',
        url: 'http://web.test/api/shelter_infos'
      })
        .then(response => {
          this.setState({
            isLoaded: true,
            shelters: response.data.data
          });
        })
        .catch((error) => {
          this.setState({
            isLoaded: true,
            error
          });
        })
    }

    render() {
        const { error, isLoaded } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return this.getShelterList();
        }
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