<template>
  <form @submit.prevent="submitForm">
    <div class="mb-3">
      <label for="name" class="form-label">ชื่อ</label>
      <input type="text" class="form-control" id="name" v-model="formData.name" required>
    </div>
    <div class="mb-3">
      <label for="surname" class="form-label">นามสกุล</label>
      <input type="text" class="form-control" id="surname" v-model="formData.surname" required>
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">อีเมล</label>
      <input type="email" class="form-control" id="email" v-model="formData.email" required>
    </div>
    <div class="mb-3">
      <label for="tel" class="form-label">เบอร์โทรศัพท์</label>
      <input type="tel" class="form-control" id="tel" v-model="formData.tel" required>
    </div>
    <button type="submit" class="btn btn-success">บันทึก</button>
  </form>
</template>

<script>
export default {
  name: 'UserForm',
  props: {
    user: {
      type: Object,
      default: () => ({
        name: '',
        surname: '',
        email: '',
        tel: ''
      })
    }
  },
  data() {
    return {
      formData: {
        name: '',
        surname: '',
        email: '',
        tel: ''
      }
    }
  },
  created() {
    // ถ้ามีข้อมูลผู้ใช้ที่ส่งมา ให้นำมาแสดงในฟอร์ม
    this.formData = { ...this.user };
  },
  methods: {
    submitForm() {
      this.$emit('submit', this.formData);
    }
  },
  watch: {
    user: {
      handler(newValue) {
        this.formData = { ...newValue };
      },
      deep: true
    }
  }
}
</script>