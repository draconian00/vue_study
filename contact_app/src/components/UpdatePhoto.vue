<template>
  <div class="modal">
    <div class="form" @keyup.esc="cancelEvent">
      <form method="post" enctype="multipart/form-data">
      <h3 class="heading">:: Update Photo</h3>
      <input type="hidden" name="no" class="long" disabled v-model="contact.no">
      <div>
        <label>Current Photo</label>
        <img class="thumb" :src="contact.photo">
      </div>
      <div>
        <label>Choose Photo</label>
        <input ref="photofile" type="file" name="photo" class="long btn btn-default">
      </div>
      <div>
        <div>&nbsp;</div>
        <input type="button" class="btn btn-primary" value="change" @click="photoSubmit()">
        <input type="button" class="btn btn-primary" value="cancel" @click="cancelEvent">
      </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'updatePhoto',
  props: ['contact'],
  methods: {
    cancelEvent() {
      this.$eventBus.$emit('cancel');
    },
    photoSubmit() {
      const file = this.$refs.photofile.files[0];
      this.$eventBus.$emit('updatePhoto', this.contact.no, file);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  z-index: 1;
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, .4);
}
.form {
  z-index: 10;
  background-color: white;
  margin: 100px auto;
  max-width: 400px;
  min-width: 200px;
  padding: 10px;
  font: 13px "verdana";
  div {
    padding: 0;
    display: block;
    margin: 10px 0 0 0;
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
img.thumb {
  width: 160px;
}
</style>
