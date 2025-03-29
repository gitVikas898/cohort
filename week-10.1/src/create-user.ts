import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
   const user =  await prisma.users.createMany({
        data:[
            {
                name:"aman singh",
                email:"amainsingh1@gmail.com"
            },
            {
                name:"vikram bahadur",
                email:"vikramb1@gmail.com"
            },
            {
                name:"umesh pareya",
                email:"umesh1@gmail.com"
            },
            {
                name:"moti kumar",
                email:"moti1@gmail.com"
            }
        ]
            
    })

}

main().then(async()=>{
    await prisma.$disconnect()
})
.catch(async(e)=>{
    console.error(e);
    await prisma.$disconnect();
    process.exit(1)
})