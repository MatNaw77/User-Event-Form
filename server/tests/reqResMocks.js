const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

const mockRequest = ({firstName, secondName, email, date}) => {
    return {
        body: {
            firstName: firstName,
            secondName: secondName,
            email: email,
            date: date
        }
    };
};

export { mockResponse, mockRequest };