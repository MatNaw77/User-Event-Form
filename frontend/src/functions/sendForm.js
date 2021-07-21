import { URL } from '../constants/urls'

const sendFrom = (data, setLoading) => {
    let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            firstName: data.firstName,
            secondName: data.secondName,
            email: data.email,
            date: data.date,
        })
    };

    fetch(`${URL}/api/events/add`, options)
        .then((res) => res.json())
        .then((res) => {
            if (res.msg === 'OK'){
                setLoading(false);
                return true;
            } else {
                setLoading(false);
                return false;
            }
        })
}

export { sendFrom };