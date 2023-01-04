<template>
    <div>
      <h1>Employee {{  employee.employee_name }}</h1>
      <label>Salary:</label>
      <p>{{ employee.employee_salary}}</p>
      <label>Age:</label>
      <p>{{ employee.employee_age }}</p>

      <router-link :to="{
            name: 'EditEmployeeDetail', params: {id: employee.id}}" >
        <button type="button" class="btn btn-primary">Edit Details</button>
      </router-link>
      <br>
      <router-link :to="{
            name: 'DeleteEmployee', params: {id: employee.id}}" >
        <button type="button" class="btn btn-primary">Delete employee</button>
      </router-link>
    </div>
</template>

<script>
import axios from "axios";

export default {

  data: function () {
    return {employee: {id: '', employee_name: '', employee_age:'', employee_salary: ''}}
  },
  created: function(){
    let uri = 'api/v1/employee/'+this.$route.params.id;
    axios.get(uri).then((response) => {
      this.employee = response.data.data;
    });

  },
}
</script>