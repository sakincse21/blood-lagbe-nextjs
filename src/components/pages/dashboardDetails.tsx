'use client'
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function DashboardDetails() {
    const { user } = useUser();
    const [userId, setUserId] = useState("");
    const [formData, setFormData] = useState({
        userId: "",
        name: "",
        mobile: "",
        district: "",
        upazilla: "",
        bloodGroup: "B+",  // Default to one blood group
        lastDonationDate: "",  // Initialize with an empty string
    });

    useEffect(() => {
        if (user?.id && userId !== user?.id) {
            setUserId(user.id);
        }
    }, [user?.id]);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                if (userId) {
                    const response = await fetch(`/api/checkdonor?userId=${userId}`, {
                        method: "GET",
                    });
                    const result = await response.json();

                    if (result.success === false) {
                        console.warn("Profile not found. Initializing empty profile.");
                        setFormData({
                            userId: userId,
                            name: "",
                            mobile: "",
                            district: "",
                            upazilla: "",
                            bloodGroup: "B+",  // Default blood group
                            lastDonationDate: '',  // Initialize with an empty string
                        });
                    } else {
                        // Set the fetched data, ensure lastDonationDate is properly formatted
                        const donor = result.existingDonor;
                        setFormData({
                            ...donor,
                            lastDonationDate: donor.lastDonationDate ? new Date(donor.lastDonationDate).toISOString().split('T')[0] : '',
                        });
                    }
                } else {
                    setFormData({
                        userId: userId,
                        name: "",
                        mobile: "",
                        district: "",
                        upazilla: "",
                        bloodGroup: "B+",  // Default blood group
                        lastDonationDate: '',  // Initialize with an empty string
                    });
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        };

        if (userId) {
            fetchProfile();
        }
    }, [userId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: name === "lastDonationDate" ? (value ? new Date(value).toISOString().split('T')[0] : "") : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/donors", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const result = await response.json();

            if (result.success) {
                alert("Profile updated successfully!");
            } else {
                alert("Failed to update profile.");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData?.name || ""}
                onChange={handleChange}
            />
            <input
                type="text"
                name="mobile"
                placeholder="Phone Number"
                value={formData?.mobile || ""}
                onChange={handleChange}
            />
            <input
                type="text"
                name="district"
                placeholder="District"
                value={formData?.district || ""}
                onChange={handleChange}
            />
            <input
                type="text"
                name="upazilla"
                placeholder="Upazilla"
                value={formData?.upazilla || ""}
                onChange={handleChange}
            />
            <select
                name="bloodGroup"
                value={formData?.bloodGroup || ""}
                onChange={handleChange}
            >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
            </select>
            <input
                type="date"
                name="lastDonationDate"
                value={formData?.lastDonationDate || ""}
                onChange={handleChange}
            />
            <button type="submit">Save Profile</button>
        </form>
    );
}
