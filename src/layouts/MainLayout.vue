<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated fixed  class="my-header bg-deep-purple-8 q-pa-sm" >
      <q-toolbar class="">
        <q-toolbar-title class="absolute-center">
          <p class="titleFormes q-mt-md">فرم استخدامی</p>
            
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    

    <q-page-container class="bg-blue-grey-1 ">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
}
</script>
<style>
.my-header{
  width: 100% !important;
  left: 0 !important;
  right: 0 !important;
  z-index: 999 !important;
}
</style>
