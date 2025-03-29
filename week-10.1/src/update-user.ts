import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function  main() {
    const updated = await prisma.users.update({
        where:{
            id:5
        },
        data:{
            name:"prince kumar"
        }
    })

    console.log(updated);
}

main().then(async()=>{
    await prisma.$disconnect();
}).catch(async(e)=>{
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})