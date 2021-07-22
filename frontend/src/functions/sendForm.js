import { URL } from '../constants/urls'

const sendFrom = (data, setLoading, setResult) => {
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

    fetch(`${URL}/api/event`, options)
        .then((res) => res.json())
        .then((res) => {
            if (res.msg === 'OK'){
                setLoading(false);
                setResult(3);
                return true;
            } else {
                setLoading(false);
                setResult(2);
                return false;
            }
        })
        .catch((error) => {
            setResult(2);
            setLoading(false);
        })
}

export { sendFrom };