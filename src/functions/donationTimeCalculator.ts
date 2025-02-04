const donationTimeCalculator = (prevdate:string) => {
    const currentdate = new Date();
    const target = new Date(prevdate);
    const timeDifference = currentdate.getTime() - target.getTime();
    const days = Math.floor(timeDifference / (3600 * 24 * 1000));
    if (days >= 90) {
        return true;
    } else {
        return false;
    }
}

export default donationTimeCalculator;