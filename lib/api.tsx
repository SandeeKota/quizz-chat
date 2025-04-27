import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.2.2:3000', // For Android emulator. Use your IP if testing on physical device.
});

export default api;