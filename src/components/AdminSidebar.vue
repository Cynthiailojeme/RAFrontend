<template>
    <div class="sidebar">
        <div class="admin-details">
            <div class="profile">
                <img src="../assets/adminImage.svg" class="logo">
            </div>
            <h1 class="admin-name">Enyata</h1>
            <p class="admin-email">{{admin.email}}</p>
        </div>

        <div class="controllers">
            <div class="active">
                <router-link :to="{name: 'Admin-dashboard'}" class="links">
                    <p><img src="../assets/dashboard.svg" class="icon">Dashboard</p>
                </router-link>
            </div>
            <div>
                <router-link to="/create" class="links">
                    <p><img src="../assets/plus.svg" class="icon">Create Application</p>
                </router-link> 
            </div>
            <div>
                <router-link to="/entries" class="links">
                    <p><img src="../assets/entries.svg" class="icon">Application Entries</p>
                </router-link>
            </div>
            <div>
                <router-link :to="{name: 'Admin-compose'}" class="links">
                    <p><img src="../assets/assessment.svg" class="icon">Compose Assessment</p>
                </router-link>
            </div>
            <div>
                <router-link :to="{name: 'Assessment-history'}" class="links">
                    <p><img src="../assets/history.svg" class="icon2">Assessment History</p>
                </router-link>
            </div>
            <div>
                <router-link :to="{name: 'Results'}" class="links">
                    <p><img src="../assets/results.svg" class="icon">Results</p>
                </router-link>
            </div>
            <br>
            <br>
            <div>
                <router-link @click.native="deleteItem"  to="/" class="links">
                    <p><img src="../assets/logout.svg" class="icon">Log Out</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return{
            apiResponse:{},
            admin: {
            email:"",
            name: "",
            },
            error:{},
        }
    },
    mounted() {
    window.localStorage.getItem("email")
    this.admin.email = window.localStorage.getItem("email")
    window.localStorage.getItem("name")
    console.log(window.localStorage.getItem("name"))
    this.admin.name = window.localStorage.getItem("name")

    },
    methods: {
        deleteItem(event) {
        window.localStorage.removeItem("email");
        window.localStorage.removeItem("name");
        }
    }
}
</script>

<style scoped>
.sidebar{
    position: fixed;
    width: 292px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
    background: #ffffff;
    /* overflow: auto; */
    min-height: 100vh;
    left: 0px;
    top: 0px;
}
.admin-details {
    width: 100%;
    height: 255px;
    left: 0px;
    top: 0px;
    background: #5ABEFD;
    display: inline-block;
    text-align: center;
    padding-top: 50px;
}
.profile {
    width: 80px;
    height: 80px;
    border-radius: 50px;
    margin: auto;
}
.admin-name {
    font-family: Lato;
    font-weight: bold;
    font-style: normal;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: #2B3C4E;
    margin-top: 20px;
}
.admin-email {
    font-family: Lato;
    font-weight: normal;
    font-style: italic;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;
    color: #2B3C4E;
}
.controllers {
    padding-top: 50px;
}
.controllers > div{
    height: 50px;
    width: 100%;
}
.icon{
    margin-right: 25px;
}
.icon2{
    margin-right: 20px;
}
.controllers > div > p {
    display: flex;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #2B3C4E;
    padding: 18px 35px 12px 35px;
    text-align: left;
}
.controllers > div.active > p {
    font-weight: bold;
    color: #2B3C4E;
    border-left: 4px solid #31D283;
}
.links > p {
    text-decoration: none;
    display: flex;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #2B3C4E;
    padding: 18px 35px 12px 35px;
    text-align: left;
}
/* On screens that are less than 700px wide, make the sidebar into a topbar
@media screen and (max-width: 800px) {
  .sidebar {
    width: 100%;
    height: auto;
  }
  .sidebar.visible {
        left:0px;
    }
    .sidebar span:nth-child(2) {
        display:inline-block;
    }
    .sidebar p {
        color: #777777;
        font-size:14px;
        min-width: 20px;
        text-align: center;
    }
     
} */
</style>
