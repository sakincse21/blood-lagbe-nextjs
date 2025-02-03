//checks if new donor or existing donor
import { connect } from "@/dbConfig/dbConfig";
import donor from "@/models/userModel";
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function GET(request: NextRequest) {
    try {


        const searchParams = request.nextUrl.searchParams;
        const userId = searchParams.get('userId');
        console.log('backend e ', userId);
        
        const existingDonor = await donor.findOne({  userId });

        
        // console.log(existingDonor);
        

        if(!existingDonor){
            return NextResponse.json({ success: false, error: 'Profile not found' })
        }
        

        return NextResponse.json({ success: true, existingDonor });




    } catch (error) {
        return NextResponse.json({ success: false, error: error })
    }
    //success variable sent to for better implementation
}