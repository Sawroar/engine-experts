import { authOptions } from "@/lib/authOptions";
import dbConnet, { collectionNamesObj } from "@/lib/dbConnet"
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server"

export const GET = async (req, { params }) => {
    const p = await params;
    const bookingCollection = dbConnet(collectionNamesObj.bookingCollection)
    const query = { _id: new ObjectId(p.id) }
    const session = await getServerSession(authOptions)
    const email = session?.user?.email;
    const singleBooking = await bookingCollection.findOne(query)
    const isOwnerOk = email === singleBooking?.email
    if (isOwnerOk) {
        return NextResponse.json(singleBooking)
    }
    else {
        return NextResponse.json({ message: 'Forbideen get action' }, { status: 403 })
    }

}

export const PATCH = async (req, { params }) => {
    const p = await params;
    const bookingCollection = dbConnet(collectionNamesObj.bookingCollection)
    const query = { _id: new ObjectId(p.id) }
    const session = await getServerSession(authOptions)
    const email = session?.user?.email;
    const currentBookingData = await bookingCollection.findOne(query)
    const isOwnerOk = email === currentBookingData?.email
    if (isOwnerOk) {
        const body = await req.json()
        const filter = {
            $set: {
                ...body
            }
        }
        const options = {
            upsert: true
        }
        const updateResponse = await bookingCollection.updateOne(query, filter, options)
        revalidatePath('/mybookings')
        return NextResponse.json(updateResponse)
    }
    else {
        return NextResponse.json({ message: 'Forbideen update action' }, { status: 403 })
    }



}