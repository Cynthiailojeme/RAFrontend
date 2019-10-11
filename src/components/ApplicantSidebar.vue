<template>
  <div class="sidebar">
    <div class="applicant-details">
      <div class="profile">
        <img src="../assets/adminImage.svg" class="logo" />
      </div>
      <h1 class="applicant-name">{{applicant.fullname}}</h1>
      <p class="applicant-email">{{applicant.email}}</p>
    </div>

    <div class="controllers">
      <div class="active">
        <router-link :to="{name: 'applicant-dashboard'}" class="links">
          <p>
            <img src="../assets/dashboard.svg" class="icon" />Dashboard
          </p>
        </router-link>
      </div>
      <div>
        <router-link :to="{name: 'Take-assessment'}" class="links">
          <p>
            <img src="../assets/assess.svg" class="icon" />Assessment
          </p>
        </router-link>
      </div>
      <br />
      <br />
      <div>
        <router-link @click.native="deleteItem" to="/applicant-login" class="links">
          <p>
            <img src="../assets/logout.svg" class="icon" />Log Out
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      apiResponse: {},
      applicant: {
        fullname: "",
        email: ""
      },

      error: {}
    };
  },

  mounted() {
    window.localStorage.getItem("firstname");
    window.localStorage.getItem("lastname");
    window.localStorage.getItem("email");
    //  window.localStorage.getItem('token')
    this.applicant.fullname =
      window.localStorage.getItem("firstname") +
      " " +
      window.localStorage.getItem("lastname");
    this.applicant.email = window.localStorage.getItem("email");
  },
  methods: {
    deleteItem(event) {
      window.localStorage.removeItem("firstname");
      window.localStorage.removeItem("lastname");
      window.localStorage.removeItem("email");
      window.localStorage.removeItem("time");
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("user");
    }
  }
};
</script>


<style scoped>
.sidebar {
  width: 292px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  background: #ffffff;
  min-height: 100%;
  left: 0px;
  top: 0px;
  position: fixed;
}
.applicant-details {
  width: 100%;
  height: 255px;
  left: 0px;
  top: 0px;
  background: #2b3c4e;
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
.applicant-name {
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #fff;
  margin-top: 20px;
}
.applicant-email {
  font-family: "Lato", sans-serif;
  font-weight: normal;
  font-style: italic;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #fff;
}
.controllers {
  padding-top: 50px;
}
.controllers > div {
  height: 50px;
  width: 100%;
}
.icon {
  margin-right: 25px;
}
.controllers > div > p {
  display: flex;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
  padding: 18px 35px 12px 35px;
  text-align: left;
}
.controllers > div.active > p {
  font-weight: bold;
  color: #2b3c4e;
  border-left: 4px solid #31d283;
}
.links {
  display: flex;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
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
