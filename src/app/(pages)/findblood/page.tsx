//page to search available donors

'use client';

import { useState } from "react";
import allarea from '../../../../public/areas/allarea';
import bannerImg from '../../../../public/img/People-search-cuate.svg';
import Image from "next/image";
import DonorCard from "@/components/ui/DonorCard";
import Loader from "@/components/ui/Loader";
import donationTimeCalculator from "@/functions/donationTimeCalculator";

interface Donor {
    _id?: string;
    name: string;
    upazilla: string;
    district: string;
    bloodGroup: string;
    mobile: string;
    lastDonationDate: string;
}

const FindBlood = () => {
    // const fakedonor = [{ "_id": "67591a91749fe6c514b40977", "name": "Saleheen", "age": "21", "area": "South Jhiltuly", "mobile": "+8801833410082", "bloodGroup": "O+", "email": "saleheen.sakin@gmail.com", "date": ["2024-09-18", "2003-07-10"], "isDonor": true }];
    const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

    const areas=allarea.districts;
    const [upazilas, setUpazilas] = useState<string[]>([]);
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedUpazilla, setSelectedUpazilla] = useState("");
    const [selectedBloodGroup, setSelectedBloodGroup] = useState("");
    const [donors, setDonors] = useState<Donor[]>([]);
    const [loader, setLoader] = useState(false);
    
    const searchNow = async () => {
        setLoader(true);
        //encoding the blood group for url
        let encodedBloodGroup = selectedBloodGroup;
        if (selectedBloodGroup === 'A+') encodedBloodGroup = 'A%2B';
        else if (selectedBloodGroup === 'B+') encodedBloodGroup = 'B%2B';
        else if (selectedBloodGroup === 'O+') encodedBloodGroup = 'O%2B';
        else if (selectedBloodGroup === 'AB+') encodedBloodGroup = 'AB%2B';

        const response = await fetch(`/api/public?district=${selectedDistrict}&upazilla=${selectedUpazilla}&bloodGroup=${encodedBloodGroup}`, {
            method: 'GET',
        })
        const result = await response.json();
        console.log(result);


        if (result.success) {
            setDonors(result.donorsList);
        }
        setLoader(false);
    }


    return (
        <div className="min-h-full w-full flex flex-col content-center items-center my-5">
            <div className="h-full w-full px-6 mx-auto flex flex-col-reverse flex-wrap justify-around lg:flex-row  pt-6 my-8 animate-in fade-in  ">
                <div className='flex flex-col justify-center items-center gap-2 py-5'>

                    <div className="font-bold text-2xl  my-3">Search for donors</div>
                    {/* dropdown menu for district selection */}

                    <div className="relative my-3 md:w-60  animate-in fade-in  ">
                        <select
                            id="districtmenu"
                            name="districtmenu"
                            required
                            className="select w-full max-w-xs"
                            onChange={(event) => {
                                const selectedValue = event.target.value;
                                setSelectedUpazilla('');
                                setSelectedDistrict(selectedValue);
                                const selectedArea = areas.find((area) => area.name === selectedValue);
                                setUpazilas(selectedArea ? selectedArea.upazilas : []);
                            }}
                        >
                            <option defaultValue={""} selected disabled>Your District</option>
                            {
                                areas.map((area, index) => (
                                    <option key={index} value={area.name}>{area.name}</option>
                                ))
                            }
                        </select>
                    </div>

                    {/* dropdown menu for upazilla selection */}

                    {
                        selectedDistrict &&
                        <div className="relative my-3 md:w-60  animate-in fade-in  ">
                            <select
                                id="upazillamenu"
                                name="upazillamenu"
                                required
                                className="select w-full max-w-xs"
                                onChange={(event) => { event.preventDefault(); setSelectedUpazilla(event.target.value) }}
                            >
                                <option defaultValue={""} selected disabled>Your Upazilla</option>
                                {
                                    upazilas?.map((area, index) => (
                                        <option key={index} value={area}>{area}</option>
                                    ))
                                }
                            </select>
                        </div>
                    }

                    {/* dropdown menu for the blood group selection */}

                    {
                        selectedUpazilla &&
                        <div className="relative my-3 md:w-60 animate-in fade-in  ">
                            <select
                                id="bloodgroupmenu"
                                name="bloodgroupmenu"
                                required
                                className="select w-full max-w-xs"
                                onChange={(event) => { event.preventDefault(); setSelectedBloodGroup(event.target.value) }}
                            >
                                <option defaultValue={""} selected disabled>Your Blood Group</option>
                                {
                                    bloodGroups?.map((bloodgroup, index) => (
                                        <option key={index} value={bloodgroup}>{bloodgroup}</option>
                                    ))
                                }
                            </select>
                        </div>
                    }

                    {/* button to search users  */}

                    {
                        selectedUpazilla && selectedDistrict && selectedBloodGroup &&
                        <button onClick={searchNow} className="btn btn-md md:btn-md lg:btn-lg bg-[var(--blood-color)] text-white hover:bg-[var(--blood-color-hover)] animate-in fade-in  " >
                            <span>Search Now</span>
                        </button>
                    }
                </div>
                <div className='flex flex-col justify-center items-center animate-in fade-in  '>
                    <div className='my-auto'>

                    <Image src={bannerImg} alt="banner" />
                    </div>
                </div>
            </div>
            {/* search result and the donors list viewed in donorcards */}
            
            <div className="flex flex-row flex-wrap gap-4 justify-center items-center my-5 pb-5 h-full w-full animate-in fade-in  ">
                { (loader) && <Loader loader={loader} /> }
                { (!loader) &&
                    donors?.map((donor, index) =>
                        (donationTimeCalculator(donor?.lastDonationDate)) && <DonorCard details={[donor.name, donor.upazilla, donor.district, donor.bloodGroup, donor.mobile, donor.lastDonationDate]} key={index} />
                    )
                }
            </div>
        </div>
    )
}

export default FindBlood