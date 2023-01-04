<template>
  <div class="container">
      <div class="row">
          <div class="col-10">
              <table class="table table-striped" style="width: 81rem">
                  <thead class="table-header">
                      <tr>
                          <th class="text-center">#</th>
                          <th>Name</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-if="employees.length === 0">
                          <td class="text-center" :colspan="employees.length + 1">No data found.</td>
                      </tr> 
                      <tr v-for="employee in employees" :key="employee.id" class="text-center" v-else>
                          <td>{{ employee.id }}</td>
                          <td>{{ employee.employee_name }}</td>
                          <router-link :to="{
                                    name: 'EmployeeDetail', params: {id: employee.id},
                                }" >
                                <button type="button" class="btn btn-primary">View Details</button>
                          </router-link>
                      </tr>
                  </tbody>
              </table>
          </div>

          <router-link :to="{
              name: 'CreateEmployee'}" >
            <button type="button" class="btn btn-primary">Create Employee</button>
          </router-link>
      </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
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
      methods: {
          getData: function () {
              let url = 'api/v1/employees';
              axios.get(url)
                  .then((response) => {
                    this.employees = response.data.data;
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