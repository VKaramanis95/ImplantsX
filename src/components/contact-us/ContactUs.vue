<template>
  <div class="contact-area ptb-100">
    <div class="container">
      <!-- Section Title -->
      <div class="section-title">
        <span class="sub-title">
          <i class="flaticon-hashtag-symbol"></i>
          Message Us
        </span>
        <h2>{{ $t('contact_title') }}</h2>
        <p>{{ $t('contact_p') }}</p>
      </div>

      <!-- Contact Form -->
      <div class="contact-form">
        <form id="contactForm" ref="form" @submit.prevent="sendEmail">
          <div class="row">
            <!-- First Name -->
            <div class="col-lg-6 col-md-6">
              <div class="form-group">
                <input type="text" name="first_name" v-model="formData.first_name" class="form-control" :placeholder="$t('form_fname')">
                <span v-if="errors.first_name" class="error">{{ errors.first_name }}</span>
              </div>
            </div>
            <!-- Last Name -->
            <div class="col-lg-6 col-md-6">
              <div class="form-group">
                <input type="text" name="last_name" v-model="formData.last_name" class="form-control" :placeholder="$t('form_lname')">
                <span v-if="errors.last_name" class="error">{{ errors.last_name }}</span>
              </div>
            </div>
            <!-- Email -->
            <div class="col-lg-6 col-md-6">
              <div class="form-group">
                <input type="email" name="user_email" v-model="formData.email" class="form-control" :placeholder="$t('form_email')">
                <span v-if="errors.email" class="error">{{ errors.email }}</span>
              </div>
            </div>
            <!-- Phone -->
            <div class="col-lg-6 col-md-6">
              <div class="form-group">
                <input type="tel" name="phone" v-model="formData.phone" class="form-control" :placeholder="$t('form_phone')">
                <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
              </div>
            </div>
            <!-- Message -->
            <div class="col-lg-12 col-md-12">
              <div class="form-group">
                <textarea name="message" v-model="formData.message" class="form-control" cols="30" rows="5" :placeholder="$t('form_message')"></textarea>
                <span v-if="errors.message" class="error">{{ errors.message }}</span>
              </div>
            </div>
            <!-- Checkbox -->
            <div class="col-12">
              <div class="form-group">
                <div class="form-check checkbox">
                  <input
                    name="gridCheck"
                    value="I agree to the terms and privacy policy."
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                    v-model="formData.agree"
                  />
                  <label class="form-check-label" for="gridCheck">
                    I agree to the
                    <router-link class="link style1" to="/terms-of-service">terms &amp; conditions</router-link>
                    and
                    <router-link class="link style1" to="/privacy-policy">privacy policy</router-link>
                  </label>
                  <span v-if="errors.agree" class="error">{{ errors.agree }}</span>
                </div>
              </div>
            </div>
            <!-- Submit Button -->
            <div class="col-lg-12 col-md-12">
              <button type="submit" class="default-btn">{{ $t('form_send') }}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactUs',
  data() {
    return {
      formData: {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: '',
        agree: false,
      },
      errors: {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: '',
        agree: ''
      },
      submissionStatus: null,
    };
  },
  methods: {
    sendEmail() {
      if (this.validateForm()) {
        emailjs.sendForm('service_78mwolq', 'template_6gyg9ln', this.$refs.form, 'WdpwOxF2-E9dpdfWf')
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            this.submissionStatus = 'success';
            this.resetForm();
            this.$router.push({ path: '/thanks' });
          })
          .catch((error) => {
            console.error('FAILED...', error);
            this.submissionStatus = 'error';
          });
      }
    },
    validateForm() {
      this.resetErrors();
      let isValid = true;

      // Validate First Name
      if (this.formData.first_name.trim() === '') {
        this.errors.first_name = 'First name is required';
        isValid = false;
      } else if (!/^[a-zA-Z]+$/.test(this.formData.first_name.trim())) {
        this.errors.first_name = 'First name should contain only letters.';
        isValid = false;
      }

      // Validate Last Name
      if (this.formData.last_name.trim() === '') {
        this.errors.last_name = 'Last name is required';
        isValid = false;
      } else if (!/^[a-zA-Z]+$/.test(this.formData.last_name.trim())) {
        this.errors.last_name = 'Last name should contain only letters.';
        isValid = false;
      }

      // Validate Email
      if (this.formData.email.trim() === '') {
        this.errors.email = 'Email is required';
        isValid = false;
      } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/.test(this.formData.email.trim())) {
        this.errors.email = 'Please provide a valid email address';
        isValid = false;
      }

      // Validate Phone
      if (this.formData.phone.trim() === '') {
        this.errors.phone = 'Phone number is required';
        isValid = false;
      } else if (!/^\+?\d{1,4}[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(this.formData.phone.trim())) {
        this.errors.phone = 'Please provide a valid phone number';
        isValid = false;
      }

      // Validate Message
      if (this.formData.message.trim() === '') {
        this.errors.message = 'Message is required';
        isValid = false;
      }

      // Validate Checkbox Agreement
      if (!this.formData.agree) {
        this.errors.agree = 'You must agree to the terms and privacy policy';
        isValid = false;
      }

      return isValid;
    },
    resetForm() {
      this.formData = {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: '',
        agree: false,
      };
      this.resetErrors();
    },
    resetErrors() {
      this.errors = {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: '',
        agree: ''
      };
    },
  },
};
</script>

<style scoped>
/* Styling for the form and checkbox */
.form-check {
  position: relative;
  margin-bottom: 1rem;
}

.form-check-input {
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
  cursor: pointer;
}

.form-check-label {
  display: inline-block;
  color: #333;
  font-size: 0.875rem;
}

.form-check-input:checked + .form-check-label {
  font-weight: bold;
  color: #007bff;
}

.error {
  display: block;
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
</style>
