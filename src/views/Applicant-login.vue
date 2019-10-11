<template>
  <div>
    <div class="form-container">
      <div class="form-container-head">
        <img src="../assets/enyata-logo.png" alt="enyata" class="enyata-logo" />
        <h3>enyata</h3>
        <p>Applicant Log In</p>
      </div>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            v-model="applicant.email"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <div>
            <input
              v-model="applicant.password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              required
            />
            <img src="../assets/visible.png" id="passwordView" alt class="visible" />
          </div>
        </div>
        <div class="form-group">
          <p class="text-danger" v-for="(err,index) in error" :key="index">{{err}}</p>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary">
            <loading v-if="isLoading" />
            <span v-else>Sign In</span>
          </button>
        </div>
      </form>
      <span class="no-account">
        Don’t have an account yet?
        <router-link class="sign ml-1" :to="{name:'signup'}">Sign Up</router-link>
      </span>
      <span class="forgot">Forgot Password?</span>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
export default {
  name: "home",
  data() {
    return {
      apiResponse: {},
      applicant: {
        email: "",
        password: ""
      },
      isLoading: false,
      user: [],
      error: []
    };
  },

  components: {
    Loading
  },
  mounted() {
    $("#passwordView").click(function() {
      let idAttr = $("input#exampleInputPassword1").attr("type");
      if (idAttr == "password") {
        $("input#exampleInputPassword1").attr("type", "text");
      } else {
        $("input#exampleInputPassword1").attr("type", "password");
      }
    });
  },

  methods: {
    login: function() {
      this.isLoading = true;
      this.error = [];
      this.$http
        .post("http://localhost:3000/recruit/login", {
          email: this.applicant.email,
          password: this.applicant.password
        })
        .then(response => {
          window.localStorage.setItem("user", response.body.user._id);
          window.localStorage.setItem("time", response.body.user.created_at);
          window.localStorage.setItem(
            "firstname",
            response.body.user.first_name
          );
          window.localStorage.setItem("lastname", response.body.user.last_name);
          // console.log(response.body.user)
          window.localStorage.setItem("token", response.body.token);
          window.localStorage.setItem("email", response.body.user.email);
          console.log(response), console.log(response.body.token);
          localStorage.setItem("token", response.body.token);
          // console.log(this.applicant)
          this.$router.push("/applicant-dashboard");
          // this.$router.push({ name: 'applicant-dashboard', params: { id: this.applicant} })
        })
        .catch(err => {
          if ((err.status = 403)) {
            this.error.push(err.body.message);
          } else {
            this.error.push("Oops! Unexpected Error Occurred");
          }
          console.log(err);
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }
};
</script>


<style scoped>
.form-container {
  width: 50%;
  max-width: 380px;
  height: 462px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 173px;
  margin-bottom: 389px;
}

.enyata-logo {
  width: 49px;
  height: 52px;
}

.sign {
  color: #4f4f4f;
  text-decoration: underline;
  font-family: Lato;
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
}

form {
  margin-top: 74px;
}

.form-container-head {
  text-align: center;
}

.form-container-head h3 {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}

.form-container-head p {
  font-family: "Lato", sans-serif;
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  color: #2b3c4e;
}

label {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #4f4f4f;
}

input {
  border: 1.5px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 4px;
}

.visible {
  margin-top: -20px;
  margin-right: 20px;
  float: right;
}

.btn {
  background: #2b3c4e;
  border-radius: 4px;
  width: 100%;
  max-width: 379px;
  height: 50px;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
  /* margin-top: 30px; */
}

.no-account {
  font-family: "Lato", sans-serif;
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  color: #4f4f4f;
  margin-top: 12px;
}
.forgot {
  font-family: "Lato", sans-serif;
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  color: #4f4f4f;
  float: right;
}
</style>
