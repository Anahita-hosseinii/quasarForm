<template>
  <q-card
    flat
    bordered
    class="bg-white q-pa-lg q-mb-xl shadow-3 rounded-xl bg-blue-1"
    style=" width: 100%; margin: 20px auto"
  >
    <div class="q-pa-sm" style="width: 100%;">
      <p class="text-h5 text-center">اطلاعات هویتی</p>
    </div>


    <q-card-section class="qcardsection q-mt-md ">
      <div class="row col-12 justify-center items-center gap-5 ">

        <!-- نام و نام خانوادگی -->
        <div class="col-5">
          <label class="mb-1" for="name">نام و نام خانوادگی</label>
            <InputField
              id="name"
              v-model="model.name"
              placeholder="مثال: علی کاظمی"
              outlined
              dense
              :rules="[
                 val => !!val || 'نام الزامی است',
                 val => /^[آ-یa-zA-Z\s]+$/.test(val) || 'نام فقط شامل حروف باشد'
              ]"
              clearable
              hide-label
              class="w-100"
            />
        </div>

        <!-- نام پدر -->
        <div class="col-5 ">
          <label class="mb-1" for="fathersName">نام پدر</label>
          <InputField
            id="fathersName"
            v-model="model.fathersName"
            placeholder="مثال: محمد"
            outlined
            dense
            :rules="[
              val => !!val || 'نام الزامی است',
              val => /^[آ-یa-zA-Z\s]+$/.test(val) || 'نام فقط شامل حروف باشد'
            ]"
            clearable
            hide-label

            class="w-100"
          />
        </div>

        <!-- کد ملی -->
        <div class=" col-5">
          <label class="mb-1" for="identityCart">کد ملی</label>
          <InputField
            id="identityCart"
            v-model="model.IdentityCart"
            placeholder="۱۰ رقم کد ملی"
            maxlength="10"
            type="number"
            outlined
            dense
            :rules="[
              val => !!val || 'کد ملی الزامی است',
              val => /^\d{10}$/.test(val) || 'کد ملی باید ۱۰ رقمی باشد'
            ]"
            clearable
            hide-label
            class="w-100"
          />
        </div>

        <!-- شماره تماس -->
        <div class=" col-5 ">
          <label class="mb-1" for="phoneNumber">شماره تماس</label>
          <InputField
            id="phoneNumber"
            v-model="model.phoneNumber"
            placeholder="مثال: 09123456789"
            type="number"
            outlined
            dense
            :rules="[val => !!val || 'شماره تماس الزامی است']"
            clearable
            hide-label
            class="w-100"
          />
        </div>

        <!-- تاریخ تولد -->
        <div class="col-5 d-flex flex-column">
          <label class="" for="berth">تاریخ تولد</label>
          <q-input
            id="berth"
            v-model="model.berth"
            placeholder="yyyy-mm-dd"
            outlined
            dense
            readonly
            hide-label
            class="w-100"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer text-primary">
                <q-popup-proxy
                  transition-show="scale"
                  transition-hide="scale"
                  cover
                  v-slot="{ hide }"
                >
                  <q-date
                    v-model="model.berth"
                    mask="YYYY-MM-DD"
                    @input="hide()"
                    locale="fa-ir"
                    :default-year-month="model.berth || undefined"
                  />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <!-- شهر محل تولد -->
        <div class="col-5 d-flex flex-column q-mt-md ">
          <label class="" for="city">شهر محل تولد</label>
          <q-select
            id="city"
            v-model="model.city"
            label="شهر محل تولد"
            :options="cities"
            map-options
            outlined
            dense
            :rules="[val => !!val || 'شهر الزامی است']"
            placeholder="شهر خود را انتخاب کنید"
            clearable
          />
        </div>

        <!-- جنسیت -->
        <div class="col-10">
          <div class="text-subtitle2 text-right q-mb-sm text-grey-8 font-weight-medium">جنسیت:</div>
          <q-option-group
            v-model="model.uniSEx"
            :options="genderOptions"
            type="radio"
            inline
            color="indigo-9"
          />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import InputField from 'src/components/Modules/InputField.vue';

export default {
  name: "PersonalInfoRow",
  components:{InputField},
  props: {
    value: Object
  },
  data() {
    return {
      model: {
        name: "",
        fathersName: "",
        IdentityCart: "",
        uniSEx: "",
        berth: "",
        city: "",
        phoneNumber: ""
      },
      genderOptions: [
        { label: "مرد", value: "male" },
        { label: "زن", value: "female" }
      ],
      cities: [
        { label: "تهران", value: "tehran" },
        { label: "مشهد", value: "mashhad" },
        { label: "اصفهان", value: "esfahan" },
        { label: "شیراز", value: "shiraz" }
      ]
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
