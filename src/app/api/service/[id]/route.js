import { authOptions } from "@/lib/authOptions"
import dbConnet, { collectionNamesObj } from "@/lib/dbConnet"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export const DELETE= async(req,{params})=>{
  // Validation
  const session= await getServerSession(authOptions)
  const p= await params
  const bookingCollection = dbConnet(collectionNamesObj.bookingCollection)
  const currentBooking = await bookingCollection.findOne({_id:new ObjectId(p.id)})
  const isOwnerOk= session?.user?.email == currentBooking.email
  if(isOwnerOk){
      //  Deleting User Specific Bookings
  const deleteResponse= await bookingCollection.deleteOne({_id: new ObjectId(p.id)})
  revalidatePath('/mybookings')
  return NextResponse.json({deleteResponse})
  }
else{
   return NextResponse.json({success:false,message:'Forbiddn'},{status:401})
}
}

export const GET= async(req,{params})=>{
  const p = await params
  const serviceCollection = dbConnet(collectionNamesObj.ServicesCollection)
  const data = await serviceCollection.findOne({ _id: new ObjectId(p.id) })
 return NextResponse.json(data)
}
