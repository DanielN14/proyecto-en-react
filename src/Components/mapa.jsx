import React, { Fragment, useRef, useEffect, useState } from 'react';

import * as mapboxgl from 'mapbox-gl';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

function Mapa() {
    mapboxgl.workerClass = MapboxWorker;
    mapboxgl.accessToken = 'pk.eyJ1IjoiamQxMjEzMTQiLCJhIjoiY2ttZ3MyMDk3MDBkazJ5cXV5a3pnaGw5ZSJ9.6yzh6UvZt7vYwf2W1eDW4g';

    const mapContainer = useRef();
    // eslint-disable-next-line
    const [lng, setLng] = useState(-73.880224);
    // eslint-disable-next-line
    const [lat, setLat] = useState(40.645037);
    // eslint-disable-next-line
    const [zoom, setZoom] = useState(11);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
        map.addControl(new mapboxgl.NavigationControl());
        map.addControl(new mapboxgl.FullscreenControl());
        return () => map.remove();
    });

    return (
        <Fragment>
            <div id="map" ref={mapContainer}></div>
        </Fragment>
    );
}

export default Mapa;
