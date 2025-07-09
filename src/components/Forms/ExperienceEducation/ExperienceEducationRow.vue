<template>
  <q-card
    flat
    bordered
    class="bg-white q-pa-md shadow-3 rounded-xl bg-blue-1"
    style=" width: 100%; margin: 20px auto"
  >
    <div class="row justify-end">
      <q-btn
        icon="delete"
        flat
        round
        dense
        size="md"
        color="red"
        @click="$emit('removeField')"
        class="q-mb-sm"
      />
    </div>
    <q-card-section class="qcardsection q-mt-md ">
        <div class="row q-col-gutter-md ">

          <!-- عنوان شغلی-->
          <div class="col-md-5 col-sm-12">
            <label class="mb-1" for="name"> عنوان شغلی</label>
                <q-input
                id="name"
                v-model="model.Grade"
                placeholder="مقطع تحصیلی"
                outlined
                dense
                :rules="[val => !!val || 'عنوان شغلی الزامی است']"
                clearable
                hide-label
                class="w-100"
                />
          </div>

            <!--  شرکت -->
          <div class="col-5 ">
            <label class="mb-1" for="fathersName"> شرکت</label>
              <q-input
                v-model="model.Majere"
                placeholder="رشته تحصیلی  "
                outlined
                dense
                :rules="[val => !!val || ' الزامی است']"
                clearable
                hide-label
                class="w-100"
                />
          </div>
            
            <!-- مدت زمان -->
            <div class="col-2 ">
              <label class="mb-1" for="fathersName">  سال فارغ التحصیلی</label>
              <q-input
                id="fathersName"
                type="number"
                v-model="model.timeEducation"
                placeholder="1402"
                outlined
                dense
                :rules="[val => !!val || '  الزامی است']"
                clearable
                hide-label
                class="w-100"
              />
            </div>
             <div class="col-6 ">
                <label class="mb-1" for="fathersName"> نام دانشگاه</label>
                <q-input
                    v-model="model.UniName"
                    placeholder=" نام دانشگاه  "
                    outlined
                    dense
                    :rules="[val => !!val || ' الزامی است']"
                    clearable
                    hide-label
                    class="w-100"
                />
            </div>
             <div class="col-6 ">
                <label class="mb-1" for="fathersName"> نام دانشگاه</label>
                <q-input
                    v-model="model.UniName"
                    placeholder=" نام دانشگاه  "
                    outlined
                    dense
                    :rules="[val => !!val || ' الزامی است']"
                    clearable
                    hide-label
                    class="w-100"
                />
            </div>
            
        </div>

       
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "ExperienceEducationRow",
  props: {
    value: {
      type: Object,
    }
  },
  data() {
    return {
      model: {
        Grade: "",
        Majere: "",
        timeEducation: "",
        UniName:""
        
      },
  
    };
  },

  // created() {
  //   this.model = this.value
  // }
 
};
</script>

<style scoped>
.rounded-xl {
  border-radius: 20px;
}
.font-weight-bold {
  font-weight: 700;
}
.font-weight-medium {
  font-weight: 500;
}
.qcardsection {
  direction: rtl;
}
.mb-1 {
  margin-bottom: 6px;
}
.gap-5{
  gap: 10px !important;
}
</style>
