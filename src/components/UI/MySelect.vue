<template>
  <div>
    <form>
      <label for="sort-select">{{}}</label>
      <select
        name="city"
        id="sort-select"
        @change="selectTerm($event)"
        :disabled="sortValue == ''"
      >
        <option value="" disabled selected>-- Выберите условие --</option>
        <option
          :value="item.value"
          v-for="(item, idx) in term"
          :key="idx"
          ref="opt"
        >
          {{ item.name }}
        </option>
      </select>
    </form>
  </div>
</template>

<script>
export default {
  name: "MySelect",
  
  props: {
    term: {
      type: Array,
    },
    termValue: {
      type: String,
    },
    sortValue: {
      type: String,
    },
  },
  methods: {
    selectTerm(e) {
      this.$emit("termForSort", e.target.value);
    },
  },
  computed: {},  
};
</script>

<style lang="scss" scoped></style>
