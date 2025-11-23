import { getSubject } from "../services/SubjectService.js";

export async function authorizeSubjectOwnership(req, res, next) {
    const { id } = req.params;
    const subject = await getSubject(Number(id));

    if (!subject) {
        return res.status(404).json({ message: 'Subject not found' });
    }

    if (subject.userId !== req.user.id) {
        const error = new Error('Forbidden: you do not own this resource');
        error.status = 403;
        return next(error);
    }

    return next();
}