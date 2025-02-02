'use client'

import { Calendar1Icon, DnaIcon, LocateIcon, PhoneIcon } from "lucide-react";
import '../../app/globals.css';

const DonorCard = (props: { details: [string, string, string, string, string, string] }) => {
    const [name, upazilla, district, bloodGroup, mobile, date] = props.details;
    return (
        <div className="flex flex-col flex-wrap rounded-2xl w-80 bg-[#ffffff] shadow-xl border-slate-200 border-2 hover:shadow-2xl">
            <div className="flex flex-col p-4">
                <div className="text-2xl font-bold   text-[#374151] pb-6">{name}</div>
                <div className=" text-lg   text-[#374151] flex flex-row items-start gap-3"><LocateIcon />{`${upazilla}, ${district}`}</div>
                <div className=" text-lg   text-[#374151] flex flex-row items-start gap-3"><DnaIcon />{bloodGroup}</div>
                <div className=" text-lg   text-[#374151] flex flex-row items-start gap-3"><PhoneIcon />{mobile}</div>
                <div className=" text-lg   text-[#374151] flex flex-row items-start gap-3"><Calendar1Icon />{date}</div>
                <div className="flex justify-end pt-6">
                    <button className="bg-[#c53f3f] text-[#ffffff] w-full font-bold text-base uppercase p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">Call Now</button>
                </div>
            </div>
        </div>
    )
}

export default DonorCard