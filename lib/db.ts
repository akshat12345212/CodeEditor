import {PrismaClient } from '../generated/prisma/client';
// import { gl } from 'date-fns/locale';
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
export const db=globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;