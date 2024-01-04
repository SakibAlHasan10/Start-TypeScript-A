// union type basally uses more then one type
let userAge : (number | string | boolean);
userAge= "101";
userAge = 101;
userAge = true;

function userInfo(userData:string|number){
    console.log(userData)
}

userInfo(244)
userInfo("244")