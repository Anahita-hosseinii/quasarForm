<template>
  <div style="width: 80%;">
   
    <div class=" row justify-center items-center  q-pa-md" style="width: 100%;" >
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
