'use client';

import { useEffect, useState } from "react";
import allarea from '../../../../public/areas/allarea';
import bannerImg from '../../../../public/img/People-search-cuate.svg';
import Image from "next/image";

const FindBlood = () => {
    const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

    const [areas, setAreas] = useState([]);
    const [upazilas, setUpazilas] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedUpazilla, setSelectedUpazilla] = useState("");
    const [selectedBloodGroup, setSelectedBloodGroup] = useState("");
    useEffect(() => {
        setAreas(allarea.districts);
        console.log(allarea);
    })
    console.log(selectedDistrict);
    console.log(selectedUpazilla);
    console.log(selectedBloodGroup);


    return (
        <div className="h-full w-full px-6 mx-auto flex flex-wrap flex-col justify-around lg:flex-row  pt-6 my-8">
            <div className='flex flex-col justify-center items-center gap-2 py-5'>

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
                    <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-lg font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-slate-500 hover:bg-[var(--blood-color)] focus:bg-[var(--blood-color)] focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300 disabled:shadow-none">
                        <span>Search Now</span>
                    </button>
                }
            </div>
            <div className='flex flex-row items-center justify-center'>
                <Image src={bannerImg} alt="banner" />
            </div>
        </div>
    )
}

export default FindBlood