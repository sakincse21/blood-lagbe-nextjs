'use client';

import { useEffect, useState } from "react";
import allarea from '../../../../public/areas/allarea';
import bannerImg from '../../../../public/img/People-search-cuate.svg';
import Image from "next/image";
import DonorCard from "@/components/ui/DonorCard";

const FindBlood = () => {
    const fakedonor=[{"_id":"67591a91749fe6c514b40977","name":"Saleheen","age":"21","area":"South Jhiltuly","mobile":"+8801833410082","bloodGroup":"O+","email":"saleheen.sakin@gmail.com","date":["2024-09-18","2003-07-10"],"isDonor":true}];
    const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

    //all the states saved

    const [areas, setAreas] = useState([]);
    const [upazilas, setUpazilas] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedUpazilla, setSelectedUpazilla] = useState("");
    const [selectedBloodGroup, setSelectedBloodGroup] = useState("");
    const [donors, setDonors] = useState([]);
    useEffect(() => {
        setAreas(allarea.districts); //set the districts in areas array
    })
    // console.log(selectedDistrict);
    // console.log(selectedUpazilla);
    // console.log(selectedBloodGroup);

    //function to calculate the date from the donors info

    function dateCalculation(date: string) {
        // Parse the string date '2024-10-02'
        const targetDate: Date = new Date(date);
        // Get the current date
        const currentDate: Date = new Date();

        // Calculate the time difference in milliseconds
        const timeDifference: number = targetDate - currentDate;

        // Convert the difference from milliseconds to days
        const millisecondsPerDay = 1000 * 60 * 60 * 24;
        const daysDifference = Math.floor(timeDifference / millisecondsPerDay);



        // Output the difference
        return daysDifference;

    }

    //search button action
    const searchNow = async () => {
        let encodedBloodGroup = selectedBloodGroup;
        if (selectedBloodGroup === 'A+') encodedBloodGroup = 'A%2B';
        else if (selectedBloodGroup === 'B+') encodedBloodGroup = 'B%2B';
        else if (selectedBloodGroup === 'O+') encodedBloodGroup = 'O%2B';
        else if (selectedBloodGroup === 'AB+') encodedBloodGroup = 'AB%2B';
        // setBtnclick(true);

        const response = await fetch(`/api/public?district=${selectedDistrict}&upazilla=${selectedUpazilla}&bloodGroup=${encodedBloodGroup}`, { 
            method: 'GET',})
        const result = await response.json();
        console.log(result);
        
        
        if(result.success){
            setDonors(result.donorsList);
        }

        // await fetch(`/api/public`)
        //     .then(res => res.json())
        //     .then(data => {
        //         data.map(user => {
        //             console.log(Math.abs(dateCalculation(user.date[0])));

        //             if (Math.abs(dateCalculation(user.date[0])) > 90) {
        //                 temp.push(user);
        //             }
        //         })
        //         console.log(donors);
        //         setDonors(temp);
        //         // setBtnclick(true);
        //     })
    }


    return (
        <div className="h-full w-full flex flex-col content-center items-center">
            <div className="h-full w-full px-6 mx-auto flex flex-wrap flex-col justify-around lg:flex-row  pt-6 my-8">
                <div className='flex flex-col justify-center items-center gap-2 py-5'>

                    <div className="font-bold text-2xl text-slate-600 my-3">Lets search for a donor</div>
                    {/* dropdown menu for district selection */}

                    <div className="relative my-3 md:w-60  transition-all duration-300 ease-in-out">
                        <select
                            id="districtmenu"
                            name="districtmenu"
                            required
                            className="peer relative h-10 w-full appearance-none rounded border border-slate-200 bg-white px-4 text-lg text-slate-500 outline-none transition-all autofill:bg-white focus:border-gray-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            onChange={(event) => {
                                const selectedValue = event.target.value;
                                setSelectedUpazilla('');
                                setSelectedDistrict(selectedValue);
                                const selectedArea = areas.find((area) => area.name === selectedValue);
                                setUpazilas(selectedArea ? selectedArea.upazilas : []);
                            }}
                        >
                            <option defaultValue={""} selected disabled>Select</option>
                            {
                                areas.map((area, index) => (
                                    <option key={index} value={area.name}>{area.name}</option>
                                ))
                            }
                        </select>
                        <label
                            htmlFor="districtmenu"
                            className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-lg font-semibold text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                        >
                            Your District
                        </label>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-gray-500 peer-disabled:cursor-not-allowed"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-labelledby="districtmenu-title districtmenu-description"
                            role="graphics-symbol"
                        >
                            <title id="districtmenu-title">Arrow Icon</title>
                            <desc id="districtmenu-description">Arrow icon of the select list.</desc>
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>

                    {/* dropdown menu for upazilla selection */}

                    {
                        selectedDistrict &&
                        <div className="relative my-3 md:w-60  transition-all duration-300 ease-in-out">
                            <select
                                id="upazillamenu"
                                name="upazillamenu"
                                required
                                className="peer relative h-10 w-full appearance-none rounded border border-slate-200 bg-white px-4 text-lg text-slate-500 outline-none transition-all autofill:bg-white focus:border-gray-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                onChange={(event) => { event.preventDefault(); setSelectedUpazilla(event.target.value) }}
                            >
                                <option defaultValue={""} selected disabled>Select</option>
                                {
                                    upazilas?.map((area, index) => (
                                        <option key={index} value={area}>{area}</option>
                                    ))
                                }
                            </select>
                            <label
                                htmlFor="upazillamenu"
                                className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-lg font-semibold text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                            >
                                Your Upazilla
                            </label>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-gray-500 peer-disabled:cursor-not-allowed"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-labelledby="upazillamenu-title upazillamenu-description"
                                role="graphics-symbol"
                            >
                                <title id="upazillamenu-title">Arrow Icon</title>
                                <desc id="upazillamenu-description">Arrow icon of the select list.</desc>
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    }

                    {/* dropdown menu for the blood group selection */}

                    {
                        selectedUpazilla &&
                        <div className="relative my-3 md:w-60 transition-all duration-300 ease-in-out">
                            <select
                                id="bloodgroupmenu"
                                name="bloodgroupmenu"
                                required
                                className="peer relative h-10 w-full appearance-none rounded border border-slate-200 bg-white px-4 text-lg text-slate-500 outline-none transition-all autofill:bg-white focus:border-gray-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                onChange={(event) => { event.preventDefault(); setSelectedBloodGroup(event.target.value) }}
                            >
                                <option defaultValue={""} selected disabled>Select</option>
                                {
                                    bloodGroups?.map((bloodgroup, index) => (
                                        <option key={index} value={bloodgroup}>{bloodgroup}</option>
                                    ))
                                }
                            </select>
                            <label
                                htmlFor="bloodgroupmenu"
                                className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-lg font-semibold text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                            >
                                Your Blood Group
                            </label>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-gray-500 peer-disabled:cursor-not-allowed"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-labelledby="bloodgroupmenu-title bloodgroupmenu-description"
                                role="graphics-symbol"
                            >
                                <title id="bloodgroupmenu-title">Arrow Icon</title>
                                <desc id="bloodgroupmenu-description">Arrow icon of the select list.</desc>
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    }

                    {/* button to search users  */}

                    {
                        selectedUpazilla && selectedDistrict && selectedBloodGroup &&
                        <button onClick={searchNow} className="inline-flex items-center justify-center h-12 gap-2 px-6 text-lg font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-slate-500 hover:bg-[var(--blood-color)] focus:bg-[var(--blood-color)] focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300 disabled:shadow-none">
                            <span>Search Now</span>
                        </button>
                    }
                </div>
                <div className='flex flex-row items-center justify-center hidden md:block'>
                    <Image src={bannerImg} alt="banner" />
                </div>
            </div>
            {/* search result and the donors list viewed in donorcards */}
            <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
                {
                    donors?.map((donor, index) =>
                        (<DonorCard details={[donor.name, donor.upazilla, donor.district, donor.bloodGroup, donor.mobile, donor.lastDonationDate]} key={index} />)
                    )
                }
            </div>
        </div>
    )
}

export default FindBlood