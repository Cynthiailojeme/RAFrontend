<template>
    <div>
        <div>
            <AdminSidebar/>
        </div>
        <div class="main">
            <Entries/>
        </div>
    </div>
</template>

<script>
import AdminSidebar from '@/components/AdminSidebar.vue'
import Entries from '@/components/Entries.vue'


export default {
    name: 'home',
    components: {
       AdminSidebar,
       Entries
  }
}
</script>

<style scoped>
.main {
    margin-left: 300px;
    padding: 80px 60px 50px 60px;
}
</style>