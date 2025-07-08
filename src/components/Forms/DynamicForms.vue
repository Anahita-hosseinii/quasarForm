<template>
  <q-form class="form  w-100 column items-center  " style="width: 100%;">
    <PersonalInfoSec />
    <ExperienceJobSec/>
    <ExperienceEducationSec/>
    <q-btn
      label="ذخیره"
      class=" q-mt-md bg-deep-purple-8 text-white"
    />
  </q-form>
</template>

<script>
import ExperienceEducationSec from './ExperienceEducation/ExperienceEducationSec.vue';
import ExperienceJobSec from './ExperienceJob/ExperienceJobSec.vue';
import PersonalInfoSec from './PersonalityInfo/PersonalInfoSec.vue';

export default {
  components: { PersonalInfoSec, ExperienceJobSec, ExperienceEducationSec }
}
</script>

<style>
.form {
  width: 100% !important;
  border-radius: 5px !important;
}
</style>
