<template>
  <div class="col-12 col-md-6">
    <label for="berth">تاریخ تولد</label>
    <date-picker
      v-model="model.berth"
      format="jYYYY/jMM/jDD"
      display-format="jYYYY/jMM/jDD"
      placeholder="مثال: ۱۳۷۵/۰۵/۱۲"
      input-class="my-persian-date"
      clearable
    />
  </div>
</template>

<script>
import DatePicker from 'vue-persian-datetime-picker'

export default {
  components: {
    DatePicker
  },
  data() {
    return {
      model: {
        berth: ''
      }
    }
  }
}
</script>
<style >
.my-persian-date {
  padding: 5px !important;
  border-radius: 8px;
  background-color: #E3F2FD;
  font-size: 15px;
  width: 100%;
  box-sizing: border-box;
}
</style>

