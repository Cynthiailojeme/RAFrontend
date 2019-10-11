<template>
<div class="head">
    <div class="form-container">
        <div class="group">
     <img src="../assets/logo.svg" class="logo"> 
            <div>
                <p class="enyata">enyata</p>
                <p class="admin">Admin Log in</p>
            </div>
        </div>

            <form @submit.prevent="login">
                <div>
                    <div class="form-group ">
                        <label>Email address</label>
                        <input v-model="admin.email" type="email" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <input v-model="admin.password" type="password" class="form-control" id="exampleInputPassword1" required>
                        <img src="../assets/see.svg" id="passwordView" alt="" class="visible">
                    </div>

                    <div>
                         <button type="submit" class="btn btn-primary"><loading v-if="isLoading" /> <span v-else>Sign In</span></button>
                    </div>
                    <p class="forgot">Forgot Password?</p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Loading from '@/components/Loading.vue'

export default{
    name:'Admin',
    data() {
      return{
        apiResponse:{},
        isLoading: false,
        admin:{
            email: "",
        	password: ""
        },
        error:{}
      }
    },
    mounted() {
      $("#passwordView").click(function(){
            let idAttr = $("input#exampleInputPassword1").attr("type");
            if(idAttr == "password"){
                $("input#exampleInputPassword1").attr("type", "text");
            }else{
                $("input#exampleInputPassword1").attr("type", "password");
            }
        })
    },
    methods:{
  	login:function() {
        this.isLoading = true
  		this.$http.post('http://localhost:3000/api/admin/login', {
              email: this.admin.email,
              password: this.admin.password
          })
      .then(response =>{
        window.localStorage.setItem("admin", response.body.admin._id)
        window.localStorage.setItem("email", response.body.admin.email)
        window.localStorage.setItem("name", response.body.admin.name)
        console.log(response)
        console.log(window.localStorage.setItem("name", response.body.admin.name))
        this.$router.push("/Admin-dashboard")
      })
      .finally(() =>{
            this.isLoading = false
    })
    }
  	}
  }

  
</script>

<style scoped>
.head{
background-color: #2B3C4E;
height: 180vh;
background-image: url('../assets/background.svg');
background-repeat: no-repeat;
background-position: right 90px;
background-size: 550px;
}
.form-container{
    max-width: 500px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 150px;
}
.form-control{
    background-color: #2B3C4E;
}
.enyata{
font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 31.3954px;
line-height: 38px;
letter-spacing: -0.02em;
color: #FFFFFF;
}
.group{
    width: 50%;
    margin: 0 auto;
    text-align: center;
}
.admin{
font-family: Lato;
font-style: italic;
font-weight: 500;
font-size: 24px;
line-height: 29px;
color: #FFFFFF;
padding-bottom: 50px;
}
input[type=email], input[type=password], input[type=text] {
  width: 100%; 
  height: 41px;
  border: 1.5px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #2B3C4E;
  color: white;
}
.visible {
    margin-top: -22px;
    margin-right: 20px;
    float: right;
}
.btn{
  background-color: white;
  color: #2B3C4E;
  cursor: pointer;
  width: 100%;
  height: 50px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #2B3C4E;
  margin-top: 30px;
}
label{
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 17px;
  color: #FFFFFF;  
}

.forgot{
    float: right;
    font-family: Lato;
    font-style: italic;
    font-weight: normal;
    color: #FFFFFF;
    padding-top: 8px;
}

</style>