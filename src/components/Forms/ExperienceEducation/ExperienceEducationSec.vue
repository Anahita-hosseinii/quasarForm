<template>
  <div class="mt-25 bg-blue-grey-11 q-pa-md  rounded-xl" style="width: 80%; margin: auto;">
    <div class="q-mb-md row justify-between items-center ">
      <q-btn
      class="bg-deep-purple-8 text-white" 
      label="افزودن +"
      @click="HandleAddFiele()"
      />
      <p class="text-h5"> سوابق تحصیلی</p>
    </div>
    <div class="row">
        <ExperienceEducationRow/>
    </div>
 
  
  </div>
</template>
<script>
import ExperienceEducationRow from './ExperienceEducationRow.vue'


export default {
  components: { ExperienceEducationRow },
    methods:{
        HandleAddFiele (){


        }
    }
}
</script>
<style>

.rounded-xl {
  border-radius: 20px;
}
.mt-25{
    margin-top: 25px !important;
}
</style>