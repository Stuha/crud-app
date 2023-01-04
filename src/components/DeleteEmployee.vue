<template>
  <div>
    <h2>Delete employee {{ employee.employee_name }}</h2>
    <form v-on:submit.prevent="deletePost">
      <p>The action cannot be undone.</p>
      <button type="submit" class="btn btn-danger">Delete</button>
      <router-link class="btn btn-default" v-bind:to="'/'">Cancel</router-link>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DeleteEmployee",
  data: function () {
    return {employee: {employee_name: ''}}
  },
  created: function(){
    let uri = 'api/v1/employee/'+this.$route.params.id;
    console.log(uri)
    axios.get(uri).then((response) => {
      this.employee = response.data.data;
    });

  },
  methods: {
    deletePost: function() {
      let uri = 'api/v1/delete/'+this.$route.params.id;
      axios.delete(uri, this.employee.id).then(() => {
        this.$router.push({name: 'EmployeesList'})
      })
    }
  }
}
</script>