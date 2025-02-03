const donorCalendarCheck = (prevdate:string) => {
    const currentdate = new Date();
    const timeDifference = currentdate - new Date(prevdate);
    const days = Math.floor(timeDifference / (3600 * 24 * 1000));
    if (days < 0) {
        return false;
    } else {
        return true;
    }
}

export default donorCalendarCheck;