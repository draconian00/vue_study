<template>
  <div>
    <button class="region" v-for="region in regions" :key="region"
      :class="isSelected(region)" @click="changeRegion({region})">
      {{ region }}
    </button>
  </div>
</template>

<script>
import _ from 'lodash';
import { mapGetters, mapMutations } from 'vuex';
import constant from '../constant';


export default {
  name: 'RegionButtons',
  computed: mapGetters([
    'regions',
    'currentRegion',
  ]),
  methods: _.extend(
    {
      isSelected(region) {
        if (region === this.currentRegion) return { selected: true };
        // eslint-disable-next-line
        else return { selected: false };
      },
    },
    mapMutations([
      constant.CHANGE_REGION,
    ]),
  ),
};
</script>

<style>
button.region {
  text-align: center;
  width: 80px;
  margin: 2px;
  border: solid 1px gray;
}
button.selected {
  background-color: purple;
  color: aqua;
}
</style>
