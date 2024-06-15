import {PrismaClient} from '@prisma/client';

const PrismaClientSingleton = () => {
    return new PrismaClient();
}

const globalPrisma = globalThis;

const prisma = globalPrisma.prisma ?? PrismaClientSingleton();

export default prisma;

if(process.env.NODE_ENV != 'production') globalThis.prisma = prisma;