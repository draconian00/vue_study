<template>
  <div>
    <h1>Contacts</h1>
    <div class="wrapper">
      <div class="box" v-for="c in contacts" :key="c.no">
        <span @click="navigate(c.no)" style="cursor:pointer">[ {{c.name}} ]</span>
        <!--
          <router-link :to="{ name: 'contactbyno', params: { no:c.no } }">{{c.name}}</router-link>
        -->
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import contactlist from '../ContactList';

export default {
  name: 'contacts',
  data() {
    return {
      contacts: contactlist.contacts,
    };
  },
  methods: {
    navigate(no) {
      // eslint-disable-next-line
      if (confirm('navigate?')) {
        this.$router.push(
          { name: 'contactbyno', params: { no } },
          () => { console.log('complete navigate to : /contacts/', no); },
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #fff;
  clear: both;
  display: table;
}
.box {
  float: left;
  background-color: aqua;
  border-radius: 5px;
  padding: 10px;
  margin: 3px;
  text-align: center;
  font-size: 120%;
  width: 100px;
  font-weight: bold;
}
a:link, a:visited {
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
</style>
