<template>
  <div class="q-pa-md rounded-xl mt-25" style="width: 80%; margin: auto;">
    <!-- هدر بالا -->
    <div class="q-mb-md row justify-between items-center">
      <q-btn
        label="افزودن +"
        class="bg-deep-purple-8 text-white"
        @click="handleAddField"
      />
      <p class="text-h5">سوابق مطالعاتی و تحقیقاتی</p>
    </div>

    <!-- لیست ردیف‌ها -->
    <div class="row justify-center items-center">
      <div class="col-12" v-for="(item, index) in ExperienceArticleList" :key="item.id">
        <ExperienceArticleRow
          v-model="ExperienceArticleList[index]"
           @removeField="handleRemoveField(index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ExperienceArticleRow from './ExperienceArticleRow.vue'

export default {
  components: { ExperienceArticleRow },
  data() {
    return {
      ExperienceArticleList: [
        {
          id: Math.random(),
          Ducuments: '',
          FromDate: '',
          ToDate: ''
        }
      ]
    }
  },
  methods: {
    handleAddField() {
      this.ExperienceArticleList.push({
        id: Math.random(),
        Ducuments: '',
        FromDate: '',
        ToDate: ''
      })
    },
    handleRemoveField(index) {
      this.ExperienceArticleList.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.rounded-xl {
  border-radius: 20px;
}
.mt-25 {
  margin-top: 25px !important;
}
</style>
