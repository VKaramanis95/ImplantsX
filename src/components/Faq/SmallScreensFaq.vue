<template>
    <div class="faq-area ptb-100">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">
                    <i class="flaticon-hashtag-symbol"></i>
                    Frequently Asked Questions
                </span>
                <h2>Frequently Asked Questions:</h2>
                <p></p>
            </div>

            <div class="faq-accordion">
                <accordion>
                    <accordion-item>
                        <template v-slot:accordion-trigger>
                            <button class="accordion-button">
                                <i class='bx bx-plus'></i> 
                                What is Personal Liability umbrella coverage?
                            </button>
                        </template>
                        <template v-slot:accordion-content>
                            <accordion-item>
                                All on 4
                            </accordion-item>
                        </template>
                    </accordion-item>
                    <accordion-item>
                        <template v-slot:accordion-trigger>
                            <button class="accordion-button">
                                <i class='bx bx-plus'></i> 
                                How do I print my Auto insurance ID card?
                            </button>
                        </template>
                        <template v-slot:accordion-content>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        </template>
                    </accordion-item>
                    <accordion-item>
                        <template v-slot:accordion-trigger>
                            <button class="accordion-button">
                                <i class='bx bx-plus'></i> 
                                What kinds of Auto insurance discounts are available?
                            </button>
                        </template>
                        <template v-slot:accordion-content>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        </template>
                    </accordion-item>
                    <accordion-item>
                        <template v-slot:accordion-trigger>
                            <button class="accordion-button">
                                <i class='bx bx-plus'></i> 
                                How do I know what deductible applies to my policy?
                            </button>
                        </template>
                        <template v-slot:accordion-content>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        </template>
                    </accordion-item>
                    <accordion-item>
                        <template v-slot:accordion-trigger>
                            <button class="accordion-button">
                                <i class='bx bx-plus'></i> 
                                If I am moving, will I need to request a new agent?
                            </button>
                        </template>
                        <template v-slot:accordion-content>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        </template>
                    </accordion-item>
                </accordion>
            </div>
        </div>
    </div>
</template>

<script>
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";

export default {
    name: 'Faq',
    components: {
        Accordion,
        AccordionItem
    },
}
</script>