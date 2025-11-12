import { deleteUserById, findAllUsers, findPostsByUserId, findUser, findUserByEmail, updateUser, updateUserRole} from "../respositories/userRepo.js";
import bcrypt from "bcrypt"; 

export async function getAllUsers() {
    return await findAllUsers();
}

export async function getUser(id) {
  return await findUser(id);
}

export async function updateCurrentUser(id, { email, password }) {
    if (!email && !password) {
        throw { status: 400, message: "Provide at least one field (email or password)" };
      }

   const updateData = {};

    if(email) {
        const existing = await findUserByEmail(email);
        if(existing && existing.id !== id) {
            throw { status: 409, message: "Email already in use"};
        }
        updateData.email = email;
    }

    if(password)  {
        const hased = await bcrypt.hash(password, 10);
        updateData.password = hased;
    }
    const updatedUser = await updateUser(id, updateData);
    return updatedUser;
}

export async function deleteCurrentUser(id) {
    return await deleteUserById(id);
}

export async function getUserPosts(userId) {
    return await findPostsByUserId(userId);
}

export async function changeUserRole(id, role) {
    const user = await findUser(id);
    if(!user) {
        const error = new Error("User not found");
        error.status = 404;
        throw error;
    }
    return await updateUserRole(id, role);
}