<template>
    <div class="dashboard">
        <div>
            <AdminSidebar/>
        </div>
        <div class="main">
            <DashboardAdmin/>
        </div>
    </div>
</template>

<script>
import AdminSidebar from '@/components/AdminSidebar.vue'
import DashboardAdmin from '@/components/DashboardAdmin.vue'

export default {
    name: 'home',
    components: {
       AdminSidebar,
       DashboardAdmin
  }
}
</script>

<style scoped>
.dashboard {
    height: 100%;
}
.main {
    height: 100%;
    margin-left: 300px;
    padding: 80px 70px 50px 70px;
}
</style>