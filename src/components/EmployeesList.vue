<template>
  <div class="container">
      <div class="row">
          <div class="col-10">
              <table class="table table-striped" style="width: 81rem">
                  <thead class="table-header">
                      <tr>
                          <th class="text-center">#</th>
                          <th>Name</th>
                          <th>Age</th>
                          <th>Salary</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-if="employees.length === 0">
                          <td class="text-center" :colspan="employees.length + 1">No data found.</td>
                      </tr> 
                      <tr v-for="employee in employees" :key="employee.id" class="text-center" v-else>
                          <td>{{ employee.id }}</td>
                          <td>{{ employee.employee_name }}</td>
                          <td>{{ employee.employee_age }}</td>
                          <td>{{ employee.employee_salary }}</td>
                          <router-link :to="{
                                    path: '/employee',
                                    params: employee, 
                                    query: { employee: employee.id },
                                }" >
                                <button type="action" class="btn btn-primary">View Details</button>
                          </router-link>
                      </tr>
                  </tbody>
              </table>
          </div>
          <!-- <nav v-if="pagination && booksList.length > 0">
              <ul class="pagination">
                  <li class="page-item" :class="{'disabled' : currentPage === 1}">
                      <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">Previous</a>
                  </li>
                  <li v-for="page in pagesNumber" class="page-item"
                      :class="{'active': page === pagination.meta.current_page}">
                      <a href="javascript:void(0)" @click.prevent="changePage(page)" class="page-link">{{ page }}</a>
                  </li>
                  <li class="page-item" :class="{'disabled': currentPage === pagination.meta.last_page }">
                      <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">Next</a>
                  </li>
                  <span style="margin-top: 8px;"> &nbsp; <i>Displaying {{ pagination.data.length }} of {{ pagination.meta.total }} entries.</i></span>
              </ul>
          </nav> -->
      </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
      props: {
        //   columns: { type: Array, required: true },
      },
      data: function () {
          return {
            baseUrl: 'api/v1/employees',
            page: 1,
            perPage: 4,
            totalPages: 0,
            employees: []
          }
      },
      mounted() {
          this.getData();
      },
      computed: {
          /**
           * Get the pages number array for displaying in the pagination.
           * */
        //   pagesNumber() {
        //       if (!this.pagination.meta.to) {
        //           return []
        //       }
        //       let from = this.pagination.meta.current_page - this.offset
        //       if (from < 1) {
        //           from = 1
        //       }
        //       let to = from + (this.offset * 2)
        //       if (to >= this.pagination.meta.last_page) {
        //           to = this.pagination.meta.last_page
        //       }
        //       let pagesArray = []
        //       for (let page = from; page <= to; page++) {
        //           pagesArray.push(page)
        //       }
        //       return pagesArray
        //   },
          /**
           * Get the total data displayed in the current page.
           * */
        //   totalData() {
        //       return (this.pagination.meta.to - this.pagination.meta.from) + 1
        //   },
      },
      methods: {
          getData: function () {
              let url = 'api/v1/employees';
            //   let dataUrl = `${url}?page=${this.currentPage}&column=${this.sortedColumn}&order=${this.order}&per_page=${this.perPage}`

              axios.get(url)
                  .then((response) => {
                    this.employees = response.data.data;
                    console.log(this.employees)
                  })
                  .catch(function (error) {
                      console.log(error);
                  });
          },
          serialNumber: function(key) {
              return key + 1;
          },
          changePage(pageNumber) {
              this.currentPage = pageNumber
              this.loadBooks()
          }
      },
      filters: {
          columnHead: function (value) {
              return value.split('_').join(' ').toUpperCase()
          }
      },
  }
</script>