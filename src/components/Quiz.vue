<template>
    <div>
        <div class="top">
            <div class="left">
                <h1>Take Assessment</h1>
                <p class="instruct">Click the finish button below to submit assessment, you can go back at any time to edit your <br>answers.</p>
            </div>
            <div class="right">
                <h2>Timer</h2>
            </div>
        </div>

        <div class="mid">
            <center>
                <span class="numbering">Question 1</span>
                <br>
                <p class="title">What is the purpose of HDR technology?</p>
            </center>
            <br>

                 <div class="quizzes">
                        <ul>
                            <li><label for="muhRadio1"><input type="radio" name="muhRadio" value=""/><span>A. To reduce the file size of images and videos.</span></label></li>
                            <br>
                            <li><label for="muhRadio2"><input type="radio" name="muhRadio" value=""/><span>B. To speed up 3D rendering performance.</span></label></li>
                            <br>
                            <li><label for="muhRadio3"><input type="radio" name="muhRadio" value=""/><span>C. To support higher video resolutions.</span></label></li>
                            <br>
                            <li><label for="muhRadio4"><input type="radio" name="muhRadio" value=""/><span>D. To display more colors in image z xbnm s and videos</span></label></li>
                        </ul>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <div class="buttonholder">
                            <button type="submit">Previous</button>
                        </div>
                    </div>

                    <div class="form-group col-md-6">
                        <div class="buttonholder">
                            <button type="submit">Next</button>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.top {
    display: flex;
    justify-content: space-between;
}
.left {
    float: right;
}
.right {
    float: right;
}
h1 {
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 43.5555px;
    line-height: 52px;
    letter-spacing: -0.02em;
    color: #2B3C4E;
}
.instruct {
    font-family: Lato;
    font-style: italic;
    font-weight: bold;
    font-size: 16px;
    color: #2B3C4E;
}
h2 {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    text-align: left;
    margin-right: 100px;
    line-height: 52px;
    color: #4F4F4F;
}
.mid {
    width: 100%;
    margin-top: 80px;
}
.numbering {
    font-family: Lato;
    font-style: italic;
    font-weight: 500;
    font-size: 14px;
    color: #2B3C4E;
}
.title {
    font-family: Lato;
    font-style: italic;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #2B3C4E;
}
.quizzes {
    text-align: left;
    width: 100%;
    padding-left: 350px;
    padding-right: 150px
}
label {
    font-family: Lato;
    font-style: italic;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #2B3C4E;
}
label span:hover {
    height: 50px;
    background: #31D283;
    background-size: 50px;
    transition-delay: 250ms;
}
ul {
    list-style: none;
}
input[type=radio] {
    width: 8px;
    height: 8px;
    border: 1px solid #2B3C4E;
    -webkit-appearance: none;
    margin-right: 20px;
}

input[type=radio]:checked {
  background-color: #2B3C4E;
  background-size: 8px 8px;
}

input[type=radio]:focus {
  outline-color: transparent;
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
    background: #2B3C4E;
    border-radius: 4px;
    border: none;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
}
.button2 {
    background: #CECECE;
    border-radius: 4px;
    width: 205px;
    height: 41px;
}
</style>