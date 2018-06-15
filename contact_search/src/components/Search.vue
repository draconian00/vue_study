<template>
  <p>
    Name : <input type="text"
      v-model.trim="name" :placeholder="placeholder"
      @keyup.enter="keyupEvent">
  </p>
</template>

<script>
import Constant from '../constant';

export default {
  name: 'search',
  props: ['placeholder'],
  data() {
    return {
      name: '',
    };
  },
  methods: {
    keyupEvent(e) {
      const val = e.target.value;
      if (val.length >= 2) {
        const rt = this.$store.dispatch(Constant.SEARCH_CONTACT, { name: val });
        console.log(rt);
        this.name = '';
      } else {
        this.$store.dispatch(Constant.SEARCH_CONTACT, { name: '' });
      }
    },
  },
};
</script>

<style>

</style>
