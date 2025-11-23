import { getNote} from '../services/noteService.js';

export async function authorizeOwnership(req, res, next) {
    const { id } = req.params;
    const note = await getNote(Number(id));

    if (!note) {
        return res.status(404).json({ message: 'Note not found' });
    }

    if (note.userId !== req.user.id) {
        const error = new Error('Forbidden: you do not own this resource');
        error.status = 403;
        return next(error);
    }

    return next();
}