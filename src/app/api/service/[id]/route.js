import dbConnet, { collectionNamesObj } from "@/lib/dbConnet"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export const GET= async(req,{params})=>{
  const p = await params
  const serviceCollection = dbConnet(collectionNamesObj.ServicesCollection)
  const data = await serviceCollection.findOne({ _id: new ObjectId(p.id) })
 return NextResponse.json(data)
}