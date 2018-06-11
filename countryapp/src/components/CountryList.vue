<template>
  <div id="example">
    <table id="list">
      <thead>
        <tr>
          <th>번호</th>
          <th>국가명</th>
          <th>수도</th>
          <th>지역</th>
        </tr>
      </thead>
      <tbody id="contacts">
        <tr v-for="c in countries" :key="c.no">
          <td>{{ c.no }}</td>
          <td>{{ c.name }}</td>
          <td>{{ c.capital }}</td>
          <td>{{ c.region }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import constant from '../constant';

export default {
  name: 'CountryList',
  computed: mapGetters({
    countries: 'countriesByRegion',
  }),
};
</script>

<style lang="scss">
#list {
  width: 520px;
  border: 1px solid black;
  border-collapse: collapse;

  td, th {
    border: 1px solid black;
    text-align: center;
  }

  td:nth-child(4n+1), th:nth-child(4n+1) {
    width: 100px;
  }
  td:nth-child(4n+2), th:nth-child(4n+3) {
    width: 150px;
  }
  td:nth-child(4n+3), th:nth-child(4n+2) {
    width: 150px;
  }
  td:nth-child(4n), th:nth-child(4n) {
    width: 120px;
  }
  > thead > tr {
    color: yellow;
    background-color: purple;
  }
}
</style>
