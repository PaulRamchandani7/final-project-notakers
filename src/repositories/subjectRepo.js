import prisma from '../config/db.js';

export async function createSubject(userId, name) {
    return await prisma.subject.create({
        data: {
            name,
            user: {
                connect: { id: userId }
            }
        }  
    });
}

export async function findAllSubjects(userId) {
    return await prisma.subject.findMany({
        where: { userId }
        
    });
}

export async function findSubjectById(id) {
    return await prisma.subject.findUnique({
        where: { id },
    });
}

export async function updateSubjectById(id, data) {
    return await prisma.subject.update({
        where: { id },
        data,
    });
}

export async function deleteSubjectById(id) {
    return await prisma.subject.delete({
        where: { id },
    });
}