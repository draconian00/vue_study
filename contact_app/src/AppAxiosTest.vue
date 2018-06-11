<template>
  <div id="app">
    <div class="container">
      <div class="form-group">
        <button @click="fetchContacts">get Contacts</button>
      </div>
      <div class="form-group">
        <input type="text" v-model="name" placeholder="input name">
        <input type="text" v-model="tel" placeholder="input tel">
        <input type="text" v-model="address" placeholder="input address">
        <button @click="addContact">add Contact</button>
      </div>
      <div class="form-group">
        <input type="text" v-model="no">
        <button @click="fetchContactOne">get one Contact</button>
      </div>
      <div class="form-group">
        <input type="text" v-model="no">
        <input type="text" v-model="name" placeholder="input name">
        <input type="text" v-model="tel" placeholder="input tel">
        <input type="text" v-model="address" placeholder="input address">
        <button @click="updateContact">update Contact</button>
      </div>
      <div class="form-group">
        <input type="text" v-model="no">
        <button @click="deleteContact">delete Contact</button>
      </div>
      <div class="form-group">
        <input type="text" v-model="no">
        <input type="file" ref="photofile" name="photo">
        <button @click="changePhoto">change Photo</button>
      </div>
    </div>
    <span>print JSON</span>
    <div id="result" class="container">
      <xmp>{{ result }}</xmp>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'app',
  data() {
    return {
      no: 0,
      name: '',
      tel: '',
      address: '',
      result: null,
    };
  },
  methods: {
    fetchContacts() {
      this.$axios.get('/api/contacts', {
        params: {
          pageno: 1,
          pagesize: 5,
        },
      })
        .then((response) => {
          console.log(response);
          this.result = response.data;
        })
        .catch((ex) => {
          console.log('ERROR', ex);
        });
    },
    addContact() {
      this.$axios.post('/api/contacts', {
        name: this.name,
        tel: this.tel,
        address: this.address
      })
        .then((response) => {
          console.log(response);
          this.result = response.data;
          this.no = response.data.no;
        })
        .catch((ex) => {
          console.log('ERROR', ex);
        });
    },
    fetchContactOne() {
      this.$axios.get('/api/contacts/' + this.no)
        .then((response) => {
          console.log(response);
          this.result = response.data;
        })
        .catch((ex) => {
          console.log('ERROR', ex);
        });
    },
    updateContact() {
      this.$axios.put('/api/contacts/' + this.no, {
        name: this.name,
        tel: this.tel,
        address: this.address,
      })
        .then((response) => {
          console.log(response);
          this.result = response.data;
          this.no = response.data.no;
        })
        .catch((ex) => {
          console.log('ERROR', ex);
        });
    },
    deleteContact() {
      this.$axios.delete('/api/contacts/' + this.no)
        .then((response) => {
          console.log(response);
          this.no = 0;
          this.result = response.data;
        })
        .catch((ex) => {
          console.log('ERROR', ex);
        });
    },
    changePhoto() {
      let data = new FormData();
      const file = this.$refs.photofile.files[0];
      data.append('photo', file);

      this.$axios.post('/api/contacts/' + this.no + '/photo', data)
        .then((response) => {
          console.log(response);
          this.result = response.data;
        })
        .catch((ex) => {
          console.log('ERROR', ex);
        });
    },
  },
};
</script>

<style>
@import url("https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");

#app {
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: cetner;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  border: solid 1px gray;
  padding: 10px;
  margin-bottom: 10px;
  text-align: left;
}
#result {
  text-align: left;
  padding: 20px;
  border: solid 1px black;
}
.form-group {
  border: dashed 1px gray;
  padding: 5px 5px 5px 20px;
}
</style>
