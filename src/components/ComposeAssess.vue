<template>
  <div>
    <h1>Compose Assessment</h1>

    <form enctype="multipart/form-data" method="post" action="/uploads">
      <div class="form-row">
        <div class="form-group col-md-12">
          <label>Name of Assessment</label>
          <input type="text" class="form-control correct" v-model="nameOfSet" required />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label>{{ this.quiz.length }}/30</label>
          <div class="files" v-if="!image">
            <input type="file" class="uploadfil" ref="file" @change="onFileChange" required />
            <p>
              <img src="../assets/plus.svg" class="icon" />Choose File
            </p>
          </div>
          <div v-else>
            <img :src="image" class="fileimg" />
            <input type="file" name="image" style="display:none" />
            <button @click="removeImage">Remove image</button>
          </div>
        </div>

        <div class="form-group col-md-6">
          <label>Set Time</label>
          <br />
          <input type="number" v-model="duration" class="timer" required />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-12">
          <label>Date of Assessment</label>
          <input type="date" class="form-control correct" v-model="dateOfAsess" required />
        </div>
      </div>

      <div class="form-group">
        <label>Question</label>
        <textarea class="form-control rounded-1" rows="5" v-model="first.question" required></textarea>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label>Option A</label>
          <input type="text" class="form-control" v-model="first.options[0]" />
        </div>
        <div class="form-group col-md-6">
          <label>Option B</label>
          <input type="text" class="form-control" v-model="first.options[1]" />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label>Option C</label>
          <input type="text" class="form-control" v-model="first.options[2]" />
        </div>
        <div class="form-group col-md-6">
          <label>Option D</label>
          <input type="text" class="form-control" v-model="first.options[3]" />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-12">
          <label>Answer</label>
          <input type="text" class="form-control correct" v-model="first.correctAnswer" required />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <div class="buttonholder">
            <button type="submit" class="button2" @click.prevent="submit()">Save question</button>
          </div>
        </div>

        <div class="form-group col-md-6">
          <div class="buttonholder">
            <button type="submit" class="button2" @click.prevent="addPost">Finish</button>
          </div>
        </div>
      </div>
      <!-- 
<div class="form-row">
<div class="form-group col-md-12">
<div class="buttonholder2">
<button type="submit" class="button2" @click.prevent="addPost">Finish</button>
</div>
</div>
      </div>-->
    </form>
  </div>
</template>

<script>
import TimeMixin from "../mixins/timer";
var formData = new FormData();
formData.append("foo", "bar");
export default {
  mixins: [TimeMixin],
  data() {
    return {
      questionsets: [],
      questionset: {},
      image: "",
      file: "",
      apiResponse: {},
      first: {
        // img: "",
        image: this.image,
        question: "",
        options: ["", "", "", ""],
        correctAnswer: ""
      },
      nameOfSet: "",
      dateOfAsess: "",
      quiz: [],
      duration: "",
      error: {},
      items: []
    };
  },
  components: {},
  mounted() {},
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;
      reader.onload = e => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function removeImage(e) {
      this.image = "";
    },
    submit() {
      this.quiz.push(this.first);
      console.log(this.first);
      this.first = {
        image: "",
        question: "",
        options: ["", "", "", ""],
        correctAnswer: ""
      };
    },
    // prev: function() {
    // this.quiz.length--;
    // },
    addPost() {
      // this.image = this.$refs.file.files[0]
      let formData = new FormData();
      formData.append("image", this.image);
      const oneset = {
        nameOfSet: this.nameOfSet,
        quiz: this.quiz,
        duration: this.duration,
        dateOfAsess: this.dateOfAsess
      };
      console.log(oneset);
      this.$http
        .post("http://localhost:3000/api/questionset/add", oneset, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          oneset = {
            nameOfSet: "",
            quiz: "",
            duration: "",
            dateOfAsess: ""
          };
          alert("Assessment Created Successfully");
          console.log(response);
          oneset = response.data;
          this.questionsets.push(response.data);
          this.questionsets.sort(function(a, b) {
            if (a.timestamp < b.timestamp) {
              return 1;
            }
            if (a.timestamp > b.timestamp) {
              return -1;
            }
            return 0;
          });
        });
    }
  }
};
</script>


<style scoped>
h1 {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}
form {
  padding-top: 30px;
}
.files {
  border: 1.55172px dashed #2b3c4e;
  box-sizing: border-box;
  border-radius: 6.2069px;
  height: 108px;
  width: 90% !important;
}
.fileimg {
  height: 300px;
  width: 300px;
}
.block {
  display: flex;
  flex-direction: column;
  margin: 20px;
}
.text {
  color: #1abc9c;
  font-size: 20px;
  font-family: "Roboto Condensed", serif;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}
.digit {
  color: #ecf0f1;
  font-size: 20px;
  font-weight: 100;
  font-family: "Roboto", serif;
  margin: 10px;
  text-align: center;
}
.form-group > .files > p {
  font-family: Avenir;
  font-size: 16px;
  text-align: center;
  padding: 50px 0;
  color: #2b3c4e;
}
.uploadfil {
  opacity: 0;
  position: absolute;
  cursor: pointer;
}
.uploaded {
  width: 100%;
  height: 100%;
}
.icon {
  margin-right: 15px;
}
.form-group > label {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #2b3c4e;
}
.buttonholder {
  text-align: center;
  padding: 50px;
}
.buttonholder2 {
  text-align: center;
  padding: 20px;
}
button {
  margin-left: auto;
  margin-right: auto;
  width: 125px;
  height: 41px;
  background: #2b3c4e;
  border-radius: 4px;
  border: none;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
}
.button2 {
  background: #2b3c4e;
  border-radius: 4px;
  width: 205px;
  height: 41px;
}
textarea {
  border: 1.5px solid #2b3c4e;
  box-sizing: border-box;
  border-radius: 4px;
  width: 95%;
}
input {
  border: 1.5px solid #2b3c4e;
  height: 41px;
  box-sizing: border-box;
  border-radius: 4px;
  width: 90%;
}
.correct {
  border: 1.5px solid #2b3c4e;
  height: 41px;
  box-sizing: border-box;
  border-radius: 4px;
  width: 95%;
}
.h6 {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #2b3c4e;
}
.timer {
  height: 100px;
  font-size: 60px;
}
</style>