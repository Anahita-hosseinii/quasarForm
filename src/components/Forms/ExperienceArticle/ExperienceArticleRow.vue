<template>
  <q-card
    flat
    bordered
    class="bg-white q-pa-md  shadow-3 rounded-xl bg-blue-1"
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
        <div class="row q-col-gutter-md">
            <!-- مدرک ها -->
           <div class="col-md-8 col-12">
                <label class="mb-1" for="ducuments"> مدرک ها</label>
                <q-input
                id="ducuments"
                v-model="model.Ducuments"
                placeholder="مثال : JSمجتمع فنی"
                outlined
                dense
                :rules="[val => !!val || '  الزامی است']"
                hide-label
                class="w-100"
                />
            </div>
            <!--   از تاریخ-->
            <div class="col-md-2 col-12">
            <label class="mb-1" for="ftomDate"> از تاریخ</label>
                <q-input
                id="ftomDate"
                type="number"
                v-model="model.FromDate"
                placeholder="مثال:1404"
                outlined
                dense
                :rules="[
                    val => !!val || 'فیلد الزامی است',
                    val => /^\d{4}$/.test(val) || 'سال باید ۴ رقمی باشد',
                    val => (+val >= 1398 && +val <= 1404) || 'سال باید بین ۱۳۹۸ تا ۱۴۰۴ باشد'
                ]"
                hide-label
                class="w-100"
                />
            </div>

            <!--  تا تاریخ -->
            <div class="col-md-2 col-12 ">
            <label class="mb-1" for="fathersName"> تا تاریخ</label>
            <q-input
                placeholder="مثال:  1405"
                type="number"
                v-model="model.ToDate"
                outlined
                dense
                :rules="[
                    val => !!val || 'فیلد الزامی است',
                    val => /^\d{4}$/.test(val) || 'سال باید ۴ رقمی باشد',
                    val => (+val >= 1398 && +val <= 1404) || 'سال باید بین ۱۳۹۸ تا ۱۴۰۴ باشد'
                ]"
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
  name: "ExperienceRow",
  props: {
    value: Object
  },
  data() {
    return {
      model: {
        Ducuments:"",
        FromDate:"",
        ToDate:""
        
      },
  
    };
  },
 
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
