import {
    createNote,
    findAllNotes,
    findNoteById,
    updateNoteById,
    deleteNoteById,
} from '../repositories/noteRepo.js';

export async function getAllNotes(userId) {
    return await findAllNotes(userId);  
}


export async function getNote(id) {
    return await findNoteById(id);
}

export async function createNewNote({ title, content, userId }) {
    if (!title || !content) {
        throw { status: 400, message: "Title and content are required" };
    }

    return await createNote({ title, content, userId });
}

export async function updateNote(id, { title, content }) {
    if (!title && !content) {
        throw { status: 400, message: "Provide at least one field (title or content)" };
    }

    const updateData = {};
    if (title) updateData.title = title;
    if (content) updateData.content = content;

    return await updateNoteById(id, updateData);
}

export async function deleteNote(id) {
    return await deleteNoteById(id);
}

