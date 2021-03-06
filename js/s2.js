mapboxgl.accessToken = "pk.eyJ1IjoiaGplaW9ueW5nIiwiYSI6ImNremt3NnFlaTRyNW4yeHByaHI5cTlqaGEifQ.XJY81iNB9TtDsdC1es__UA";

const map = new mapboxgl.Map({
    container: 'coronamap', // id
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 1 // starting zoom

});
map.scrollZoom.disable();

// let hoveredStateId = null;
// map.on('load', () => {

//     map.addSource('states', {
//         'type': 'geojson',
//         'data': 'https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson'
//     });
     
//     // The feature-state dependent fill-opacity expression will render the hover effect
//     // when a feature's hover state is set to true.
//     map.addLayer({
//         'id': 'state-fills',
//         'type': 'fill',
//         'source': 'states',
//         'layout': {},
//         'paint': {
//         'fill-color': '#627BC1',
//         'fill-opacity': [
//             'case',
//             ['boolean', ['feature-state', 'hover'], false],
//             1,
//             0.5
//         ]
//         }
//     });
     
//     map.addLayer({
//         'id': 'state-borders',
//         'type': 'line',
//         'source': 'states',
//         'layout': {},
//         'paint': {
//             'line-color': '#627BC1',
//             'line-width': 2
//         }
//     });
     
//     // When the user moves their mouse over the state-fill layer, we'll update the
//     // feature state for the feature under the mouse.
//     map.on('mousemove', 'state-fills', (e) => {
//         if (e.features.length > 0) {
//             if (hoveredStateId !== null) {
//                 map.setFeatureState(
//                     { source: 'states', id: hoveredStateId },
//                     { hover: false }
//                 );
//             }
//             hoveredStateId = e.features[0].id;
//             map.setFeatureState(
//                 { source: 'states', id: hoveredStateId },
//                 { hover: true }
//             );
//         }
//     });
     
//     // When the mouse leaves the state-fill layer, update the feature state of the
//     // previously hovered feature.
//     map.on('mouseleave', 'state-fills', () => {
//         if (hoveredStateId !== null) {
//             map.setFeatureState(
//                 { source: 'states', id: hoveredStateId },
//                 { hover: false }
//             );
//         }
//         hoveredStateId = null;
//         });
//     });

