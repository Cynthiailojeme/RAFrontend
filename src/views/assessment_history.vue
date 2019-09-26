<template>
    <div>
        <div>
            <AdminSidebar/>
        </div>
        <div class="main">
            <AssessHistory/>
        </div>
    </div>
</template>

<script>
import AdminSidebar from '@/components/AdminSidebar.vue'
import AssessHistory from '@/components/AssessHistory.vue'


export default {
    name: 'home',
    components: {
       AdminSidebar,
       AssessHistory
  }
}
</script>

<style scoped>
.main {
    margin-left: 300px;
    padding: 80px 60px 50px 60px;
}
</style>