<template>
  <div class="bg-blue-grey-11 q-pa-md rounded-xl" style="width: 80%; margin: auto;">
   
    <div class="q-mb-md row justify-between items-center ">
      
      <q-btn
        label="افزودن +"
        class="bg-deep-purple-8 text-white"
        @click="handelAddField()"
      />
      <p class="text-h5">اطلاعات شغلی</p>
    </div>

    <div class="row justify-center items-center">
      <ExperienceRow
        v-for="(item, index) in ExperienceList"
        :key="item.id"
        v-model="ExperienceList[index]"
      />
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
    }
  }
};
</script>
<style>

.rounded-xl {
  border-radius: 20px;
}
</style>