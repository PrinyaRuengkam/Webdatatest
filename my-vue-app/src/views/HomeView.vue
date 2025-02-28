<template>
  <div class="container mt-4">
    <div class="jumbotron bg-light p-5 rounded">
      <h1 class="display-4">ยินดีต้อนรับ</h1>
      <p class="lead">ระบบจัดการข้อมูลผู้ใช้โดยใช้ Express API</p>
      <hr class="my-4">
      <p>คุณสามารถดูรายชื่อผู้ใช้ทั้งหมด หรือเพิ่มผู้ใช้ใหม่ได้</p>
      <router-link to="/users" class="btn btn-primary btn-lg">ดูรายชื่อผู้ใช้</router-link>
      <router-link to="/add-user" class="btn btn-success btn-lg ms-2">เพิ่มผู้ใช้</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>