<template>
    

<div class="wrap">
		<div class="row" style="max-width:1350px;">
			<div class="col-md-3">
				<div class="sidebar">
					<div class="inside">
					<div class="john">
						<img class="image1" src="../assets/john.png">
						<h1 class="name">JOSH DOE</h1>
						<p class="mail">J.doe@enyata.com</p>
						
					</div>

						<div class="tool">
							<div class="image2">
								<img src="../assets/dashboard.png">
								<small class="describe pl-3">Dashboard</small>
								
							</div>

							<div class="image3">
								<img src="../assets/create.png">
								<small  class="describe pl-3">Create Application</small>
								
							</div>

							<div class="image33">
								<img src="../assets/entries.png">
								<small style="font-weight: bold;" class="describe pl-3">Application Entries</small>
								
							</div>
							

							<div class="image3">
								<img src="../assets/compose.png">
								<small class="describe pl-3">Compose Assessment</small>
								
							</div>
							

							<div class="image4">
								<img src="../assets/logout.png">
								<small class="describe pl-3">Log Out</small>
								
							</div>
							
							
						
					</div>

					</div>

					
					
				</div>
				
			</div>
			<div class="col-md-9">
				<div class="otherSide">
					<div class="top">
						<!-- <p>Entries -Batch2 <i class="fa fa-caret-down arrow"></i></p> -->
						      	<div class="dropdown">
						      	<p>Entries- Batch 2<i class="fa fa-caret-down arrow"></i></p>
						  		<!-- <button class="dropbtn">Dropdown</button> -->
						 		 <div class="dropdown-content">
						   		 <a style="font-size: 12px;" href="#">Batch 1</a>
						    	<a style="font-size: 12px;" href="#">Batch 2</a>
						    	<a style="font-size: 12px;" href="#">Batch 3</a>
						  	</div>
							</div>
						<p class="applied">Comprises of all that applied for batch2</p>
						
					</div>

					<div class="down">
						<table class="table">
						  <thead class=" head">
						    <tr>
						      <th scope="col">Name</th>
						      <th scope="col">Email</th>
						      <th scope="col">DOB.Age<i class="fa fa-sort pl-2"></i></th>
						      <th scope="col">Address</th>
						      <th scope="col">University</th>
						      <th scope="col">CGPA <i class="fa fa-sort pl-2"></i></th>
						    </tr>
						  </thead>
						  <tbody>
						    <tr class="line">
						      <th class="data" scope="row">Ify chinke</th>
						      <td class="data">ify@enyata.com</td>
						      <td class="data">12/09/19-22</td>
						      <td class="data">3,sabo ave.yaba Lagos</td>
						      <td class="data">University of Nigeria </td>
						      <td class="data">5.0</td>
						    </tr>
						    <tr class="line">
						      <th class="data" scope="row">Ify chinke</th>
						      <td class="data">ify@enyata.com</td>
						      <td class="data">12/09/19-22</td>
						      <td class="data">3,sabo ave.yaba Lagos</td>
						      <td class="data">University of Nigeria </td>
						      <td class="data">5.0</td>
						    </tr>
						    <tr class="line">
						      <th class="data" scope="row">Ify chinke</th>
						      <td class="data">ify@enyata.com</td>
						      <td class="data">12/09/19-22</td>
						      <td class="data">3,sabo ave.yaba Lagos</td>
						      <td class="data">University of Nigeria </td>
						      <td class="data">5.0</td>
						    </tr>
						  </tbody>
						</table>
						
					</div>


					
				</div>
				
			</div>
			
			
		</div>
		
	</div>

    </template>


<style scoped>
    .wrap{
	height: 200vh;
	/*border: 1px solid blue;*/
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

.sidebar{
		/*border: 1px solid green;*/
		height: 200vh;

	}

	.otherSide {
		/*border: 1px solid red;*/
		height: 200vh;
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
/* identical to box height */

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
		/* identical to box height */

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
		/* identical to box height */

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
		/* identical to box height */

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

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

a:hover{
	color: #000;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ffff; opacity: 0.9;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

.applied{
	font-family: Lato;
	font-style: italic;
	font-weight: normal;
	font-size: 13px;
	line-height: 16px;
	/* identical to box height */

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
	/* identical to box height */

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

