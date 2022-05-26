import React from 'react';

function ShelterPreview(props) {
    const shelter = {...props.shelter};
    return ( 
        <div>
            <a href={'/shelters/' + shelter.id} className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
            <img src={shelter.image_url} alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0"/>
            <div className="d-flex gap-2 w-100 justify-content-between">
                <div>
                    <h6 className="mb-0">{shelter.title}</h6>
                    <p className="mb-0 opacity-75">{shelter.details}</p>
                    <p className="mb-0 opacity-75"><b>Phone number:</b> {shelter.phone}</p>
                    <p className="mb-0 opacity-75"><b>Address:</b> {shelter.address}</p>
                </div>
            </div>
            </a>
        </div>
     );
}

export default ShelterPreview;