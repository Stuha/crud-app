<template>
    <div>
        <h1>Employee Name</h1>
        {{  employee }}
    </div>
</template>
<script>
export default {
    props: {
        // employee: { type: Object, required: true },
      },
      data: function () {
          return {
            employee: this.$route.params,
            // employeeAge: null,
            // employeeSalary: 0,
          }
      },
}
</script>