<script>
import { reactive } from 'vue';
import AccountInfo from './components/AccountInfo.vue';

export default {
  components: {
    AccountInfo
  },
  setup() {
    const sc = reactive({
      test: '123'
    })

    return {
      sc
    }
  },
  data() {
    return {
      user: {
        username: {}
      }
    }
  },
  methods: {
    changeUsername(username) {
      this.user.username = username;
    }
  }
}
</script>

<template>
  <div>
    <account-info :username="user.username" @changeUsername="changeUsername($event)" />
  </div>
</template>
