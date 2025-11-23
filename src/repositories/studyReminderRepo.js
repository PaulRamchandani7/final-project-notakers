import prisma from  '../config/db.js';

 export async function getAllByUser(userId) {
    const reminders = await prisma.studyReminder.findMany({
        where: { userId },
        select: {
          id: true,
          title: true,
          details: true,
          timeStart: true,
          timeEnd: true,
          completed: true,
          userId: true,
          noteId: true

        },
        orderBy: { timeStart: 'asc' }
      });
    
      return reminders;
    }

 export async function getById(id) {
    const reminder = await prisma.studyReminder.findUnique({
        where: { id: Number(id) },
        select: {
            id: true,
            title: true,
            details: true,
            timeStart: true,
            timeEnd: true,
            completed: true,
            userId: true,
            noteId: true

          },
    });
    return reminder;
 }

 export async function create(data) {
    const reminder = await prisma.studyReminder.create({
        data,
        select: {
            id: true,
            title: true,
            details: true,
            timeStart: true,
            timeEnd: true,
            completed: true,
            userId: true,
            noteId: true

          },
    });
    return reminder;
 }

 export async function update(id, updates) {
    try {
        const reminder = await prisma.studyReminder.update({
            where: { id: Number(id) },
            data: updates,
            select: {
                id: true,
                title: true,
                details: true,
                timeStart: true,
                timeEnd: true,
                completed: true,
                userId: true, 
                noteId: true

              },
        });
        return reminder;
} catch (error) {
    if (error.code === 'P2025') return null;
    throw error;
  }
}

 export async function remove(id) { 
    try { 
       const reminder = await prisma.studyReminder.delete({
        where: { id: Number(id) }
       });
     
       return reminder;
 } catch (error) {
    if (error.code === 'P2025') return null;
    throw error;
  }
}

export async function exists(id) {
    const result = await prisma.studyReminder.count(
        {where: { id: Number(id) }
        });
    return result > 0;

  }