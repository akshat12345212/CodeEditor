"use server "
import { descriptor } from './../../../node_modules/effect/src/Effect';
import {currentUser} from "../../auth/actions/index"
import { db } from "@/lib/db";
// import * from "../../../prisma/schema.prisma";
import { Templates } from '@/src/generated/prisma/client';
export const createPlayground=async(data:{
    title:string;
    template:Templates;
    description?:string;
    userId:string;

})=>{
 const {title,template,description}= data;
 const user =await currentUser();
 if (!user?.id) {
  throw new Error("You must be signed in to create a playground.");
}

 try{
    const playground = await db.playground.create({

        data :{
            title,
            description,
            template,
            userId: user?.id
        },
    });
    return playground;
}
catch(error){
    console.log(error)
    return null;
}
}
export const getAllPlayground =async ()=>{
    const user= await currentUser();
    if (!user?.id) {
        throw new Error("You must be signed in to view your playgrounds.");
      }
      try{
        const playgrounds = await db.playground.findMany({
            where:{
                userId:user.id
            },
            include:{
                user:true,
                StarMark:{
                    where:{
                        userId:user?.id
                    },select:{
                        isMarked:true,
                    }
                }

            }
        });
        return playgrounds;

      }
        catch(error){
            console.log(error)
            return null;

        }

}