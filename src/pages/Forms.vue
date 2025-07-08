<template>
  <q-page class="w-100 column items-center q-pa-md">
    <DynamicForms/>
    <!-- <q-form
      bordered
      class="formes q-gutter-md q-pa-md q-mt-md"

    
    >
  
    <q-input label="firstname"/>
    <q-input label="LastName"/>


    
    </q-form> -->
  </q-page>
</template>

<script>
import DynamicForms from 'src/components/Forms/DynamicForms.vue'
export default {
  components: { DynamicForms },
  name: 'PageIndex'
}
</script>
<style>

.formes{
  width: 50%;
  border: 2px solid #512DA8;
  border-radius:7px !important;
}
.titleFormes{
  font-size: 35px !important;
}
</style>