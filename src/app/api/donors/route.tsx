//route to create new donor or update existing donor

import { connect } from "@/dbConfig/dbConfig";
import donor from "@/models/userModel";
import {NextRequest, NextResponse} from 'next/server';

connect();

export async function POST(request: NextRequest) {
    try{
        const reqBody = await request.json();
        const {userId, name, district, upazilla, bloodGroup, mobile, lastDonationDate} = reqBody;
        console.log(reqBody);

        const existingDonor = await donor.findOne({userId});

        if(existingDonor){
            const updatedDonor = await donor.updateOne(
                { userId },
                {
                    $set: {
                        name,
                        district,
                        upazilla,
                        bloodGroup,
                        mobile,
                        lastDonationDate,
                    },
                }
            );

            console.log(updatedDonor);
            
            // Return updated donor data after successful update
            const updatedDonorData = await donor.findOne({ userId });
            return NextResponse.json({success: true, updatedDonorData})
        }

        const newDonor = await donor.create({
            userId, name, district, upazilla, bloodGroup, mobile, lastDonationDate
        })

        return NextResponse.json({success: true, newDonor})


        
    }catch(error){
        return NextResponse.json({success: false,error: error})
    }
}