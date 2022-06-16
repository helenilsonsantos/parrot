import { useEffect, useState } from "react";
import { renderUsers } from "../services/Posts";
import { User } from '../services/Posts'


export const useUser = () => {
    const [userList, setUserList] = useState<User[]>([] as User[]);

    useEffect(() => {
        renderUsers().then(users => setUserList(users));
    }, [setUserList])

    // const [postListById, setPostListByID] = useState<Post[]>([] as Post[]);

    // useEffect(() => {
    //     renderPostsById().then(posts => setPostListByID(posts))
    // })



    return userList
}

export default useUser;