import { axiosAnonInstance } from '../axiosIntances';

export default {
    getUsers: (page: number) => axiosAnonInstance.get(`users?page=${(page ?? 1) - 1}`),
    getUserDetails: (login: string) => axiosAnonInstance.get(`users/${login}`),
    getUserRepos: (login: string) => axiosAnonInstance.get(`/users/${login}/repos`),
};
