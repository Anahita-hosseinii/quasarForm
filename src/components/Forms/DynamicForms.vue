<template>
  <q-form class="form  w-100 column items-center  bg-deep-purple-2">
    <PersonalInfoSec v-model="model.PersonalInfoSec" />
    <ExperienceJobSec  v-model="model.ExperienceJobSec" />
    <ExperienceEducationSec  v-model="model.ExperienceEducationSec" />
    <ExperienceArticleSec  v-model="model.ExperienceArticleSec"/>
    <q-btn
    label="ذخیره"
    class=" q-mt-md bg-deep-purple-8 text-white q-px-xl"
    @click="saveHandler()"
    />
  </q-form>
</template>
<script>
import ExperienceArticleSec from './ExperienceArticle/ExperienceArticleSec.vue';
import ExperienceEducationSec from './ExperienceEducation/ExperienceEducationSec.vue';
import ExperienceJobSec from './ExperienceJob/ExperienceJobSec.vue';
import PersonalInfoSec from './PersonalityInfo/PersonalInfoSec.vue';
export default {
  components: { PersonalInfoSec, ExperienceJobSec, ExperienceEducationSec, ExperienceArticleSec },
  data () {
    return {
      model: {
        PersonalInfoSec: {
          name: "",
          fathersName: "",
          IdentityCart: "",
          uniSEx: "",
          berth: "",
          city: "",
          phoneNumber: ""
        },
        ExperienceJobSec: {
          SubjectJob:"",
          CommpanyJob:"",
          time:""
        },
        ExperienceEducationSec: {
          Grade: "",
          Majere: "",
          timeEducation: "",
          UniName:""
        },
        ExperienceArticleSec: {
          Ducuments:"",
          FromDate:"",
          ToDate:""

        },
      }
    }
  },
  methods: {
    loadHandler () {
      // this.dm بارگذاری اطلاعات
    },
   
  saveHandler() {
    console.log('اطلاعات وارد شده:', this.model.PersonalInfoSec);
  }
  }
}
</script>
<style >
.form {
  width: 100%;
  border-radius: 5px;
}

@media (min-width: 1024px) {
  .form {
    width: 65%;
  }
}
</style>

