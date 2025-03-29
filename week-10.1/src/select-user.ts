import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function  main() {
    const USERS = await prisma.users.findMany({}); // find all users in the db
    console.log(USERS)

    // FIND SEPECIFIC USER

    const a_user = await prisma.users.findUnique({
        where:{
            id:2
        },
        include:{
            posts:true
        }
    })

    console.log(a_user);
}

main().then(async()=>{
    await prisma.$disconnect();
}).catch(async(e)=>{
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})