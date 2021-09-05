<template>
  <v-main>
    <v-container>
      <div class="about-text p-2 mt-10 text-center">
        <h1 class="mb-5">CONTACT US</h1>
      </div>

      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-textarea
          v-model="message"
          :rules="messageRules"
          label="Message"
          required
        ></v-textarea>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Submit
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset">
          Reset
        </v-btn>
      </v-form>
    </v-container>
    <div class="googlemaps mt-15">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41645.261057097036!2d14.460519868341779!3d35.89669663492466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e4561bfdeb727%3A0xc90a44629ce2a674!2sNGP%20EMS%20Limited!5e0!3m2!1ses-419!2smt!4v1630834615599!5m2!1ses-419!2smt"
        width="100%"
        height="550"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </v-main>
</template>

<script>
export default {
  name: "Contact",

  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    message: "",
    messageRules: [
      (v) => !!v || "Message is required",
      (v) => (v && v.length >= 10) || "Message must be more than 10 characters",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
