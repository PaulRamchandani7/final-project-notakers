import {
    getAllNotes,
    getNote,
    createNewNote,
    updateNote,
    deleteNote,
} from '../services/noteService.js';


export async function getAllNotesHandler(req, res) {
    const userId = req.user.id;
    const notes = await getAllNotes(userId);
    res.status(200).json(notes);
}

export async function getNoteHandler(req, res) {
    const { id } = req.params;
    const note = await getNote(Number(id));

    if (!note) {
        return res.status(404).json({ message: 'Note not found' });
    }

    res.status(200).json(note);
}

export async function createNoteHandler(req, res) {
    const userId = req.user.id;
    const { title, content } = req.body;
    const newNote = await createNewNote({ title, content, userId });
    res.status(201).json(newNote);
}

export async function updateNoteHandler(req, res) {
    const { id } = req.params;
    const { title, content } = req.body;

    const updatedNote = await updateNote(Number(id), { title, content });
    res.status(200).json(updatedNote);
}

export async function deleteNoteHandler(req, res) {
    const { id } = req.params;
    await deleteNote(Number(id));
    res.status(204).send();
}