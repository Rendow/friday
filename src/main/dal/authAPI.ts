import {instance} from "./instatnce";
import {ProfileResponseType} from "../bll/profile-reducer";
import {RegisterDataType} from "../bll/registration-reducer";

export const AuthAPI = {
    pingGet: () => {
        return instance.get ( 'ping/' )
    },
    pingPost: () => {
        return instance.post ( 'ping/', {frontTime: Date.now ()} )
    },
    me: () => {
        return instance.post<ProfileResponseType> ( 'auth/me', {} )
    },
    register: (data: RegisterDataType) => {
        return instance.post ( 'auth/register', data )
    },
    login: (email: string, password: string, rememberMe: boolean) => {
        const model = {
            email, password, rememberMe
        }
        return instance.post<ProfileResponseType> ( 'auth/login/', model )
    },
    logOut: () => {
        return instance.delete ( 'auth/me/', {} )
    },
    updateAvatar(avatar: string) {
        return instance.put ( 'auth/me', {avatar} )
    },
    updateName(name: string | null) {
        return instance.put ( 'auth/me', {name} )
    },
    forgot: (email: string) => {
        return instance.post ( 'auth/forgot', {email, message: 'test'} )
    },
    delete: () => {
        return instance.delete ( 'auth/forgot', {} )
    },
}