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
                  <input type="text" name="first_name" v-model="formData.first_name" class="form-control" :placeholder="$t('form_fname')" required>
                  <span v-if="errors.first_name" class="error">{{ errors.first_name }}</span>
                </div>
              </div>
              <!-- Last Name -->
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <input type="text" name="last_name" v-model="formData.last_name" class="form-control" :placeholder="$t('form_lname')" required>
                  <span v-if="errors.last_name" class="error">{{ errors.last_name }}</span>
                </div>
              </div>
              <!-- Email -->
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <input type="email" name="user_email" v-model="formData.email" class="form-control" :placeholder="$t('form_email')" required>
                  <span v-if="errors.email" class="error">{{ errors.email }}</span>
                </div>
              </div>
              <!-- Phone -->
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <input type="tel" name="phone" v-model="formData.phone" class="form-control" :placeholder="$t('form_phone')" required>
                  <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
                </div>
              </div>
              <!-- Message -->
              <div class="col-lg-12 col-md-12">
                <div class="form-group">
                  <textarea name="message" v-model="formData.message" class="form-control" cols="30" rows="5" :placeholder="$t('form_message')" required></textarea>
                  <span v-if="errors.message" class="error">{{ errors.message }}</span>
                </div>
              </div>
              <!-- Submission Status Messages -->
              <div v-if="submissionStatus === 'success'" class="col-lg-12 col-md-12 success-message">
                Your message has been successfully sent!
              </div>
              <div v-else-if="submissionStatus === 'error'" class="col-lg-12 col-md-12 error-message">
                An error occurred. Please try again later.
              </div>
              <!-- Submit Button -->
              <div class="col-lg-12 col-md-12">
                <button type="submit" class="default-btn">{{ $t('form_send') }}</button>
              </div>
            </div>
          </form>
        </div>
  
        <!-- Contact Information -->
        <div class="contact-info">
          <div class="contact-info-content">
            <h3>{{ $t('contact_reachout') }}</h3>
            <h2>
              <a href="tel:+302721098891">+30 2721098891</a>
              <span>{{ $t('contact_or') }}</span>
              <a href="mailto:smilemakeover4u@gmail.com">smilemakeover4u@gmail.com</a>
            </h2>
            <!-- Social Links -->
            <ul class="social">
              <li><a href="https://twitter.com/" target="_blank"><i class='bx bxl-twitter'></i></a></li>
              <li><a href="https://www.youtube.com/" target="_blank"><i class='bx bxl-youtube'></i></a></li>
              <li><a href="https://www.facebook.com/" target="_blank"><i class='bx bxl-facebook'></i></a></li>
              <li><a href="https://www.linkedin.com/" target="_blank"><i class='bx bxl-linkedin'></i></a></li>
              <li><a href="https://www.instagram.com/" target="_blank"><i class='bx bxl-instagram'></i></a></li>
            </ul>
          </div>
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
        },
        errors: {
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          message: '',
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
        } else {
          this.submissionStatus = null;
        }
      },
      resetForm() {
        this.formData = {
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          message: '',
        };
        this.resetErrors();
      },
      validateForm() {
        this.resetErrors();
        let isValid = true;
  
        // Validation logic for each field
        // Example validation:
        if (!/^[a-zA-Z]+$/.test(this.formData.first_name.trim())) {
          this.errors.first_name = 'Please provide a valid first name';
          isValid = false;
        }
  
        return isValid;
      },
      resetErrors() {
        this.errors = {
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          message: '',
        };
      },
    },
  };
  </script>
  