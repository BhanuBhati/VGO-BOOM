function signin()
{
	axios.post('http://api.vgo.gg/IAuth/ExecuteSteamLogin/v1/',)
  .then(function(response){
    console.log('saved successfully')
  });  
}
function process()
{
	axios.get('http://api.vgo.gg/ICase/GetCaseSchema/v1')
		.then(function(response){
			console.log(response);
		});	
}

9C8220633F7CF4D6027DDEF4BD3D3108