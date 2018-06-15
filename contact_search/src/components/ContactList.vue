<template>
  <div>
    <table id="list">
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Tel</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody id="contacts">
        <tr v-for="contact in contacts" :key="contact.no">
          <td>{{ contact.no }}</td>
          <td>{{ contact.name }}</td>
          <td>{{ contact.tel }}</td>
          <td>{{ contact.address }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'contact-list',
  computed: mapState(['contacts']),
};
</script>

<style lang="scss">
#list {
  width: 600px;
  border: 1px solid black;
  border-collapse: collapse;

  td, th {
    border: 1px solid black;
    text-align: center;
  }

  > thead > tr {
    color: yellow;
    background-color: purple;
  }
}
</style>
