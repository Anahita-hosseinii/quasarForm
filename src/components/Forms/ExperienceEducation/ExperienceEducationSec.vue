<template>
  <div class="mt-25  q-pa-md  rounded-xl" style="width: 80%; margin: auto;">
    <div class="q-mb-md row justify-between items-center ">
      <q-btn
      class="bg-deep-purple-8 text-white" 
      label="افزودن +"
      @click="handleAddField()"
      />
      <p class="text-h5"> سوابق تحصیلی</p>
    </div>
   <div class="row justify-center items-center">
      <div class="col-12" v-for="(item, index) in ExperienceEducationList" :key="item.id">
        <ExperienceEducationRow
          v-model="ExperienceEducationList[index]"
          @removeField="removeItem(index)"

        />
      </div>
    </div>
 
  
  </div>
</template>
<script>
import ExperienceEducationRow from './ExperienceEducationRow.vue';


export default {
  components: { ExperienceEducationRow },
    data (){
      return{
      ExperienceEducationList: [
        {
          id: Math.random(),
          Grade: "",
          Majere: "",
          timeEducation: "",
          UniName:""
        }
      ]
      }
    },
    methods:{
      handleAddField() {
      this.ExperienceEducationList.push({
        id: Math.random(),
        Grade: "",
        Majere: "",
        timeEducation: "",
        UniName:""
      });
     },
      removeItem(index) {
      this.ExperienceEducationList.splice(index, 1);
    }
    }
}
</script>
<style>

.rounded-xl {
  border-radius: 20px;
}
.mt-25{
    margin-top: 20px !important;
}
</style>