<template>
  <div class="home">
    <div class="inputs">
      <my-column-select
        :column="column"
        :sortValue="sortValue"
        @valueForSort="valueForSort"
        @change="setSearchValue"
      />
      <my-select
        :term="term"
        :termValue="termValue"
        :sortValue="sortValue"
        @termForSort="termForSort"
      />
      <input
        :type="
          sortValue == 'date'
            ? 'date'
            : sortValue == 'description'
            ? 'text'
            : 'number'
        "
        :value="searchValue"
        @input="updateSearchValue"
      />

      <form>
        <label for="pages-count">Всего записей: {{ totalEntries }}</label>
        <select name="pages-count" @change="changeLimit($event)">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="50">50</option>
        </select>
      </form>
    </div>

    <table border="1" width="100%" style="border-collapse: collapse">
      <tr>
        <th>N</th>
        <th>Дата</th>
        <th>Название</th>
        <th>Количество</th>
        <th>Расстояние</th>
      </tr>

      <tr v-for="data in filterResult" :key="data.id">
        <td>{{ data.id }}</td>
        <td>{{ data.date }}</td>
        <td>{{ data.description }}</td>
        <td>{{ data.count }}</td>
        <td>{{ data.distance }}</td>
      </tr>
    </table>
    <div class="pages">
      <div
        class="page"
        v-for="(pageNumber, idx) in totalPages"
        :key="idx"
        :class="{ active: page === pageNumber }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div>
  </div>
</template>

<script>
// import dataFromJson from "@/core/data.json"; // локальный объект для разаработки
import MySelect from "@/components/UI/MySelect.vue";
import MyColumnSelect from "@/components/UI/MyColumnSelect.vue";
export default {
  name: "HomeView",
  data() {
    return {
      dataTable: [],
      //---------
      column: [
        { value: "date", name: "Дата" },
        { value: "description", name: "Название" },
        { value: "count", name: "Количество" },
        { value: "distance", name: "Расстояние" },
      ],
      sortValue: "",
      //----------
      term: [
        { value: "same", name: "Равно" },
        { value: "more", name: "Больше" },
        { value: "less", name: "Меньше" },
        { value: "contains", name: "Содержит" },
      ],
      termValue: "",
      //--------
      searchValue: "",
      searchDate: new Date().toISOString().slice(0, 10),
      //-------
      page: 1, // номер страницы для пагинации
      limit: 5, // кол-во постов на одной странице
      totalPages: 0,
      totalEntries: 0,
    };
  },
  components: {
    MySelect,
    MyColumnSelect,
  },
  methods: {
    async fetchPosts() {
      try {
        this.isPostLoading = true;
        const response = await fetch("http://testtask/api/request.php", {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify({ limit: this.limit, page: this.page }),
        });
        const data = await response.text();
        this.dataTable = JSON.parse(data);
      } catch (error) {
        console.log("err");
      } finally {
        this.isPostLoading = false;
      }
    },
    async fetchCount() {
      try {
        const response = await fetch("http://testtask/api/request.php", {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        const data = await response.text();
        this.dataTable = JSON.parse(data);
        this.totalPages = Math.ceil(this.dataTable.length / this.limit);
        this.totalEntries = this.dataTable.length;
      } catch (error) {
        console.log("err2");
      }
    },
    valueForSort(value) {
      this.sortValue = value;
    },
    termForSort(value) {
      this.termValue = value;
    },
    updateSearchValue(e) {
      this.searchValue = e.target.value;
    },
    setSearchValue() {
      this.sortValue == "date"
        ? (this.searchValue = this.searchDate)
        : (this.searchValue = "");
    },
    changePage(pageNumber) {
      this.page = pageNumber;
      this.fetchPosts();
    },
    changeLimit(e) {
      console.log(e.target.value);
      this.limit = e.target.value;
      this.fetchCount();
      this.fetchPosts();
    },
  },
  computed: {
    filterResult() {
      if (this.sortValue) {
        return this.dataTable.filter((item) =>
          this.searchValue == 0 || this.searchValue == ""
            ? item[this.sortValue]
            : this.sortValue == "date" && this.termValue == ""
            ? item[this.sortValue]
            : this.termValue == "same"
            ? item[this.sortValue] == this.searchValue
            : this.termValue == "more"
            ? item[this.sortValue] > this.searchValue
            : this.termValue == "less"
            ? item[this.sortValue] < this.searchValue
            : this.sortValue == "count" ||
              (this.sortValue == "distance" && this.termValue == "")
            ? item[this.sortValue]
            : this.termValue == "contains" && this.sortValue == "description"
            ? item[this.sortValue].includes(this.searchValue)
            : false
        );
      }

      return this.dataTable;
    },
  },

  mounted() {
    this.fetchCount();
    this.fetchPosts();

    // this.dataTable = dataFromJson;
    // this.totalPages = Math.ceil(this.dataTable.length / this.limit)
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}
.pages {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
}
.page {
  padding: 7px;
  border: 1px solid black;
  cursor: pointer;
}
.active {
  border: 1px solid red;
}
.inputs{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
