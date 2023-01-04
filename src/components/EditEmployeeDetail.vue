<template>
  <div>
    <h2>Edit post</h2>
    <form v-on:submit.prevent="updatePost">
      <div class="form-group">
        <label for="edit-name">Name</label>
        <input class="form-control" id="edit-name" v-model="employee.employee_name" required/>
      </div>
      <div class="form-group">
        <label for="edit-description">Age</label>
        <input class="form-control" id="edit-name" v-model="employee.employee_age" required/>
      </div>
      <div class="form-group">
        <label for="edit-description">Age</label>
        <input class="form-control" id="edit-name" v-model="employee.employee_salary" required/>
      </div>
      <button type="submit" class="btn btn-primary">Save</button>
      <router-link class="btn btn-default" v-bind:to="'/'">Cancel</router-link>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EditEmployeeDetail",
  data: function () {
    return {employee: {id: '', employee_name: '', employee_age:'', employee_salary: ''}}
  },
  created: function(){
    let uri = 'api/v1/employee/'+this.$route.params.id;
    axios.get(uri).then((response) => {
      this.employee = response.data.data;
    });

  },
  methods: {
    updatePost: function() {
      let uri = 'api/v1/update/'+this.$route.params.id;
      axios.put(uri, this.employee).then(() => {
        this.$router.push({name: 'EmployeesList'})
      })
    }
  }
}
</script>

<style scoped>

</style>