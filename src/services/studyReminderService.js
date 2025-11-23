import { 
  getAllByUser,
  getById,
  create,
  update,
  remove,
} from '../repositories/studyReminderRepo.js'


export async function getAllReminders(userId) {
    return await getAllByUser(userId);
}

export async function getReminderById(id, userId) {
    const reminder = await getById(id);
    if (!reminder) {
      const error = new Error(`Cannot find reminder with id ${id}`);
      error.status = 404;
      throw error;
    }
    if (reminder.userId !== userId) {
      const error = new Error('Forbidden: This reminder does not belong to you');
      error.status = 403;
      throw error;
    }
    return reminder;
  }

  export async function createReminder(data, userId) {
    return await create({ ...data, userId });
  }

  export async function updateReminder(id, data, userId) {
    const oldReminder = await getById(id);
    if (!oldReminder) {
      const error = new Error(`Cannot find reminder with id ${id}`);
      error.status = 404;
      throw error;
    }
    if (oldReminder.userId !== userId) {
      const error = new Error('Forbidden: This reminder does not belong to you');
      error.status = 403;
      throw error;
    }
    return await update(id, data);
  }


  
  export async function deleteReminder(id, userId) {
    const oldReminder = await getById(id);
    if (!oldReminder) {
      const error = new Error(`Cannot find reminder with id ${id}`);
      error.status = 404;
      throw error;
    }
    if (oldReminder.userId !== userId) {
      const error = new Error('Forbidden: This reminder does not belong to you');
      error.status = 403;
      throw error;
    }
    return await remove(id);
  }