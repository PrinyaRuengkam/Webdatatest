<template>
  <div class="table-responsive">
    <table class="table table-striped table-hover">
      <thead class="table-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">ชื่อ</th>
          <th scope="col">นามสกุล</th>
          <th scope="col">อีเมล</th>
          <th scope="col">เบอร์โทรศัพท์</th>
          <th scope="col">การดำเนินการ</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.surname }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.tel }}</td>
          <td>
            <button class="btn btn-primary btn-sm me-2" @click="$emit('view-user', user.id)">ดู</button>
            <button class="btn btn-danger btn-sm" @click="$emit('delete-user', user.id)">ลบ</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'UserTable',
  props: {
    users: {
      type: Array,
      required: true
    }
  }
}
</script>