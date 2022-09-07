<template>
    <div id='account-info'>

        <div class="card">
            <select name="countries" id="countries" class="sales-contacts-select2" style="width: 100%"
                @change="getSalesContact()" v-model="countryKey">
                <optgroup label="Europe">
                    <option value="1">Germany</option>
                    <option value="2">France</option>
                    <option value="3">Italy</option>
                </optgroup>
                <optgroup label="South America">
                    <option value="4">Brazil</option>
                    <option value="5">Argentinia</option>
                </optgroup>
            </select>
        </div>



        <div class="grid-container">
            <div class="sc_image">
                <img :src="'/no-image.jpg'" />
            </div>

            <div class="sc_country">{{username.email}}</div>
            <div class="sc_name">{{username.name}}</div>

            <div class="sc_details">
                <span><b>Phone:</b> {{username.phone}}</span><br />
                <span><b>Mobile:</b> {{username.phone}}</span><br />
                <span><b>Email:</b> {{username.email}}</span><br />
                <span><b>Web:</b> https://{{username.website}}</span><br />
            </div>

            <div class="sc_qrcode">' . $qr_code . '</div>
        </div>
    </div>
</template>
    
<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
    setup() {
        const countryKey = ref(1)

        return {
            countryKey
        }
    },
    props: {
        username: {
            type: Object,
            default: {}
        }
    },
    methods: {
        getSalesContact() {
            axios
                .get('https://jsonplaceholder.typicode.com/users/' + this.countryKey)
                .then((response) => {
                    console.log(response.data)

                    this.$emit('changeUsername', response.data)
                });
        }
    }
}
</script>