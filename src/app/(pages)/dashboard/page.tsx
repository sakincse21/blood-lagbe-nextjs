//donor dashboard page
'use client'
import Loader from '@/components/ui/Loader';
import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import allarea from '../../../../public/areas/allarea';
import isValidBangladeshiNumber from '@/functions/mobileCheck';
import donorCalendarCheck from '@/functions/donorCalendarCheck';

export default function Dashboard() {
    // states to hold and manage donor data
    const { user } = useUser();
    const [loader, setLoader] = useState(true);
    const [accepted, setAccepted] = useState(true);
    const areas = allarea.districts;
    const [upazilas, setUpazilas] = useState<string[]>([]);
    const [rejected, setRejected] = useState(true);
    const [counter, setCounter] = useState(0);
    const [userId, setUserId] = useState("");
    const [prevFormData, setPrevFormData] = useState({});
    const [formData, setFormData] = useState({
        userId: "",
        name: "",
        mobile: "",
        district: "",
        upazilla: "",
        bloodGroup: "B+",
        lastDonationDate: "",
    });

    // fetching user id from clerk 
    useEffect(() => {
        if (user?.id && userId !== user?.id) {
            setUserId(user.id);
        }
    }, [user?.id, userId]);

    useEffect(() => {
        setLoader(true);
        const fetchProfile = async () => {
            try {
                if (userId) {
                    const response = await fetch(`/api/checkdonor?userId=${userId}`, { method: "GET" });
                    const result = await response.json();

                    if (!result.success) {
                        //for new donors profile not found

                        console.warn("Profile not found. Initializing empty profile.");
                        setFormData({ userId, name: "", mobile: "", district: "", upazilla: "", bloodGroup: "B+", lastDonationDate: "" });
                        setPrevFormData({ userId, name: "", mobile: "", district: "", upazilla: "", bloodGroup: "B+", lastDonationDate: "" });
                    } else {
                        //for existing donors profile found

                        const donor = result.existingDonor;
                        const formattedDonor = {
                            ...donor,
                            lastDonationDate: donor.lastDonationDate ? new Date(donor.lastDonationDate).toISOString().split('T')[0] : '',
                        };

                        //sets the upazilla array based on district
                        const selectedArea = areas.find((area) => area.name === formattedDonor?.district);
                        setUpazilas(selectedArea ? selectedArea.upazilas : []);
                        setFormData(formattedDonor);
                        setPrevFormData(formattedDonor);

                        //calculate counter for next donation date
                        const now = new Date();
                        const target = new Date(donor?.lastDonationDate);
                        const difference = now.getTime() - target.getTime();
                        const days = Math.floor(Math.abs(difference) / (3600 * 24 * 1000));
                        setCounter((90 - days) < 0 ? 0 : (90 - days));
                    }
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
            setLoader(false);
        };

        if (userId) fetchProfile();
    }, [userId, areas]);

    //handles changes for input fields
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "lastDonationDate" ? (value ? new Date(value).toISOString().split('T')[0] : "") : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        setAccepted(true);
        setRejected(true);
        e.preventDefault();
        setLoader(true);
        try {
            const response = await fetch("/api/donors", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const result = await response.json();

            if (result.success) {
                setAccepted(false);
                setPrevFormData(formData); // Update previous data after successful save
            } else {
                setRejected(false);
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred.");
        }
        setLoader(false);
    };

    // Check if formData has changed to avoid unnecessary API calls
    const isDataChanged = JSON.stringify(formData) !== JSON.stringify(prevFormData);

    return (
        <>
            {loader && <div className="min-h-full min-w-screen flex flex-col items-center justify-center rounded lg:rounded-lg">
                <Loader loader={loader} />
            </div>
            }
            {!loader && (
                <div className="min-h-screen h-auto bg-base-200 rounded lg:rounded-lg p-4">
                    {/* Success profile update */}
                    {!accepted && (
                        <div role="alert" className="alert alert-success flex flex-row items-center justify-between my-5">
                            <span>Profile updated successfully!</span>
                            <button className="btn btn-ghost" onClick={() => setAccepted(true)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 shrink-0 stroke-current"
                                    fill="none"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>
                    )}

                    {/* Error in upading profile */}
                    {!rejected && (
                        <div role="alert" className="alert alert-error flex flex-row items-center justify-between my-5">
                            <span>Something went wrong!</span>
                            <button className="btn btn-ghost" onClick={() => setRejected(true)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 shrink-0 stroke-current"
                                    fill="none"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>
                    )}

                    {/* Dashboard content starts */}
                    <main className="container mx-auto p-4 md:p-8">
                        <div className="max-w-3xl mx-auto">
                            <h1 className="text-3xl font-bold mb-8">Donor Dashboard</h1>

                            {/* Next Donation Counter */}
                            <div className='card p-6 flex flex-col items-center gap-5 text-center auto-cols-max'>
                                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                    <span className="countdown text-5xl p-3">{counter}</span>
                                    days
                                </div>
                                <div className="text-content">
                                    <span className="countdown text-2xl">until next donation</span>
                                </div>
                            </div>

                            {/* Profile Form */}
                            <form onSubmit={handleSubmit} className="card bg-base-100 shadow-sm">
                                <div className="card-body">
                                    <h2 className="text-lg font-semibold mb-6">Personal Information</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="form-control">
                                            <label className="label">Full Name</label>
                                            <input type="text" className="input input-bordered" name="name" value={formData.name} onChange={handleChange} placeholder='John Doe' />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">Mobile Number</label>
                                            <input type="tel" className="input input-bordered" name="mobile" value={formData.mobile} onChange={handleChange} placeholder='+8801XXXXXXXXX' />
                                            {
                                                //checkes if valid bangladeshi number
                                                !isValidBangladeshiNumber(formData.mobile) &&
                                                <div className="text-error">Please enter a valid format.</div>
                                            }
                                        </div>

                                        <div className="form-control">
                                            <label className="label">District</label>
                                            <select
                                                id="district"
                                                name="district"
                                                required
                                                className="select w-full max-w-xs select-bordered"
                                                onChange={(event) => {
                                                    handleChange(event);
                                                    const selectedValue = event.target.value;
                                                    const selectedArea = areas.find((area) => area.name === selectedValue);
                                                    setUpazilas(selectedArea ? selectedArea.upazilas : []);
                                                }}
                                            >
                                                <option defaultValue={formData.district} selected disabled>{formData?.district || 'Your District'}</option>
                                                {
                                                    areas.map((area, index) => (
                                                        <option key={index} value={area.name}>{area.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>

                                        <div className="form-control">
                                            <label className="label">Upazilla</label>
                                            <select
                                                id="upazilla"
                                                name="upazilla"
                                                required
                                                className="select w-full max-w-xs select-bordered"
                                                onChange={(event) => { event.preventDefault(); handleChange(event); }}
                                            >
                                                <option defaultValue={formData.upazilla} selected disabled>{formData?.upazilla || 'Your Upazilla'}</option>
                                                {
                                                    upazilas?.map((area, index) => (
                                                        <option key={index} value={area}>{area}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>

                                        <div className="form-control">
                                            <label className="label">Blood Group</label>
                                            <select className="select select-bordered" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}>
                                                <option>A+</option>
                                                <option>A-</option>
                                                <option>B+</option>
                                                <option>B-</option>
                                                <option>AB+</option>
                                                <option>AB-</option>
                                                <option>O+</option>
                                                <option>O-</option>
                                            </select>
                                        </div>

                                        <div className="form-control">
                                            <label className="label">Last Donation Date</label>
                                            <input type="date" className="input input-bordered" name="lastDonationDate" value={formData.lastDonationDate} onChange={handleChange} />
                                            {
                                                //checks if future date is not selected
                                                !donorCalendarCheck(formData?.lastDonationDate) && <div className="text-error">Please enter a valid date.</div>
                                            }
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <button
                                            type="submit"
                                            className="btn bg-[var(--blood-color)] text-white w-full md:w-auto"
                                            disabled={!(isDataChanged && isValidBangladeshiNumber(formData?.mobile) && donorCalendarCheck(formData?.lastDonationDate) && formData?.name && formData?.district && formData?.upazilla && formData?.bloodGroup && formData?.lastDonationDate)}
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            )}
        </>
    );
}
