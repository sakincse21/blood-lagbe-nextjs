function isValidBangladeshiNumber(phoneNumber: string) {
    const bdNumberPattern = /^(\+8801[3-9]\d{8})$/;
    return bdNumberPattern.test(phoneNumber);
}

export default isValidBangladeshiNumber