<template>
    <div class="container mt-4">
      <h2>เพิ่มผู้ใช้ใหม่</h2>
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="card">
            <div class="card-body">
              <user-form @submit="addUser"></user-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import UserForm from '@/components/UserForm.vue';
  import api from '@/services/api';
  
  export default {
    name: 'AddUserView',
    components: {
      UserForm
    },
    methods: {
      async addUser(userData) {
        try {
          await api.createUser(userData);
          alert('เพิ่มผู้ใช้เรียบร้อยแล้ว');
          this.$router.push('/users');
        } catch (error) {
          console.error('Error creating user:', error);
          alert('ไม่สามารถเพิ่มผู้ใช้ได้ กรุณาลองใหม่อีกครั้ง');
        }
      }
    }
  }
  </script>