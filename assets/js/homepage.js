var getUserRepos = function(user){
    var apiUrl = "https://api.github.com/users/" + user + "/repos";
//    var apiUrl = "https://api.github.com/users/jmead171/repos";


    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {    
        console.log(data);
        });
    });
};

getUserRepos();