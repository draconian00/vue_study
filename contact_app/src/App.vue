<template>
  <div id="container">
    <div class="page-header">
      <h1 clsss="text-center">연락처 관리 애플리케이션</h1>
      <p>(Dynamic Component + Vuex + Axios)</p>
    </div>
    <component :is="currentView"></component>
    <contact-list></contact-list>
    <paginate ref="pagebuttons"
      :page-count="totalpage"
      :page-range="7"
      :margin-pages="3"
      :click-handler="pageChanged"
      :prev-text="'이전'"
      :next-text="'다음'"
      :container-class="'pagination'"
      :page-class="'page-item'">
    </paginate>
  </div>
</template>

<script>
import _ from 'lodash';
import { mapState } from 'vuex';
import Paginate from 'vuejs-paginate';

import ContactList from './components/ContactList.vue';
import ContactForm from './components/ContactForm.vue';
import UpdatePhoto from './components/UpdatePhoto.vue';
// import CONF from './config';
import Constant from './constant';

export default {
  name: 'app',
  components: {
    ContactList, ContactForm, UpdatePhoto, Paginate,
  },
  computed: _.extend(
    {
      totalpage() {
        const { totalcount, pagesize } = this.contactlist;
        return Math.floor((totalcount - 1) / pagesize) + 1;
      },
    },
    mapState(['contactlist', 'currentView']),
  ),
  watch: {
    'contactlist.pageno': (page) => {
      this.$refs.pagebuttons.selected = page - 1;
    },
  },
  mounted() {
    this.$store.dispatch(Constant.FETCH_CONTACTS);
  },
  methods: {
    pageChanged(page) {
      this.$store.dispatch(Constant.FETCH_CONTACTS, { pageno: page });
    },
  },
};
</script>

<style>
@import url("https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");

#container {
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
