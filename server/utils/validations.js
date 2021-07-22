export const validateEmail = (email) => {
    const regex = /^$|.+@.+..+/;
    return regex.test(email);
}

export const validateDate = (date) => {
    const regex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
    return regex.test(date);
}