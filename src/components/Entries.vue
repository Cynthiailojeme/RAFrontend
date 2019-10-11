<template>
    <!-- <div class="create"> -->
        <!-- <div class="row" style="max-width:1350px;">  -->
                <!-- <div class="col-sm-3">
                    <AdminSidebar />
                </div> -->
                <!-- <div class="col-sm-9"> -->
                    <div class="other-side">
                        	<div class="top">
						      	<div class="dropdown">
						      	    <p>Entries- Batch 2<i class="fa fa-caret-down arrow"></i></p>
						  		</div>
						            <p class="applied">Comprises of all that applied for batch2</p>
						    </div>

                        <div class="down">
                            <div id="vueapp" class="vue-app">
                                <kendo-grid :data-source="applicants" :columns="columns"
                                            :sortable="true"
                                            :filterable="false"
                                            :groupable="false"> 
                                </kendo-grid>
                            </div>
                        </div>
                    </div>                    
                <!-- </div> -->
        <!-- </div> -->
    <!-- </div>        -->
</template>


<script>

// import AdminSidebar from '@/components/AdminSidebar.vue';
import { lstat } from 'fs';

export default {
    name: 'forms',
    components: {
    // AdminSidebar,
    },
    data() {
	  
    return{
	  apiResponse:{},
	  columns: [
            { field: "fullname",title:"Name", width:"180px"},
            { field: "email", title: "Email", width: "230px"},
            { field: "date_of_birth", title:"DOB.Age"},
			{ field: "address", title:"Address", width: "100px" },
			{ field: "university", title:"University", width: "180px" },
			{ field: "cgpa", title:"CGPA" }
        ],
      applicants:[{
		  first_name: "",
		  last_name: "",
		  email: "",
		  date_of_birth: "",
		  address: "",
		  university: "",
		  cgpa: ""

	  }],
	  
	  error:{},
	  
    //   formdata: {}
    };
  },

    methods: {
        onChange: function(ev) {
            var selected = $.map(ev.sender.select(), function(item) {
                return $(item).text();
            });

            console.log("Selected: " + selected.length + " item(s), [" + selected.join(", ") + "]");
		},
		calcDOB: function(data){
			var date = new Date(data).getFullYear();
			var tday = new Date().getFullYear();

			return tday - date;
		}
    },
    mounted() {
    this.$http.get('http://localhost:3000/recruit')
    .then(response =>{
    //   console.log(response)
      this.applicants = response.data
	  console.log(this.applicants)
	  for (let i = 0; i < this.applicants.length; i++) {
		  const dob = this.applicants[i].date_of_birth;
		  let calcdob = this.calcDOB(dob)
		  this.applicants[i].date_of_birth = calcdob+"years"
		  this.applicants[i].fullname = this.applicants[i].first_name+" "+this.applicants[i].last_name
	  }
    })
  },
}
</script>

<style >
thead{
		background-color:#2b3c4e !important;
		color:#FFFFFF;
	}

    td{
        font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 19px;
/* identical to box height */

/* text-align: center; */

color: #4F4F4F;

    }

th{
    font-family: Lato;
font-size: 14px;
line-height: 17px;
/* identical to box height */

/* text-align: center; */

color: #FFFFFF;

}
/* .create {
    border:1px solid red;
    height: 200vh;
} */


 tbody{
background-color: #FFFFFF !important;
} 
.k-alt:hover{
    background-color: #ffff!important;
    box-shadow: 8px 18px 20px rgba(79, 79, 79, 0.3)!important;
    border-left:10px solid green!important;
    border:10px solid blue!important;
}

.k-alt, .k-pivot-toolbar, .k-pivot-layout>tbody>tr:first-child>td:first-child {
    background-color: #ffffff !important;
}
/* tr.k-alt{
    background-color: #ffffff!important;

}
tr:hover{
 
    box-shadow: 8px 18px 20px rgba(79, 79, 79, 0.3)!important;
    background: #FFFFFF!important;
box-shadow: 8px 18px 20px rgba(79, 79, 79, 0.3)!important;
border-radius: 8px!important;
border-left:10px solid green!important;
} */ 
.main {
    margin-left: 300px;
    padding: 0px 70px 50px 50px;
}
.head {
	color:  #ffffff;
	font-family: Lato;
	font-size: 14px;
	line-height: 17px;
	/* identical to box height */

	/*text-align: center;*/
	background-color: #2B3C4E;
}
.otherSide {
/*border: 1px solid red;*/
    height: 100%;
}

.inside {
height: 200vh;
width :292px;
/*border: 1px solid black;*/
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
background-color: #ffffff;
}

.john {
width: 292px;
height: 255px;
background: #5ABEFD;
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
color: #2B3C4E;
padding-left:97px;
padding-top: 4px;

}

.mail {
font-family: Lato;
font-style: italic;
font-weight: normal;
font-size: 16px;
line-height: 19px;
letter-spacing: -0.02em;
color: #2B3C4E;
text-align: center;
}

.tool{
/*border: 1px solid red;*/
height: 80vh;
font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;

color: #2B3C4E;

}

.image2{
padding-top: 83px;
padding-left: 43px;
}

.image3{
padding-top:28px;
padding-left: 43px;
}

.image4 {
padding-top: 69px;
padding-left: 43px;
}

.image33{
margin-top:20px; 
padding-top:10px;
/*padding-bottom: 20px;*/
padding-left: 38px;
border-left: 4px solid #31D283;	


}

.top{
font-family: Lato;
font-style: normal;
font-weight: 300;
font-size: 40px;
line-height: 52px;

letter-spacing: -0.02em;

color: #2B3C4E;
opacity: 0.9;
padding-top:101px;
/*padding-left: 42px;*/

}

.arrow{
padding-left: 16px;
}

.dropdown {
position: relative;
display: inline-block;
}
/*drop down content hidden by default*/
.dropdown-content {
display: none;
position: absolute;
background-color: #ffff;
min-width: 160px;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
z-index: 1;
flex:right;
}
.dropdown-content a {
color: black;
padding: 12px 16px;
text-decoration: none;
display: block;
}

a:hover{
color: #000;
}
.dropdown-content a:hover {background-color: #ffff; opacity: 0.9;}

.dropdown:hover .dropdown-content {display: block;}

.applied{
font-family: Lato;
font-style: italic;
font-weight: normal;
font-size: 13px;
line-height: 16px;

/*text-align: center;*/

color: #4F4F4F;

}

.down{
padding-top: 38px;
}

.data{
font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;

/*text-align: center;*/

color: #4F4F4F;

}

.line:hover{
background: #FFFFFF;
box-shadow: 8px 18px 20px rgba(79, 79, 79, 0.3);
border-radius: 8px;
border-left: 6px solid #31D283;;
}


</style>
