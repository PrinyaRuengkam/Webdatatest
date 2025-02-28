import axios from 'axios';

// กำหนด Base URL ของ API
const apiClient = axios.create({
  baseURL: 'https://raw.githubusercontent.com/Apisit250aps/express-test-api/main',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000
});

// สำหรับ API ที่ต้องใช้ POST, PUT, DELETE
const expressApiClient = axios.create({
  baseURL: 'https://your-deployed-express-api-url.com', // เปลี่ยนเป็น URL ของ API ที่ deploy แล้ว
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000
});

export default {
  // ดึงข้อมูลผู้ใช้ทั้งหมด
  getUsers() {
    return apiClient.get('/person.json');
  },
  
  // ดึงข้อมูลผู้ใช้รายบุคคล
  getUser(id) {
    return apiClient.get('/person.json')
      .then(response => {
        const users = response.data;
        return users.find(user => user.id === id);
      });
  },
  
  // สร้างผู้ใช้ใหม่ (จะใช้ได้เมื่อมีการ deploy API แล้ว)
  createUser(user) {
    return expressApiClient.post('/api/person', user);
  },
  
  // อัพเดทข้อมูลผู้ใช้
  updateUser(id, user) {
    return expressApiClient.put(`/api/person/${id}`, user);
  },
  
  // ลบผู้ใช้
  deleteUser(id) {
    return expressApiClient.delete(`/api/person/${id}`);
  }
};