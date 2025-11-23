import {
    createSubject,
    findAllSubjects,
    findSubjectById,
    updateSubjectById,
    deleteSubjectById,
} from '../repositories/subjectRepo.js';


export async function getAllSubjects(userId) {
    return await findAllSubjects(userId);  
}

export async function getSubject(id) {
    return await findSubjectById(id);
}

export async function createNewSubject(userId, name) {
    if (!name) {
        throw { status: 400, message: "Name is required" };
    }

    return await createSubject(userId, name);
}

export async function updateSubject(id, { name }) {
    if (!name) {
        throw { status: 400, message: "Name is required" };
    }

    return await updateSubjectById(id, { name });
}

export async function deleteSubject(id) {
    return await deleteSubjectById(id);
}

