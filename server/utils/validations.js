export const validateEmail = (email) => {
    const regex = /^$|.+@.+..+/;
    return regex.test(email);
}

export const validateDate = (date) => {
    const regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    return regex.test(date);
}