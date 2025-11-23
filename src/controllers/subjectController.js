import {
    getAllSubjects,
    getSubject,
    createNewSubject,
    updateSubject,
    deleteSubject,
} from '../services/SubjectService.js';

export async function getAllSubjectsHandler(req, res) {
    const userId = req.user.id;
    const subjects = await getAllSubjects(userId);
    res.status(200).json(subjects);
}

export async function getSubjectHandler(req, res) {
    const { id } = req.params;
    const subject = await getSubject(Number(id));

    if (!subject) {
        return res.status(404).json({ message: 'Subject not found' });
    }

    res.status(200).json(subject);
}

export async function createSubjectHandler(req, res) {
    const userId = req.user.id;
    const { name } = req.body;
    const newSubject = await createNewSubject(userId, name);
    res.status(201).json(newSubject);
}


export async function updateSubjectHandler(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    const updatedSubject = await updateSubject(Number(id), { name });
    res.status(200).json(updatedSubject);
}


export async function deleteSubjectHandler(req, res) {
    const { id } = req.params;
    await deleteSubject(Number(id));
    res.status(204).send();
}

