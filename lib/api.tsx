import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.6:3000', // For Android emulator. Use your IP if testing on physical device.
});

export default api;