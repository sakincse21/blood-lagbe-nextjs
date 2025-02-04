const donationTimeCounter = (prevdate:string) => {
    const currentdate = new Date();
    const target = new Date(prevdate);
    const timeDifference = currentdate.getTime() - target.getTime();
    const days = Math.floor(timeDifference / (3600 * 24 * 1000));
    return (90 - days) < 0 ? 0 : (90 - days);
}

export default donationTimeCounter;