import { URL } from '../constants/urls'

const generateFetchOptions = (data) => {
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

    return options;
}

const sendFrom = async (data, setLoading, setResult) => {
    try {
        let options = generateFetchOptions(data);
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
                return false;
            })
    } catch (error) {
        return false;
    }
}

export { sendFrom };