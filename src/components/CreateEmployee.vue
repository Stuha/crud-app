<template>
  <div>
    <div>
      <h2>Create new employee</h2>
      <form v-on:submit.prevent="createPost">
        <div class="form-group">
          <label for="add-name">Name</label>
          <input class="form-control" id="add-name" v-model="employee.employee_name" required/>
        </div>
        <div class="form-group">
          <label for="add-name">Age</label>
          <input class="form-control" id="add-name" v-model="employee.employee_age" required/>
        </div>
        <div class="form-group">
          <label for="add-name">Salary</label>
          <input class="form-control" id="add-name" v-model="employee.employee_salary" required/>
        </div>

        <button type="submit" class="btn btn-primary">Create</button>
        <router-link class="btn btn-default" v-bind:to="'/'">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateEmployee",
  data: function () {
    return {employee: {id: '', employee_name: '', employee_age:'', employee_salary: ''}}
  },
  methods: {
    createPost: function() {
      let uri = 'api/v1/create';
      axios.post(uri, this.post).then(() => {
        this.$router.push({name: 'EmployeesList'})
      })
    }
  }
}
</script>