<template>
  <div>
    <p class="addnew">
      <button class="btn btn-primary" @click="addContact()">Add New Contact</button>
    </p>
    <div id="example">
      <table id="list" class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Name</th><th>Tel</th><th>Address</th>
            <th>Photo</th><th>Edit / Delete</th>
          </tr>
        </thead>
        <tbody id="contacts">
          <tr :key="contact.no" v-for="contact in contactlist.contacts">
            <td>{{contact.name}}</td>
            <td>{{contact.tel}}</td>
            <td>{{contact.address}}</td>
            <td><img class="thumbnail" :src="contact.photo" @click="editPhoto(contact.no)"></td>
            <td>
              <button class="btn btn-primary" @click="editContact(contact.no)">Edit</button>
              <button class="btn btn-primary" @click="deleteContact(contact.no)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contactList',
  props: ['contactlist'],
  methods: {
    addContact() {
      this.$eventBus.$emit('addContactForm');
    },
    editContact(no) {
      this.$eventBus.$emit('editContactForm', no);
    },
    deleteContact(no) {
      if (confirm('Delete?') === true) {
        this.$eventBus.$emit('deleteContact', no);
      }
    },
    editPhoto(no) {
      this.$eventBus.$emit('editPhoto', no);
    },
  },
};
</script>

<style lang="scss" scoped>
.addnew {
  margin: 10px auto;
  max-width: 820px;
  min-width: 820px;
  padding: 40px 0 0 0;
  text-align: left;
}
#example {
  margin: 10px auto;
  max-width: 820px;
  min-width: 820px;
  padding: 0;
  position: relative;
  font: 13px "verdana";

  &.long {
    width: 100%;
  }
  &.short {
    width: 50%;
  }

  input, textarea, select {
    box-sizing: border-box;
    border: 1px solid #bebebe;
    padding: 7px;
    margin: 0;
    outline: none;
  }
}
#list {
  width: 800px;
  font: 13px "verdana";
  thead tr {
    color: yellow;
    background-color: purple;
  }
  th:nth-child(5n+1), td:nth-child(5n+1) {
    width: 200px;
  }
  th:nth-child(5n+2), td:nth-child(5n+2) {
    width: 150px;
  }
  th:nth-child(5n+3), td:nth-child(5n+3) {
    width: 250px;
  }
  th:nth-child(5n+4), td:nth-child(5n+4) {
    width: 60px;
  }
  th:nth-child(5n), td:nth-child(5n) {
    width: 150px;
  }
  th {
    padding: 10px 5px;
  }
  tr {
    border-bottom: solid 1px black;
  }
  td, th {
    text-align: center;
    vertical-align: middle;
  }
}
img.thumbnail {
  width: 48px;
  height: 48px;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  cursor: pointer;
}

</style>
