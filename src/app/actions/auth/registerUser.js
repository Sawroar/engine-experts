'use server'
import bcrypt from 'bcrypt'
import dbConnet, { collectionNamesObj } from "@/lib/dbConnet"

export const registerUser= async (payload)=>{
const usercollection=dbConnet(collectionNamesObj.usercollection) 
const {email,password}= payload;
if(!email || !password) return null

const user= await usercollection.findOne({email:payload.email})
if(!user){
    const hashedPassword= await bcrypt.hash(password,10)
    payload.password= hashedPassword
const result=await usercollection.insertOne(payload)
result.insertedId= result.insertedId.toString()
return result
}
return null

}
// acknowledged: true