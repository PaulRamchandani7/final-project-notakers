import prisma from '../config/db.js';

export async function getAllByUser(userId) {
  return prisma.studyReminder.findMany({
    where: { userId }
  });
}

export async function getById(id) {
  return prisma.studyReminder.findUnique({
    where: { id }
  });
}

export async function create(data) {
  return prisma.studyReminder.create({
    data
  });
}

export async function update(id, data) {
  return prisma.studyReminder.update({
    where: { id },
    data
  });
}

export async function remove(id) {
  return prisma.studyReminder.delete({
    where: { id }
  });
}
