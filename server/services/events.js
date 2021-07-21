import { constants } from '../constants/constants.js';
import { postEvent } from '../database/events/events.js';

export default async function addNewEvent ({ database, firstName, secondName, email, date})  {
    try {
        let eventData = [
            firstName, 
            secondName, 
            email, 
            date
        ];
        
        return await postEvent(database, eventData);
    } catch (e) {
        console.log(e);
        return constants.ERROR;
    }
}