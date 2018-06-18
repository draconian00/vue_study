<template>
  <div class="modal">
    <div class="form" @keyup.esc="cancelEvent">
      <h3 class="heading">:: {{ headingText }}</h3>
      <div v-if="mode === 'update'" class="form-group">
        <label>Number</label>
        <input type="text" name="no" class="long" disabled v-model="contact.no">
      </div>
      <div class="form-group">
        <label>Name</label>
        <input type="text" name="name" class="long"
          v-model="contact.name" ref="name" placeholder="input name">
      </div>
      <div class="form-group">
        <label>Tel</label>
        <input type="text" name="tel" class="long" v-model="contact.tel" placeholder="input tel">
      </div>
      <div class="form-group">
        <label>Address</label>
        <input type="text" name="address" class="long"
          v-model="contact.address" placeholder="input address">
      </div>
      <div class="form-group">
        <div>&nbsp;</div>
        <input type="button" class="btn btn-primary" :value="btnText" @click="submitEvent()">
        <input type="button" class="btn btn-primary" value="cancel" @click="cancelEvent()">
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import { mapState } from 'vuex';
import Constant from '../constant';

export default {
  name: 'contactForm',
  computed: _.extend(
    {
      btnText() {
        if (this.mode !== 'update') return 'Add';
        return 'Edit';
      },
      headingText() {
        if (this.mode !== 'update') return 'Add new contact';
        return 'Update contact';
      },
    },
    mapState(['mode', 'contact']),
  ),
  mounted() {
    this.$refs.name.focus();
  },
  methods: {
    submitEvent() {
      if (this.mode === 'update') {
        this.$store.dispatch(Constant.UPDATE_CONTACT);
      } else {
        this.$store.dispatch(Constant.ADD_CONTACT);
      }
    },
    cancelEvent() {
      this.$store.dispatch(Constant.CANCEL_FORM);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, .4);
}
.form {
  background-color: white;
  margin: 100px auto;
  max-width: 400px;
  min-width: 200px;
  font: 13px "verdana";
  padding: 10px;
  div {
    padding: 0;
    display: block;
    margin-top: 10px;
  }
  label {
    text-align: left;
    margin: 0 0 3px 0;
    padding: 0;
    display: block;
    font-weight: bold;
  }
  input, textarea, select {
    box-sizing: border-box;
    border: 1px solid #bebebe;
    padding: 7px;
    margin: 0;
    outline: none;
  }
  .long {
    width: 100%;
  }
  .btn:hover {
    background: #4691A4;
  }
  .heading {
    background: #33A17F;
    font-weight: 300;
    text-align: left;
    padding: 20px;
    color: #fff;
    margin: 5px 0 30px 0;
    padding: 10px;
    min-width: 200px;
    max-width: 400px;
  }
}
</style>
