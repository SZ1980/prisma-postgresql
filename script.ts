import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    
    
   const user = await prisma.user.findUnique({
    where: {
        email: 'sally@gmail.com'
    }
    
   })
   console.log(user);
}

main()
    .catch(e => {
        console.log(e.message);
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

// async function main() {
//     // const users = await prisma.user.findMany()
//       await prisma.user.deleteMany()
    
//    const users = await prisma.user.createMany({
//     data: [ {
//         name: 'Kyle',
//         email: "kyle@gmail.com",
//         age: 27,              
//     },  {
//         name: 'Sally',
//         email: "sally@gmail.com",
//         age: 37,              
//     }],
    
//    })
//    console.log(users);
// }