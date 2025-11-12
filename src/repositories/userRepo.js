import prisma from '../config/db.js';

export async function createUser(data) {
    return await prisma.user.create({data: data, omit: {password: true }});  
}

export async function findUserByEmail(email) {
    return await prisma.user.findUnique({where: {email} });
}

export async function findAllUsers() {
    return await prisma.user.findMany({
        omit: { password: true },
    });
}

export async function findUser(id) {
    return await prisma.user.findUnique({
        where: { id },
        omit: { password: true },
    });
}

export async function updateUser(id, data) {
    return await prisma.user.update({
        where: { id },
        data,
        omit: { password: true},
    });
}

export async function deleteUserById(id) {
    return await prisma.user.delete({
        where: { id },
    });
}

export async function findPostsByUserId(userId) {
    return await prisma.post.findMany({
        where: { userId },
    });
}

export async function updateUserRole(id, role) {
    return await prisma.user.update({
        where: { id },
        data: { role },
        omit: { password: true},
    }); 
}