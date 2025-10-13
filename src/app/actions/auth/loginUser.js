'use server'
import  bcrypt from 'bcrypt'
import dbConnet, { collectionNamesObj } from "@/lib/dbConnet";

export const loginUser=async (payload)=>{
 const {email,password}=payload;
 const userCollection= dbConnet(collectionNamesObj.usercollection)
 const user = await userCollection.findOne({email})
 if(!user) return null;
 const isPasswordOk= bcrypt.compare(user.password,password)
 if(!isPasswordOk) return null;
 return user;

}