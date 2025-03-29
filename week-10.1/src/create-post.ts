import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function  main() {
    const post = await prisma.posts.createMany({
        data:[
            {
                title:"DevOPS",
                content:"How to start devops basics by aman",
                authorId :2,
                isPublished:true
            },
            {
                title:"Smart Investing",
                content:"How to start Investing in 20's",
                authorId :3,
                isPublished:true
            },
            {
                title:"Anime Guide 101",
                content:"How to select best Anime",
                authorId :4,
                isPublished:true
            }
        ]
    })
    console.log(post);
}

main().then(async()=>{
    await prisma.$disconnect();
}).catch(async(e)=>{
    console.log(e)
    await prisma.$disconnect();
    process.exit(1);
})