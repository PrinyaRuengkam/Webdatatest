<template>
  <div class="container mt-4">
    <h2>รายชื่อผู้ใช้ทั้งหมด</h2>
    <div v-if="loading" class="text-center mt-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">กำลังโหลด...</span>
      </div>
      <p class="mt-2">กำลังโหลดข้อมูล...</p>
    </div>
    <div v-else-if="error" class="alert alert-danger mt-3">
      {{ error }}
    </div>
    <div v-else>
      <user-table :users="users" @view-user="viewUser" @delete-user="deleteUser"></user-table>
    </div>
    
    <!-- Modal สำหรับแสดงข้อมูลผู้ใช้ -->
    <div class="modal fade" id="userDetailModal" tabindex="-1" aria-labelledby="userDetailModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="userDetailModalLabel">ข้อมูลผู้ใช้</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div v-if="selectedUser">
              <p><strong>ID:</strong> {{ selectedUser.id }}</p>
              <p><strong>ชื่อ:</strong> {{ selectedUser.name }}</p>
              <p><strong>นามสกุล:</strong> {{ selectedUser.surname }}</p>
              <p><strong>อีเมล:</strong> {{ selectedUser.email }}</p>
              <p><strong>เบอร์โทรศัพท์:</strong> {{ selectedUser.tel }}</p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ปิด</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserTable from '@/components/UserTable.vue';
import api from '@/services/api';

export default {
  name: 'UsersView',
  components: {
    UserTable
  },
  data() {
    return {
      users: [],
      loading: true,
      error: null,
      selectedUser: null,
      userModal: null
    }
  },
  async created() {
    try {
      const response = await api.getUsers();
      this.users = response.data;
      this.loading = false;
    } catch (error) {
      console.error('Error fetching users:', error);
      this.error = 'ไม่สามารถโหลดข้อมูลผู้ใช้ได้ กรุณาลองใหม่อีกครั้ง';
      this.loading = false;
    }
  },
  mounted() {
    // เตรียม Modal สำหรับแสดงรายละเอียดผู้ใช้
    this.userModal = new bootstrap.Modal(document.getElementById('userDetailModal'));
  },
  methods: {
    async viewUser(id) {
      try {
        this.selectedUser = await api.getUser(id);
        this.userModal.show();
      } catch (error) {
        console.error('Error fetching user details:', error);
        alert('ไม่สามารถดูข้อมูลผู้ใช้ได้ กรุณาลองใหม่อีกครั้ง');
      }
    },
    async deleteUser(id) {
      if (confirm('คุณต้องการลบผู้ใช้นี้ใช่หรือไม่?')) {
        try {
          await api.deleteUser(id);
          this.users = this.users.filter(user => user.id !== id);
          alert('ลบผู้ใช้เรียบร้อยแล้ว');
        } catch (error) {
          console.error('Error deleting user:', error);
          alert('ไม่สามารถลบผู้ใช้ได้ กรุณาลองใหม่อีกครั้ง');
        }
      }
    }
  }
}
</script>