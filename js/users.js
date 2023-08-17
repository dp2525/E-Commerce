const hardcodeUsers = [
{id: '99999',   username: 'admin',      password: 'admin',     role: 'admin',  email: 'admin@user.com'	    ,firstname: 'Admin',      lastname: '',         	address: '400-265 Yorkland Blvd', city:201, country: 2, region:21, postcode:'M2J 1S5', tel:'416-485-2098'},
{id: '12345',   username: 'Bilal',      password: 'bilal',     role: 'user',   email: 'bilal@user.com'      ,firstname: 'Bilal', 	  lastname: 'Mohammed', 	address: '400-265 Yorkland Blvd', city:201, country: 2, region:21, postcode:'M2J 1S5', tel:'416-485-2098'},
{id: '67890',   username: 'Dhvani',     password: 'dhvani',    role: 'user',   email: 'dhvani@user.com'     ,firstname: 'Dhvnai',     lastname: 'Patel',   		address: '400-265 Yorkland Blvd', city:201, country: 2, region:21, postcode:'M2J 1S5', tel:'416-485-2098'},
{id: '09876',   username: 'Haaris',     password: 'haaris',    role: 'user',   email: 'haaris@user.com'	    ,firstname: 'Haaris',     lastname: 'Muhammad',   	address: '400-265 Yorkland Blvd', city:201, country: 2, region:21, postcode:'M2J 1S5', tel:'416-485-2098'},
{id: '54321',   username: 'Nidhi',      password: 'nidhi',     role: 'user',   email: 'nidhi@user.com'	    ,firstname: 'Nidhi',      lastname: 'Patel',      	address: '400-265 Yorkland Blvd', city:201, country: 2, region:21, postcode:'M2J 1S5', tel:'416-485-2098'},
{id: '23456',   username: 'Sudarshan',  password: 'sudarshan', role: 'user',   email: 'sudarshan@user.com'	,firstname: 'Sudarshan',  lastname: 'Bhatta',    	address: '400-265 Yorkland Blvd', city:201, country: 2, region:21, postcode:'M2J 1S5', tel:'416-485-2098'},
{id: '78901',   username: 'Tom',        password: 'tom',       role: 'user',   email: 'tom@user.com'	    ,firstname: 'Tom',        lastname: 'Hanks',        address: '400-265 Yorkland Blvd', city:203, country: 2, region:22, postcode:'M2J 1S5', tel:'416-485-2098'},
];

const countryList = [
    { id: 1, name: 'USA', regions: [
      { id: 11, name: 'California', cities: [
        { id: 101, name: 'Los Angeles' },
        { id: 102, name: 'San Francisco' }
      ]},
      { id: 12, name: 'Texas', cities: [
        { id: 103, name: 'Houston' },
        { id: 104, name: 'Austin' }
      ]}
    ]},
    { id: 2, name: 'Canada', regions: [
      { id: 21, name: 'Ontario', cities: [
        { id: 201, name: 'Toronto' },
        { id: 202, name: 'Ottawa' }
      ]},
      { id: 22, name: 'Quebec', cities: [
        { id: 203, name: 'Montreal' },
        { id: 204, name: 'Quebec City' }
      ]}
    ]},
    { id: 3, name: 'Mexico', regions: [
      { id: 31, name: 'Jalisco', cities: [
        { id: 301, name: 'Guadalajara' },
        { id: 302, name: 'Tlaquepaque' }
      ]},
      { id: 32, name: 'Mexico City', cities: [
        { id: 303, name: 'Mexico City' },
        { id: 304, name: 'Coyoacan' }
      ]}
    ]}
  ];
  
  

function initUserData(){
    // If no users are stored in local storage, then initialize with a hardcoded list.
    var users = JSON.parse(localStorage.getItem('users'));
    if (users === null) {
        localStorage.setItem('users', JSON.stringify(hardcodeUsers));
    }
}
initUserData();

function getAllUsers(){
    return  JSON.parse(localStorage.getItem('users'));
}

function updateUsers(users){
    localStorage.setItem('users', JSON.stringify(users));
}

var storedUser;

function userGetCurrentLoginUser(){
    var storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
        return JSON.parse(storedUser);
    } else {
        return null;
    }
}

function userLogin(username, password) {
    var users = JSON.parse(localStorage.getItem('users'));
    const user = users.find(user => (user.email === username || user.username === username) && user.password === password);
    if (user) {
      alert("Login successful");
      localStorage.setItem("currentUser", JSON.stringify(user));
      window.location.href = "index.html";
      return user;
    } else {
        // to check if user entered valid username or not
        if ($("#uname").val() === '') {
            $(".usernameErrorMessage").text(" (Username cannot be empty!)");
        } else{
            $(".usernameErrorMessage").text("*");
        }
    
        // to check if user entered valid password or not
        if ($("#pword").val()=== '') {
            $(".passwordErrorMessage").text(" (Password cannot be empty!)");
        } else{
            $(".passwordErrorMessage").text("*");
        }
        
      alert("Login failed. Invalid username or password.");
      return null;
    }
}

function userLogout(){
    localStorage.removeItem('currentUser');
    alert("Logout successful.");
}


function checkLogin(){
    storedUser = userGetCurrentLoginUser();
    if(storedUser){
        $(".account-profile h5").text('Welcome, '+ storedUser.firstname + '!');
        $(".account-profile").show();
        $(".account-signin").hide();
    } else {
        $(".account-profile").hide();
        $(".account-signin").show();
    }
}

function login(){
    var usr = $('#uname').val();
    var pwd = $('#pword').val();
    var user = userLogin(usr, pwd);
    if(user != null){
        $(".account-profile h5").text('Welcome, '+ user.firstname + '!');
        $(".account-profile").show();
        $(".account-signin").hide();
        $('#uname').val('');
        $('#pword').val('');
        $("#loginError").val('');
    } else{
        $("#loginError").text('Invalid user or password');
        $('#uname').val('');
        $('#pword').val('');
    }
}

function loginForm(){
    var usr = $('#username-login').val();
    var pwd = $('#password-login').val();
    console.log("login form : user " + usr + " pwd " + pwd);
    var user = userLogin(usr, pwd);
    if(user != null){
        $(".account-profile h5").text('Welcome, '+ user.name);
        $(".account-profile").show();
        $(".account-signin").hide();
        $('#username-login').val('');
        $('#password-login').val('');
        $("#loginError").val('');
        window.location.href = "index.html";
    } else{
        $("#loginError").text('Invalid user or password');
        $('#username-login').val('');
        $('#password-login').val('');
    }
}


function logout(){
    userLogout();
    checkLogin();
}

$(document).ready(function() {
    checkLogin();

});