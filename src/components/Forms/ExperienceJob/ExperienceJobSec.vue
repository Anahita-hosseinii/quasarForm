<template>
  <div class="responsive-container q-pa-md rounded-xl"  >

    <!-- هدر بالا -->
    <div class="q-mb-md row justify-between items-center">
      <q-btn
        label="افزودن +"
        class="bg-deep-purple-8 text-white"
        @click="handelAddField()"
        
      />
      <p class="text-h5">اطلاعات شغلی</p>

    </div>

    <!-- لیست ردیف‌ها -->
    <div class="row justify-center items-center  ">
      <div class="col-12 " v-for="(item, index) in ExperienceList" :key="item.id">
        <ExperienceRow
          v-model="ExperienceList[index]"
          :index="index"
          @removeField="removeItem(index)"
        />
      </div>
    </div>

  </div>
</template>

<script>
import ExperienceRow from './ExperienceRow.vue';

export default {
  name: 'ExperienceJobSec',
  components: { ExperienceRow },
  data() {
    return {
      ExperienceList: [
        {
          id: Math.random(),
          SubjectJob: "",
          CommpanyJob: "",
          time: ""
        }
      ]
    };
  },
  
  methods: {
    handelAddField() {
      this.ExperienceList.push({
        id: Math.random(),
        SubjectJob: "",
        CommpanyJob: "",
        time: ""
      });
    },
    removeItem(index) {
      this.ExperienceList.splice(index, 1);
    }
  }
};
</script>

<style >
.rounded-xl {
  border-radius: 20px;
}
.responsive-container {
  width: 100%;
}

@media (min-width: 1024px) {
  .responsive-container {
    width: 80%;
  }
}
</style>
