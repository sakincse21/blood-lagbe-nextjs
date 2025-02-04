const donorCalendarCheck = (prevdate:string) => {
    const currentdate = new Date();
    const targerdate = new Date(prevdate);
    const timeDifference = currentdate.getTime() - targerdate.getTime();
    const days = Math.floor(timeDifference / (3600 * 24 * 1000));
    if (days < 0) {
        return false;
    } else {
        return true;
    }
}

export default donorCalendarCheck;
