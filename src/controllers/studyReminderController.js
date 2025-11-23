import {
    getAllReminders,
    getReminderById,
    createReminder,
    updateReminder,
    deleteReminder,
  } from '../services/studyReminderService.js';

  
export async function getAllRemindersHandler(req, res, next) {
    try {
        const userId = req.user.id;
        const reminders = await getAllReminders(userId);
        res.json(reminders);
        
    } catch (err) {
        next(err);
    } 
}

  
export async function getReminderHandler(req, res, next) {
    try {
        const userId = req.user.id;
        const id = parseInt(req.params.id);
        const reminder = await getReminderById(id, userId);
        res.json(reminder);
    } catch (err) {
        next(err);
    } 
}

  
export async function createReminderHandler(req, res, next) {
    try {
        const userId = req.user.id;
        const data = req.body;
        const newReminder = await createReminder(data, userId);
        res.status(201).json(newReminder);
    } catch (err) {
        next(err);
    } 
}

export async function updateReminderHandler(req,res,next) {
    try {
        const userId = req.user.id;
        const id = parseInt(req.params.id);
        const updates = req.body;
        const updated = await updateReminder(id, updates, userId);
        res.json(updated);
    } catch (err) {
        next(err);
    } 
}
    
export async function deleteReminderHandler(req, res, next) {
    try {
        const userId = req.user.id;
        const id = parseInt(req.params.id);
        await deleteReminder(id, userId);
        res.status(204).send();
    } catch (err) {
        next(err);
    } 
}