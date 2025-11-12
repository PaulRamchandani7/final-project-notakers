import { getAllUsers, getUser, updateCurrentUser, deleteCurrentUser, getUserPosts, changeUserRole} from "../services/userService.js";

export async function getAllUsersHandler(req, res) {
    const users = await getAllUsers();
    res.status(200).json(users);
}

export async function getCurrentUser(req, res, next) {
    const userId = req.user.id;
    const user = await getUser(userId);
    if(!user) {
        return res.status(404).json({message: 'User not found'});
    }
    res.status(200).json(user);
}

export async function updateCurrentUserHandler(req, res) { 
    const userId = req.user.id;
    const { email, password } = req.body;
    const updatedUser = await updateCurrentUser(userId, {email, password });
    res.status(200).json(updatedUser);

}

export async function deleteUserHandler(req, res) {
    const userId = req.user.id;
    await deleteCurrentUser(userId);
    res.status(204).send();
}

export async function getUserPostsHandler(req, res) {
    const userId = req.user.id;
    const posts = await getUserPosts(userId);
    res.status(200).json(posts);
}

export async function updateUserRoleHandler(req, res) {
    const { id } = req.params;
    const { role } = req.body;

    const updatedRole = await changeUserRole(Number(id), role);
    res.status(200).json(updatedRole);
}