import axios from 'axios';
export const LOGIN_URL = 'http://localhost:3000/login';

export function login(email: string, password: string) {
	return axios.post(LOGIN_URL, { email, password });
}
