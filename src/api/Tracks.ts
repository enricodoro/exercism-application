import { TrackList } from './Interfaces';

function getTracks() : Promise<TrackList> {
    return fetch('https://exercism.org/api/v2/tracks')
    .then(res => res.json())
    .then(res => { 
        return res as TrackList;
    })
}

export { getTracks };
