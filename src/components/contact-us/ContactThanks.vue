<template>
    <div class="contact-area ptb-100">
        <div class="container">
            <div class="contact-form border">
                <u><h2 class="animated">Thank you for reaching out our clinic!</h2></u>
                <p class="animated">Your message has been received, and we greatly appreciate your interest in Smile Make Over. Our team is dedicated to providing you with the best possible service, and we will get back to you as soon as possible.</p>
                <p class="animated">In the interim, should you have any pressing questions or require immediate assistance, please don't hesitate to reach out to us directly at <b><a href="tel:+302721098891">+30 2721098891</a></b> Your satisfaction and comfort are our top priorities, and we eagerly anticipate the opportunity to assist you further in our dental clinic.</p>
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
