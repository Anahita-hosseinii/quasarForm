<template>
  <div>
    <q-input
    :value="value"
      :placeholder="placeholder"
      :label="label"
      outlined
      dense
      :rules="rules"
      :clearable="clearable"
      hide-label
      class="w-100"
      :type="type"
      @input="onInput"
      />
  </div>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    value: [String, Number],
    label: String,
    rules: Array,
    clearable: {
      type: Boolean,
      default: true
    },
    placeholder: String,
    type: {
      type: String,
      default: 'text'
    },
   
  },
  methods :{
    onInput(val){
      this.$emit('input',val)
    }
  }
}
</script>