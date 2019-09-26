<template>
    <div>
        <div>
            <AdminSidebar/>
        </div>
        <div class="main">
            <ComposeAssess/>
        </div>
    </div>
</template>

<script>
import AdminSidebar from '@/components/AdminSidebar.vue'
import ComposeAssess from '@/components/ComposeAssess.vue'


export default {
    name: 'home',
    components: {
       AdminSidebar,
       ComposeAssess 
  }
}
</script>

<style scoped>
.main {
    margin-left: 300px;
    padding: 80px 70px 50px 70px;
}
</style>