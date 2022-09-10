<template>
  <div id="account-info">
    <select
      name="countries"
      id="countrie"
      class="sc_select"
      @change="getSalesContact()"
      v-model="countryKey"
    >
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

    <div class="sc_card">
      <div class="sc_section">
        <figure class="sc_user-image">
          <img :src="'/no-image.jpg'" />
        </figure>

        <div class="sc_userinfo">
          <div class="sc_country">Hier Feld Land einfügen</div>
          <div class="sc_name">{{ username.name }}</div>
        </div>
      </div>

      <div class="sc_section">
        <div class="sc_details">
          <div class="sc_detail-item">
            <span>Phone:</span> {{ username.phone }}
          </div>
          <div class="sc_detail-item">
            <span>Mobile:</span> {{ username.phone }}
          </div>
          <div class="sc_detail-item">
            <span>Email:</span> {{ username.email }}
          </div>
          <div class="sc_detail-item">
            <span>Web:</span> https://{{ username.website }}
          </div>
        </div>

        <figure class="sc_qrcode">
          <img :src="'/qr.svg'" />
        </figure>

        <button class="sc-button et_pb_button_wrapper">
          <a class="et_pb_button et_pb_promo_button" href="link-zum-download"
            >Visitenkarte speichern</a
          >
        </button>
      </div>

      <div class="sc_card-oblique"></div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  setup() {
    const countryKey = ref(1);

    return {
      countryKey,
    };
  },
  props: {
    username: {
      type: Object,
      default: {},
    },
  },
  methods: {
    getSalesContact() {
      axios
        .get("https://jsonplaceholder.typicode.com/users/" + this.countryKey)
        .then((response) => {
          console.log(response.data);

          this.$emit("changeUsername", response.data);
        });
    },
  },
};
</script>
