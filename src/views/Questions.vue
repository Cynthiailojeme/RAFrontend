<template>
    <div>
        <div>
            <ApplicantSidebar/>
        </div>

        <div class="main">
            <Quiz/>
        </div>
    </div>
</template>

<script>
import ApplicantSidebar from '@/components/ApplicantSidebar.vue'
import Quiz from '@/components/Quiz.vue'

export default {
    name: 'home',
    components: {
       ApplicantSidebar,
       Quiz
  }
}
</script>

<style scoped>
.main {
    margin-left: 300px;
    padding: 80px 70px 50px 50px;
}
</style>
