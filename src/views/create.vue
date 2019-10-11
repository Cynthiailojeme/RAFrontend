<template>
  <div class="create">
    <div class="wrap">
      <div class="row" style="max-width:1350px;">
        <div class="col-md-3">
          <AdminSidebar />
        </div>

        <div class="col-md-9">
          <div class="otherSide">
            <div class="first">
              <p>Create Application</p>
            </div>
            <div class="apply">
              <form @submit.prevent="sendFile" enctype="multipart/form-data">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <!-- <i class="icon"><img src="../assets/plus.png"><span>Choose File</span></i>  -->
                    <input
                      type="file"
                      ref="file"
                      @change="selectFile"
                      class="first_box form-control"
                      id="dotted"
                    />
                    <i class="visible">
                      <img src="../assets/plus.png" />
                      <span>Choose File</span>
                    </i>
                  </div>
                  <div class="form-group col-md-6 pl-5">
                    <label class="batch">Link</label>
                    <input v-model="link" class="second_box form-control" />
                  </div>
                </div>
                <div class="form-row pt-4">
                  <div class="form-group col-md-6">
                    <label class="batch">Application closure date</label>
                    <input
                      v-model="application_date"
                      type="date"
                      class="second_box form-control"
                      placeholder="dd/mm/yyyy"
                    />
                  </div>
                  <div class="form-group col-md-6 pl-5">
                    <label class="batch">Batch ID</label>
                    <input v-model="batch_id" type="text" class="second_box form-control" />
                  </div>
                </div>
                <div class="form-row pt-4">
                  <div class="form-group col-md-12">
                    <label class="batch">Instructions</label>
                    <textarea v-model="instruction" class="text"></textarea>
                  </div>

                  <!-- Your share button code -->
                  <!-- <div class="fb-share-button" 
									data-href="http://testurl.com" 
									data-layout="button_count" id="fbShareBtn">
                  </div>-->
                  <!-- <div>
									<a class="twitter-share-button"
 								 href="https://twitter.com/intent/tweet">
									Tweet</a>


                  </div>-->

                  <!-- <div>
								<a class="twitter-share-button"
 								 href="https://twitter.com/intent/tweet">
									Tweet</a>
                  </div>-->
                  <!-- <link 
 								 href="/web/tweet-button">

                  fb SDK-->
                  <!-- <div id="fb-root"></div> -->
                </div>
                <div class="btn1">
                  <button type="submit" style="background-color: #2B3C4E; color:" class="btn">
                    <loading v-if="isLoading" />
                    <span v-else>Submit</span>
                  </button>
                </div>
              </form>
              <!-- @click.prevent="share()" -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- closing tag for class wrap -->
  </div>

  <!-- closing tag for div create -->
</template>


<script>
import AdminSidebar from "@/components/AdminSidebar.vue";
import Loading from "@/components/Loading.vue";
export default {
  name: "home",
  components: {
	AdminSidebar,
	Loading
  },
  data() {
    return {
      isLoading: false,
      apiResponse: {},
      file: "",
      link: "",
      application_date: "",
      batch_id: "",
      instruction: "",
      message: "",
      error: "",
	  error: [],
    };
  },

  mounted() {
    // load fb sdk
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  },
  methods: {
    share: function() {
      console.log("hello");
      //link
      var link = document.createElement("meta");
      link.setAttribute("property", "og:url");
      link.content = this.link;
      document.getElementsByTagName("head")[0].appendChild(link);

      //title
      var title = document.createElement("meta");
      title.setAttribute("property", "og:title");
      title.content = "Whatever the title is";
      document.getElementsByTagName("head")[0].appendChild(title);

      //instruction
      var description = document.createElement("meta");
      description.setAttribute("property", "og:description");
      description.content = this.instruction;
      document.getElementsByTagName("head")[0].appendChild(description);

      //image
      var image = document.createElement("meta");
      image.setAttribute("property", "og:image");
      image.content = this.file;
      document.getElementsByTagName("head")[0].appendChild(image);

      //type
      var type = document.createElement("meta");
      image.setAttribute("property", "og:type");
      type.content = "article";
      document.getElementsByTagName("head")[0].appendChild(type);

      $("button#u_0_2").click();
    },
    selectFile() {
      this.file = this.$refs.file.files[0];
    },
    sendFile() {
      this.isLoading = true;
      // console.log(this)
      const formData = new FormData();
      formData.append("file", this.file);
      formData.append("link", this.link);
      formData.append("application_date", this.application_date);
      formData.append("batch_id", this.batch_id);
      formData.append("instruction", this.instruction);
      this.$http
        .post("http://localhost:3000/attach/upload", formData)
        .then(response => {
          this.formData = "";
          alert("Application  Created Successfully");
          console.log(response);
          this.$router.push("/preview");

          // this.message = "file has been uploaded"
          this.formData = response.data;
        })
        .catch(error => {
          console.log(error);
		})
		.finally(() => {
          this.isLoading = false;
        });
    }
  }
};
</script>

<style scoped>
.wrap {
  /*border: 1px solid red;*/
  height: 180vh;
}

.sidebar {
  /*border: 1px solid green;*/
  height: 180vh;
}

.otherSide {
  /*border: 1px solid blue;*/
  height: 180vh;
}

.inside {
  height: 180vh;
  width: 292px;
  /*border: 1px solid black;*/
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
}

.john {
  width: 292px;
  height: 255px;
  background: #5abefd;
}

.image1 {
  padding-top: 75px;
  padding-left: 97px;
  padding-right: 115px;
  padding-bottom: 3px;
}

.name {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
  padding-left: 97px;
  padding-top: 4px;
}

.mail {
  font-family: Lato;
  font-style: italic;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  letter-spacing: -0.02em;

  color: #2b3c4e;
  text-align: center;
}

.tool {
  /*border: 1px solid red;*/
  height: 80vh;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  color: #2b3c4e;
}

.image2 {
  padding-top: 83px;
  padding-left: 43px;
}

.image3 {
  padding-top: 28px;
  padding-left: 43px;
}

.image4 {
  padding-top: 69px;
  padding-left: 43px;
}

.image33 {
  margin-top: 20px;
  padding-top: 10px;
  /*padding-bottom: 20px;*/
  padding-left: 38px;
  border-left: 4px solid #31d283;
}

.first {
  padding-top: 137px;
  padding-left: 40px;
  opacity: 0.9;
  font-family: Lato;
  font-style: normal;
  font-weight: 100;
  font-size: 43.5555px;
  line-height: 52px;
  /* identical to box height */

  letter-spacing: -0.02em;

  color: #2b3c4e;
}

.apply {
  /*border:1px solid green;*/
  width: 95%;
  margin-left: 40px;
  padding-top: 62px;
}

.first_box {
  height: 108px;
  text-align: center;
}

#dotted {
  border: 0;
  border: 1.5px dashed #2b3c4e;
  border-radius: 6.2069px;
}

.input_icons i {
  position: absolute;
  padding-top: 44px;
  padding-left: 154px;
}

.icon {
  padding: 10px;
  /*color: green; */
  min-width: 50px;
  text-align: center;
}

.second_box {
  border: 1.5px solid #2b3c4e;
}

.text {
  height: 120px;
  width: 100%;
  border: 1.5px solid #2b3c4e;
}

.batch {
  font-family: Lato;
  font-style: normal;
  font-weight: 550;
  font-size: 17px;
  line-height: 17px;
  /* identical to box height */

  color: #2b3c4e;
}

.btn {
  width: 50%;
  height: 50px;
  margin: auto;
  display: block;
  background-color: #2b3c4e;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  color: #ffffff;
}

.btn1 {
  padding-top: 44px;
}

.btn:hover {
  color: #ffffff;
}
.visible {
  margin-top: -60px;
  margin-right: 20px;
  /* margin-left: 45px; */
  float: right;
  margin-right: 200px;
}
</style>
