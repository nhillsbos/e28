<template>
  <div id="contactPage">
    <div class="contactHeader">
      <h1 class="display-1 text-center">Contact us</h1>
    </div>
    <div v-if="!isSent" id="contactForm">
      <div class="row">
        <div class="col-lg-4"></div>
        <form @submit.prevent="submitForm" class="myForm col-lg-8" action>
          <p>Name</p>
          <input
          data-test="name-input"
            type="text"
            name="name"
            v-model="$v.form.name.$model"
          />

          <br />
          <div class="danger-btn" v-if="$v.form.name.$error">
            <div  class="warningfrm" v-if="!$v.form.name.required">Name must be included</div>
            <div class="warningfrm" 
              v-if="!$v.form.name.minLength"
            >Name must be at least 4 characters long. If you need more letters, add "Master" at the beginning!</div>
            <div class="warningfrm" 
              v-if="!$v.form.name.maxLength"
            >This name is too long. Do you have a nick-name?</div>
          </div>
          <br />
          <p>E-mail</p>
          <input data-test="email-input" v-model="$v.form.email.$model" type="text" name="email" />
          <br />
          <div class="warningfrm" v-if="$v.form.email.$error">
            
            Please enter a valid e-mail.
            </div>
          <span>Questions or Comments</span>
          <br />
          <textarea data-test="comments-input" v-model="$v.form.comments.$model" name="comments" rows="15" cols="50" />
          <div v-if="$v.form.comments.$error">
<p>Please keep the message brief (under 85 characters!).</p>
          </div>
          <br />
          <button data-test="submit-btn"  type="submit" >Submit</button>
          <div data-test="error-msg" v-if='formHasErrors'>Please correct the above errors</div>
        </form>
        <div class="col-lg-4"></div>
      </div>
    </div>
    <div class="text-center" v-if="isSent">
      <h4 data-test="thankyou-msg" class="display-4 text-center">Message received!<br>

        <small>{{ form.name }}, thank you for sending us this message!</small>
      </h4>
      
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  email
} from "vuelidate/lib/validators";

export default {
  data: function() {
    return {
      isSent: false,
      formHasErrors: false,
      form: {
        name: null,
        email: null,
        comments: null,
      },
    };
  },
  methods: {
    submitForm() {
      if (!this.formHasErrors) {
        
        this.isSent = !this.isSent;

      }
    }
      ,
      anotherMsg() {
        
        //make visible again
        this.isSent = !this.isSent;
      },
    },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(20)
      },
      email: {
        email, 
        required
      },
      comments: {
        maxLength: maxLength(125)
      },
    }
  },
    watch: {
        '$v.$anyError': function() {
            this.formHasErrors = this.$v.$anyError;
        }
    },
};
</script>

