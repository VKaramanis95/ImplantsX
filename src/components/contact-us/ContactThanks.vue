<template>
    <div class="contact-area ptb-100">
        <div class="container">
            <div class="contact-form border">
                <u><h2 class="animated">{{ $t('contact_thanks_title') }}</h2></u>
                <p class="animated">{{ $t('contact_thanks_p') }}</p>
                <p class="animated">{{ $t('contact_thanks_p1') }} <b><a href="tel:+302721098891">{{ $t('contact_thanks_p_phone') }}</a></b>{{ $t('contact_thanks_p1_1') }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactThanks'
}
</script>

<style scoped>

.contact-area {
    border: 2px solid #e0e0e0; /* Border color */
    border-radius: 10px; /* Border radius */
    padding: 50px; /* Reduced padding for small screens */
    background-color: #06a3da; /* Background color for the contact area */
}

.contact-form {
    margin-top: 20px;
    background-color:white;
}

h2, p {
    opacity: 0; /* Initially hide the text */
    animation: fadeInUp 1s forwards; /* Apply animation */
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(200px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.border {
    border: 1px solid #ccc; /* Form border */
    padding: 20px; /* Padding */
    border-radius: 3px; /* Border radius */
}

/* Media Query for Small Screens */
@media screen and (max-width: 768px) {
    .contact-area {
        padding: 20px; /* Adjusted padding for smaller screens */
    }
    p {
        font-size: 14px; /* Decreased font size for smaller screens */
    }
}
</style>
