<template>
  <div>
    <div class="form-container-head">
      <img src="../assets/enyata-logo.png" alt="enyata" class="enyata-logo" />
      <h3>enyata</h3>
      <p>Applicant Sign Up</p>
    </div>
    <div class="form-wrapper" v-show="isComputedPropertyReady">
      <form @submit.prevent="add" v-if="isApplicationStillOpen" enctype="multipart/form-data">
        <div>
          <input type="file"  />
        </div>
        <div class="row">
          <div class="col">
            <label>First Name</label>
            <input v-model="formData.first_name" type="text" class="form-control" required />
          </div>
          <div class="col">
            <label>Last Name</label>
            <input v-model="formData.last_name" type="text" class="form-control" required/>
          </div>
        </div>
        <div class="form-wrapper" v-show="isComputedPropertyReady">
          <form @submit.prevent="add" v-if="isApplicationStillOpen">
                
                        <div class=" form-group col-md-5">
							    	
							      <input  @click ="clicked"
					
								   @change="selectFile" 
								   class=" first_box form-control" id="dotted" >
                                  <i class="visible"><img @click ="clicked" src="../assets/plus.png"><span>&nbsp; &nbsp; Upload CV</span></i>
							    </div>


            <div class="row mt-3">
                <div class="col">
                    <label>First Name</label>
                    <input v-model="formData.first_name" type="text" class="form-control" required>
                </div>
                <div class="col">
                    <label>Last Name</label>
                    <input v-model="formData.last_name" type="text" class="form-control" required>
                </div>
            </div>

            <div class="row rows">
                <div class="col">
                    <label>Email</label>
                    <input  v-model="formData.email" type="email" class="form-control" required>
                </div>
                <div class="col">
                    <label>Date of Birth</label>
                    <input v-model="formData.date_of_birth" type="date" class="form-control" required>
                </div>
            </div>

            <div class="row rows">
                <div class="col">
                    <label>Address</label>
                    <input v-model="formData.address" type="text" class="form-control" required>
                </div>
                <div class="col">
                    <label>University</label>
                    <input v-model="formData.university" type="text" class="form-control" required>
                </div>
            </div>

            <div class="row rows">
                <div class="col">
                    <label>Course of Study</label>
                    <input v-model="formData.course_of_study" type="text" class="form-control" required>
                </div>
                <div class="col">
                    <label>CGPA</label>
                    <input v-model="formData.cgpa" type="text" class="form-control" required>
                </div>
                
            </div>

             <div class="row rows">
                        <div class="col">
                            <label>Password</label>
                            <div class="password">
                                <input id="passwordField"  v-model="formData.password" type="password" class="form-control" required ><img src="../assets/visible.png" alt="" id="passwordView">
                            </div>
                        </div>
                        <div class="col">
                            <label>Confirm Password</label>
                            <div class="password">
                                <input id="confirmField" v-model="formData.confirm_password" type="password" class="form-control" required><img src="../assets/visible.png" alt=""  id="confirmView">
                            </div>
                        </div>
                    </div>

                     <div class=" error form-group">
                         <p class="text-danger" v-for="(err,index) in error" :key="index">{{err}}</p>

                    </div>
            
            <button class="btn btn-primary" type="submit">Submit</button>
          </form> 
          <div v-else>
            <h1 class="else"> Sorry,We are no longer receiving application</h1>
      </div>
    </div>
  </div>
</template>
<script>
import Loading from "@/components/Loading.vue";
var myWidget = cloudinary.createUploadWidget({
  cloudName: 'dygctamiz', 
  uploadPreset: 'ht58on2s'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      console.log('Done! Here is the image info: ', result.info); 
      console.log("Image Url "+result.info.url)
    }else{
        console.log(error)
    }
  }
)

// document.getElementById("upload_widget").addEventListener("click", function(){
//     myWidget.open();
//   }, false);

  export default{
    name:'home',
    data() {
      return{
        apiResponse:{},
        applicationData: "",
        isComputedPropertyReady: false,
        formData: {
        	first_name:"",
        	last_name:"",
        	email:"",
        	date_of_birth:"",
        	address:"",
            university:"",
            course_of_study:"",
            cgpa:"",
            password:"",
            confirm_password:""
        },
        image:"",

        error:{}

      }

    },

    components:{
      Loading
    },
    computed: {
        isApplicationStillOpen: function(){
            let closingDate = new Date(this.applicationData.application_date)
            let closingDateSeconds = closingDate.getTime() / 1000; //1440516958

            let today = new Date();
            let todaySecs = parseInt(today.getTime() / 1000);
            if(todaySecs > closingDateSeconds){
                this.isComputedPropertyReady = true
                return false
            }else{
                this.isComputedPropertyReady = true
                return true
            }
        }
    },
    mounted() {
             $("#passwordView").click(function(){
            let input = $("input#passwordField").attr("type");
            if(input == "password"){
                $("input#passwordField").attr("type", "text");
            }else{
                $("input#passwordField").attr("type", "password");
            }
        });

         $("#confirmView").click(function(){
            let input = $("input#confirmField").attr("type");
            if(input == "password"){
                $("input#confirmField").attr("type", "text");
            }else{
                $("input#confirmField").attr("type", "password");
            }
        });
    

        this.$http.get('http://localhost:3000/attach')
      	.then(response=>{
            this.applicationData = response.data[response.data.length -1]
            this.checkDate()
          });
    },
     methods:{
         clicked(){
             myWidget.open();
            
         },
      checkDate: function(){
      },

      selectFile(){
			this.file = this.$refs.file.files[0]
		},
         onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;
      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function removeImage(e) {
            this.image = '';
    },

      add:function(){
      this.isLoading = true;
  		console.log(this.newGuest)
            this.$http.post('http://localhost:3000/recruit/signup',this.formData)
            
      	.then(response=>{
	      console.log(response)
          this.formData= response.data
          
      		this.formData.first_name =""
      		this.formData.last_name =""
      		this.formData.email = ""
      		this.formData.date_of_birth = ""
      		this.formData.address = ""
            this.formData.university = ""
            this.formData.course_of_study = ""
            this.formData.cgpa = ""
            this.formData.password = ""
            this.formData.confirm_password = ""
    


    	alert('Application Submitted Successfully') 

        // .then(response =>{
        // console.log(response)
        // console.log(this.applicant)
        this.$router.push("/applicant-login")
        })
        .finally(() => {
          this.isLoading = false;
        });
      },
    }
};  
</script>

<style scoped>

.form-group{
    margin:auto;
}
.files {
    border: 1.55172px dashed #2B3C4E;
    box-sizing: border-box;
    border-radius: 6.2069px;
    height: 108px;
    width: 90% !important;
}
.fileimg {
    height: 300px;
    width: 300px;
}
#dotted{
		border:0;
		    border: 1.5px dashed #2B3C4E;
		    /* border-radius: 6.2069px; */
	}

.first_box{
		height: 50px;
		text-align: center;
	
	}
  .visible {
    margin-top: -40px;
    margin-right: 80px;
    /* margin-left: 45px; */
    float: right;
    /* margin-right: 200px; */
}	
.cv {
    border: 1.55172px dashed #2B3C4E;
    box-sizing: border-box;
    border-radius: 6.2069px;
    height: 60px;
    width: 30% !important;
    margin-left: auto;
    margin-right: auto;
    display: block
}
.cv > p {
    font-family: Avenir;
    font-size: 16px;
    text-align: center;
    padding-top: 12px;
    color: #2B3C4E;
  }
.uploadfil {
    opacity: 0;
    position: absolute;
    cursor: pointer;
}
.icon{
    margin-right: 15px;
}
.enyata-logo {
  width: 49px;
  height: 52px;
}

.form-container-head {
  text-align: center;
  margin-top: 116px;
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

.form-wrapper {
  width: 80%;
  max-width: 963px;
  height: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 45px;
  margin-bottom: 171px;
  display: block;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}

form {
  width: 90%;
  max-width: 830px;
  height: 469px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  padding-top: 51px;
}

.rows {
  margin-top: 40px;
}

label {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #2b3c4e;
}

input {
  border: 1.5px solid #2b3c4e;
  box-sizing: border-box;
  border-radius: 4px;
}

.btn {
  width: 70%;
  max-width: 379px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  display: block;
  background: #2b3c4e;
  border-radius: 4px;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
}

.else {
  text-align: center;
  font-size: 50px;
  padding-top: 30vh;
}

.password {
  position: relative;
  display: block;
  float: right;
  width: 100%;
}

.password img {
  margin-top: -20px;
  margin-right: 20px;
  float: right;
}
</style>
