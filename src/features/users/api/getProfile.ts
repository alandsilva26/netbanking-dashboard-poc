import instance from "@/lib/axios";
import { User } from "../types";

type UserReponse = User;


const getProfile = async () => {
    const response = await instance.get<UserReponse>("profile", {
        headers: {
            username: "lemon",
            role: "lemon"
        }
    });

    if (response.status === 200) {
        const user: User = response.data;
        return user;
    }
    throw new Error("User not found");
}


export {
    getProfile
};