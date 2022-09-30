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
      console.log(e.target.value);
      this.$emit("termForSort", e.target.value);
    },
  },
  computed: {},
  watch: {
    // sortValue(newValue) {
     
    //   console.log(newValue);
    //   if (newValue == "description") {
    //     // console.log("work");
    //     // console.log(this.$refs.opt)
    //     this.$refs.opt.forEach((item) => {
    //       item.removeAttribute("disabled", "disabled");
    //       console.log(item);
    //       if (
    //         item.value == "same" ||
    //         item.value == "more" ||
    //         item.value == "less"
    //       ) {
    //         item.setAttribute("disabled", "disabled");
    //       }
    //     });
    //   } else if (newValue == "count" || newValue == "distance") { 
              
    //     this.$refs.opt.forEach((item) => {
    //       console.log(item);
    //       item.removeAttribute("disabled", "disabled");                 
    //       item.value == "contains" ?  item.setAttribute("disabled", "disabled") : false 
    //     });
    //   }          
    //     else {
    //     this.$refs.opt.forEach((item) => {
    //       item.removeAttribute("disabled", "disabled");
    //     });
    //   }
      
    // },
  },
};
</script>

<style lang="scss" scoped></style>
