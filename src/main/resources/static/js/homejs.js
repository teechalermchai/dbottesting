$(document).ready(function () {

	var someVarName = "value";
	
	$(document).on('click', '#nextName', function(){
	
		fname = $("#firstname").val();
		lname = $("#lastname").val();
		email = $("#email").val();
		x=[];
		x["fname"]=fname;
		x["lname"]=lname;
		x["email"]=email;
		$("#test").empty();
		$("#test").append('<div class="container-fluid">'+
				'<div class="row">'+
				'<div class="col-md-6 col-sm-6 col-12">'+
					'<div>'+
						'<h4>what is your gender<span></span></h4>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="row">'+
				'<div class="col-lg-3 col-md-6 col-sm-6 col-12">'+
					'<select id=gender class="form-control" data-width="100%">'+
						'<option disabled selected></option>'+
					'</select>'+
				'</div>'+
			'</div>'+
		'</div>'+
			'<div class="footer">'+
					'<div class="col-lg-3 col-md-6 col-sm-6 col-12">'+
					'<br><button id="backGender" type="button" class="btn btn-secondary">back</button>'+
					'<button id="nextGender" type="button" class="btn btn-primary float-right">next</button>'+
					'</div>'+
			'</div>');
		
		$.ajax({
			type: "GET",
			url: "/dbottesting/rest/genderList",
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function(result) {
						$(result).each(function(index){
        					gender = result[index];
        					$("#gender").append('<option value='+gender["genderId"]+'>'+gender["genderDesc"]+'</option>');
					  	});
					 } 	
				});
				
		myFunction(x);
	
	});
	
	$(document).on('click', '#backAge', function(){
	
		$("#test").empty();
		$("#test").append('<div class="container-fluid">'+
				'<div class="row">'+
				'<div class="col-md-6 col-sm-6 col-12">'+
					'<div>'+
						'<h4>what is your gender<span></span></h4>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="row">'+
				'<div class="col-lg-3 col-md-6 col-sm-6 col-12">'+
					'<select id=gender class="form-control" data-width="100%">'+
						'<option disabled selected></option>'+
					'</select>'+
				'</div>'+
			'</div>'+
		'</div>'+
			'<div class="footer">'+
					'<div class="col-lg-3 col-md-6 col-sm-6 col-12">'+
					'<br><button id="backGender" type="button" class="btn btn-secondary">back</button>'+
					'<button id="nextGender" type="button" class="btn btn-primary float-right">next</button>'+
					'</div>'+
			'</div>');
		
		$.ajax({
			type: "GET",
			url: "/dbottesting/rest/genderList",
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function(result) {
						$(result).each(function(index){
        					gender = result[index];
        					$("#gender").append('<option value='+gender["genderId"]+'>'+gender["genderDesc"]+'</option>');
					  	});
					 } 	
				});
	
	});
	
	$(document).on('click', '#backGender', function(){
		$("#test").empty();
		$("#test").append('<div class="container-fluid">'+
			'<div class="row">'+
				'<div class="col-md-6 col-sm-6 col-12">'+
					'<h4>please enter your data</h4>'+
				'</div>'+
			'</div>'+
			'<div class="row">'+
				'<div class="col-lg-3 col-md-6 col-sm-6 col-12">First name</div>'+
			'</div>'+
			'<div class="row">'+
				'<div class="col-lg-3 col-md-6 col-sm-6 col-12">'+
					'<input type="text" id="firstname" class="form-control">'+
				'</div>'+
			'</div>'+
			'<div class="row">'+
				'<div class="col-lg-3 col-md-6 col-sm-6 col-12">Last name</div>'+
			'</div>'+
			'<div class="row">'+
				'<div class="col-lg-3 col-md-6 col-sm-6 col-12">'+
					'<input type="text" id="lastname" class="form-control">'+
				'</div>'+
			'</div>'+
			'<div class="row">'+
				'<div class="col-lg-3 col-md-6 col-sm-6 col-12">'+
					'E-mail'+
					'<div class="row">'+
						'<span id="failReasonEmail" class="col-12"></span>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="row">'+
				'<div class="col-lg-3 col-md-6 col-sm-6 col-12">'+
					'<input type="text" id="email" class="form-control">'+
				'</div>'+
			'</div>'+
		'</div>'+
		'<div class="footer">'+
		'<div class="col-lg-3 col-md-6 col-sm-6 col-12">'+
					'<br><button id="nextName" type="button" class="btn btn-primary float-right">next</button>'+
					'</div>'+
		'</div>');
	});
	
	$(document).on('click', '#nextGender', function(){
	
		gender = $("#gender").val();
		x=[];
		x["gender"]=gender;
		$("#test").empty();
		$("#test").append('<div class="container-fluid">'+
		'<div class="row">'+
				'<div class="col-md-6 col-sm-6 col-12">'+
					'<h4>select your age range</h4>'+
				'</div>'+
			'</div>'+
			'<div id="rangeAge">'+
			'</div>');
			
		$.ajax({
			type: "GET",
			url: "/dbottesting/rest/rangeAgeList",
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function(result) {
						$(result).each(function(index){
        					rangeAge = result[index];
        					$("#rangeAge").append('<div class="row">'+
				'<div class="col-lg-3 col-md-6 col-sm-6 col-12">'+
					'<input type="radio" id="age'+rangeAge["rangeAgeId"]+'" name="age"> <label>'+rangeAge["rangeDesc"]+'</label>'+
				'</div>'+
			'</div>');
					  	});
					  	
					  	$("#test").append('<div class="footer">'+
							'<div class="col-lg-3 col-md-6 col-sm-6 col-12">'+
							'<br><button id="backAge" type="button" class="btn btn-secondary">back</button>'+
							'<button id="nextAge" type="button" class="btn btn-primary float-right">next</button>'+
							'</div>'+
							'</div>');
					 
					 }  	
				});
				
		myFunction(x);
	
	});
	
	$(document).on('click', '#backquestion', function(){
	
		$("#test").empty();
		$("#test").append('<div class="container-fluid" id="test1">'+
		'<div class="row">'+
				'<div class="col-md-6 col-sm-6 col-12">'+
					'<h4>select your age range</h4>'+
				'</div>'+
			'</div>');

				
		$.ajax({
			type: "GET",
			url: "/dbottesting/rest/rangeAgeList",
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function(result) {
						$(result).each(function(index){
        					rangeAge = result[index];
        					$("#test1").append('<div class="row">'+
				'<div class="col-lg-3 col-md-6 col-sm-6 col-12">'+
					'<input type="radio" id="age'+rangeAge["rangeAgeId"]+'" name="age"> <label>'+rangeAge["rangeDesc"]+'</label>'+
				'</div>'+
			'</div>');
					  	});
					  	
					  	$("#test").append('<div class="footer">'+
							'<div class="col-lg-3 col-md-6 col-sm-6 col-12">'+
							'<br><button id="backAge" type="button" class="btn btn-secondary">back</button>'+
							'<button id="nextAge" type="button" class="btn btn-primary float-right">next</button>'+
							'</div>'+
							'</div>');
					 
					 }  	
				});
	
	});
	
	
	
	$(document).on('click', '#nextAge', function(){
	
		var markedAge = document.getElementsByName('age'); 
		 a=1; 
  			for (var age of markedAge) {  
    			if (age.checked){  
      				rangeAge=a;
      				} 
      			a++;
  				}
		
		x=[];
		x["rangeAge"]=rangeAge;
		$("#test").empty();
		$("#test").append('<div class="container-fluid" id="test1">'+
				'<div class="row">'+
				'<div class="col-md-6 col-sm-6 col-12">'+
					'<div>'+
						'<h4>select all countries from Asia<span></span></h4>'+
					'</div>'+
				'</div>'+
			'</div>'
		);
		
		$.ajax({
			type: "GET",
			url: "/dbottesting/rest/countryList",
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function(result) {
						$(result).each(function(index){
        					country = result[index];
        					$("#test1").append('<div class="row">'+
				'<div class="col-lg-3 col-md-6 col-sm-6 col-12">'+
					'<input type="checkbox" id="'+country["countryId"]+'" name="checkbox"> <label >'+country["countryName"]+'</label>'+
  				'</div>'+
			'</div>');
					  	});
					  	
					  	$("#test").append('<div class="footer">'+
							'<div class="col-lg-3 col-md-6 col-sm-6 col-12">'+
							'<br><button id="backquestion" type="button" class="btn btn-secondary">back</button>'+
							'<button id="nextquestion" type="button" class="btn btn-primary float-right">next</button>'+
							'</div>'+
							'</div>');
					 
					 }  	
				});
		myFunction(x);
	
	});
	
	$(document).on('click', '#backFav', function(){
	
		$("#test").empty();
		$("#test").append('<div class="container-fluid" id="test1">'+
				'<div class="row">'+
				'<div class="col-md-6 col-sm-6 col-12">'+
					'<div>'+
						'<h4>select all countries from Asia<span></span></h4>'+
					'</div>'+
				'</div>'+
			'</div>'
		);
		
		$.ajax({
			type: "GET",
			url: "/dbottesting/rest/countryList",
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function(result) {
						$(result).each(function(index){
        					country = result[index];
        					$("#test1").append('<div class="row">'+
				'<div class="col-lg-3 col-md-6 col-sm-6 col-12">'+
					'<input type="checkbox" id="'+country["countryId"]+'" name="checkbox"> <label >'+country["countryName"]+'</label>'+
  				'</div>'+
			'</div>');
					  	});
					  	
					  	$("#test").append('<div class="footer">'+
							'<div class="col-lg-3 col-md-6 col-sm-6 col-12">'+
							'<br><button id="backquestion" type="button" class="btn btn-secondary">back</button>'+
							'<button id="nextquestion" type="button" class="btn btn-primary float-right">next</button>'+
							'</div>'+
							'</div>');
					 
					 }  	
				});
	
	});
	
	$(document).on('click', '#nextquestion', function(){
		 x = [];
		 y = [];
		 z = [];
		 var markedCheckbox = document.getElementsByName('checkbox'); 
		 a=1;
		 b=0; 
  			for (var checkbox of markedCheckbox) {  
    			if (checkbox.checked){  
      				y[b]=a;
      				z[b]= y[b];
      				b++;
      				}
      			a++;
  				}
  		x["country"]=z;
  				 	
		$("#test").empty();
		$("#test").append('<div class="container-fluid">'+
					'<div class="row">'+
				'<div class="col-md-6 col-sm-6 col-12">'+
					'<h4>how spicy do you like your food</h4>'+
				'</div>'+
			'</div>'+
			'<div class="row">'+
				'<div class="col-lg-3 col-md-6 col-sm-6 col-12">'+
					'<div class="slidecontainer">'+
						'<input type="range" min="1" max="100" value="50" class="slider" id="myRange">'+
						'<p>Value: <span id="demo"></span></p>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'</div>'+
			'<div class="footer">'+
					'<div class="col-lg-3 col-md-6 col-sm-6 col-12">'+
					'<br><button id="backFav" type="button" class="btn btn-secondary">back</button>'+
					'<button id="submit" type="button" class="btn btn-primary float-right">submit</button>'+
					'</div>'+
			'</div>'
			);
		var slider = document.getElementById("myRange");
		var output = document.getElementById("demo");
		output.innerHTML = slider.value;

		slider.oninput = function() {
  		output.innerHTML = this.value;
		}
		myFunction(x)
	});
	
	$(document).on('click', '#submit', function(){
		
		x=[];
		value = $("#myRange").val();
		x["spicy"]=value;
		myFunction(x);
		submitFunction()
	
	});
	
	function submitFunction(){
		format = {};
		input = [];
		main = {};
		genderId = {};
		age = {};
		z = [];
		age["rangeAgeId"] = localStorage.getItem("rangeAge");
		genderId["genderId"] = localStorage.getItem("gender");
		main["firstName"] = localStorage.getItem("fname");
		main["lastName"] = localStorage.getItem("lname");
		main["email"] = localStorage.getItem("email");
		main["genderId"] = genderId;
		main["age"] = age;
		main["spicyLv"] = localStorage.getItem("spicy");
		result = JSON.parse(localStorage.getItem("country"));
		$(result).each(function(index){
		input = {};
		input["countryId"] = result[index];
			z[index] = input;
		});
		
		format["main"] = main;
		format["country"] = z;
		
		$.ajax({
				type: "POST",
				url: "/dbottesting/rest/save",
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				data: JSON.stringify(format),
				success: function(result) {
							console.log(result);
							a = result["main"]
							mainId = a["mainId"]
							
							showResult(mainId)
							
					}
			});
	
	}
	
	function showResult(mainId){
	
		$.ajax({
				type: "POST",
				url: "/dbottesting/rest/getData",
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				data: JSON.stringify(mainId),
				success: function(result) {
							console.log(result);
							main = result["main"];
							selectedCountry = result["selectedCountry"];
							age = main["age"];
							rangeDesc = age["rangeDesc"];
							gender = main["genderId"];
							
							fname = main["firstName"];
							lname = main["lastName"];
							email = main["email"];
							genderDesc = gender["genderDesc"];
							rangeDesc = age["rangeDesc"];
							spicyLv = main["spicyLv"];
							var country = '';
							var country1 = '';
							var add;
							$(selectedCountry).each(function(index){
								x = selectedCountry[index];
								countryId = x["countryId"];
								countryName = countryId["countryName"];
								
								if(index<1){
									country = '<div class="col-lg-3 col-md-6 col-sm-6 col-6">'+countryName+'</div>'
									
								} else {
									add = '<div class="row"><div class="col-lg-3 col-md-6 col-sm-6 col-6"></div><div class="col-lg-3 col-md-6 col-sm-6 col-6">'+countryName+'</div></div>'
									country1 = country1+add;
								}
								
							});
							
							$("#test").empty();
							$("#test").append('<div class="row">'+
			'<div class="col-lg-3 col-md-6 col-sm-6 col-6">First name :</div>'+
			'<div class="col-lg-3 col-md-6 col-sm-6 col-6">'+fname+'</div>'+
		'</div>'+
		'<div class="row">'+
			'<div class="col-lg-3 col-md-6 col-sm-6 col-6">Last name :</div>'+
			'<div class="col-lg-3 col-md-6 col-sm-6 col-6">'+lname+'</div>'+
		'</div>'+
		'<div class="row">'+
			'<div class="col-lg-3 col-md-6 col-sm-6 col-6">E-mail :</div>'+
			'<div class="col-lg-3 col-md-6 col-sm-6 col-6">'+email+'</div>'+
		'</div>'+
		'<div class="row">'+
			'<div class="col-lg-3 col-md-6 col-sm-6 col-6">Gender :</div>'+
			'<div class="col-lg-3 col-md-6 col-sm-6 col-6">'+genderDesc+'</div>'+
		'</div>'+
		'<div class="row">'+
			'<div class="col-lg-3 col-md-6 col-sm-6 col-6">Age range :</div>'+
			'<div class="col-lg-3 col-md-6 col-sm-6 col-6">'+rangeDesc+'</div>'+
		'</div>'+
		'<div class="row">'+
			'<div class="col-lg-3 col-md-6 col-sm-6 col-6">Country :</div>'+country+'</div>'+country1+'<div class="row">'+
			'<div class="col-lg-3 col-md-6 col-sm-6 col-6">Spicy Level :</div>'+
			'<div class="col-lg-3 col-md-6 col-sm-6 col-6">'+spicyLv+'</div>'+
		'</div>');
							
							
					}
			});
	
	}
	
	
	function myFunction(x){
	
		if((x["fname"]!=null)&&(x["fname"]!='')&&(x["fname"]!=undefined)){
			localStorage.setItem("fname", x["fname"]);
			console.log(localStorage.getItem("fname"));
		}
		if((x["lname"]!=null)&&(x["lname"]!='')&&(x["lname"]!=undefined)){
			localStorage.setItem("lname", x["lname"]);
			console.log(localStorage.getItem("lname"));
		}
		if((x["email"]!=null)&&(x["email"]!='')&&(x["email"]!=undefined)){
			localStorage.setItem("email", x["email"]);
			console.log(localStorage.getItem("email"));
		}
		if((x["gender"]!=null)&&(x["gender"]!='')&&(x["gender"]!=undefined)){
			localStorage.setItem("gender", x["gender"]);
			console.log(localStorage.getItem("gender"));
		}
		if((x["rangeAge"]!=null)&&(x["rangeAge"]!='')&&(x["rangeAge"]!=undefined)){
			localStorage.setItem("rangeAge", x["rangeAge"]);
			console.log(localStorage.getItem("rangeAge"));
		}
		if((x["country"]!=null)&&(x["country"]!='')&&(x["country"]!=undefined)){
			localStorage.setItem("country", JSON.stringify(x["country"]));
			console.log(JSON.parse(localStorage.getItem("country")));
		}
		if((x["spicy"]!=null)&&(x["spicy"]!='')&&(x["spicy"]!=undefined)){
			localStorage.setItem("spicy", x["spicy"]);
			console.log(localStorage.getItem("spicy"));
		}
	
	};
	
});