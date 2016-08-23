// $(document).ready(function(){
//   $("#search").keyup(function(){
//     var value = this.value;
//     console.log(value);
//     if (value == $('li'){
    		 
//     };
//   });
// });

$(document).click(function() {
	var search = $("#search");
	var searchLowerCase = search.val().toLowerCase();
	var searchJoin = searchLowerCase.split(' ').join('_');
	console.log(searchJoin);

	if(searchJoin == $('.resources li').attr('class')){
		var result = $('.resources li').attr('class');
		console.log(result);
		return result.css("color", "red");
	} else {
		// alert(" Make Suer spelling is correct");
	}
});