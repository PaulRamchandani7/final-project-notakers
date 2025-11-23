import prisma from '../config/db.js';

export async function createNote(data) {
    return await prisma.note.create({ data });

}

export async function findAllNotes(userId) {
    return await prisma.note.findMany({
        where: { userId }
    });
}

export async function findNoteById(id) {
    return await prisma.note.findUnique({
        where: { id },
    });
}

export async function updateNoteById(id, data) {
    return await prisma.note.update({
        where: { id },
        data,
    });
}


export async function deleteNoteById(id) {
    return await prisma.note.delete({
        where: { id },
    });
}