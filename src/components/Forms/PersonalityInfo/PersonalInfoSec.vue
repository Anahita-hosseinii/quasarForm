<template>
  <div class=" responsive-container ">
   
    <div class=" row justify-center items-center " >
      <PersonalInfoRow
        v-for="(person, index) in personalInfoList"
        v-model="personalInfoList[index]"
        :person="person"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import PersonalInfoRow from "./PersonalInfoRow";

export default {
  name: "PersonalInfoSection",
  components: { PersonalInfoRow },
  data() {
    return {
      personalInfoList: [
        this.createEmptyPerson(),
      ],
    };
  },
  methods: {
    createEmptyPerson() {
      return {
        id: Math.random(),
        name: "",
        fathersName: "",
        IdentityCart: "",
        uniSEx: "",
        berth: "",
        city: "",
        phoneNumber: "",
        addressEmail: "",
        addressHome: "",
        jobOffer: "",
      };
    },
    
  },
};
</script>
<style >
.responsive-container {
  width: 100%;
}

@media (min-width: 1024px) {
  .responsive-container {
    width: 80%;
  }
}
</style>