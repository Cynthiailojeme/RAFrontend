<template>
    <div>
        <div>
            <ApplicantSidebar/>
        </div>

        <div class="main">
            <TakeAssessment/>
        </div>
    </div>
</template>

<script>
import ApplicantSidebar from '@/components/ApplicantSidebar.vue'
import TakeAssessment from '@/components/TakeAssessment.vue'

export default {
    name: 'home',
    components: {
       ApplicantSidebar,
       TakeAssessment
  }
}
</script>

<style scoped>
.main {
    margin-left: 300px;
    padding: 80px 70px 50px 50px;
}
</style>
