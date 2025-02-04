import React from 'react'
import DateCard from './DateCard';

const DashboardCounter = (props: { counter: number, date: string }) => {
    const date = props.date;
    const counter = props.counter
    return (

        counter === 0 ?


            <div role="alert" className="alert my-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-info h-6 w-6 shrink-0">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className='text-lg'>You can donate now!!!</span>
            </div>
            :

            <div className='card p-6 pt-0 flex flex-col items-center gap-3 text-center auto-cols-max'>
                    <p className='text-lg'>Your next donation date</p>
                    <div className="flex justify-center items-center ">
                        <DateCard date={new Date(date)} /> {/* Pass any date */}
                    </div>
            </div>


    )
}

export default DashboardCounter