import got from "got";

const USERS_SERVICES_URI = "http://users-services:7101";

export default class UsersService {
    static async createUser({ email, password }) {
        const body = await got.post(`${USERS_SERVICES_URI}/users`, {
            json: { email, password }
        }).json();
        return body;
    }
}