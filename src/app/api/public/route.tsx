
import { connect } from "@/dbConfig/dbConfig";
import donor from "@/models/userModel";
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function GET(request: NextRequest) {
    try {


        const searchParams = request.nextUrl.searchParams;
        const district = searchParams.get('district'); 
        const upazilla = searchParams.get('upazilla'); 
        const bloodGroup = searchParams.get('bloodGroup');

        // const { district, upazilla, bloodGroup } = request.query;

        // Log the extracted parameters
        console.log({ district, upazilla, bloodGroup });

        const donorsList = await donor.find({ district, upazilla, bloodGroup });

        console.log('first');
        
        console.log(donorsList);
        
        console.log('second');
        

        return NextResponse.json({ success: true, donorsList });




    } catch (error) {
        return NextResponse.json({ success: false, error: error })
    }
}