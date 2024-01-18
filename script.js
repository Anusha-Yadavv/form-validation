function loginUser(event) {
  const emailEle = document.getElementById("loginEmail");
  const passwordEle = document.getElementById("loginPassword");
  const email = emailEle.value;
  const password = passwordEle.value;

  const userDataString = localStorage.getItem("userData");
  console.log("USER DATA STRING ", userDataString);

  if (userDataString) {
    var userData = JSON.parse(userDataString);

    var existingUser = userData.find((user) => user.email === email);
    console.log("EXISTING USER", existingUser);

    if (existingUser) {
      if (existingUser.password === password) {
        console.log("EXISTING USER", existingUser);

        window.location.href = "courses.html";

        return false;
      } else {
        document.getElementById("loginErrorMessage").innerHTML =
          "Incorrect password";
        return false;
      }
    } else {
      document.getElementById("loginErrorMessage").innerHTML =
        "User not found. Please create an account.";
      return false;
    }
  } else {
    document.getElementById("loginErrorMessage").innerHTML =
      "User not found. Please sign up.";
    return false;
  }
}

function toggleSignupForm() {
  let signupContainer = document.querySelector(".sign-up-container");
  let signinContainer = document.querySelector(".sign-in-container");
  console.log("SIGN UP", signupContainer);
  console.log("SIGN IN", signinContainer);
  signupContainer.style.display =
    signupContainer.style.display === "none" ||
    signupContainer.style.display === ""
      ? "block"
      : "none";
  signinContainer.style.display = "none";
}

function signUpUser(event) {
  var username = document.getElementById("signupUsername").value;
  var email = document.getElementById("signupEmail").value;
  var password = document.getElementById("signupPassword").value;

  var existingUserDataString = localStorage.getItem("userData");
  console.log("user exist", existingUserDataString);
  var existingUsers = existingUserDataString
    ? JSON.parse(existingUserDataString)
    : [];
  console.log("PARSED EXISTING USERS", existingUsers);

  var existingUser = existingUsers.find((user) => user.email === email);
  console.log("exist user Email", existingUser);

  if (existingUser) {
    document.getElementById("signupErrorMessage").innerHTML =
      "User with the same email already exists. Please log in or use a different email.";
    return false;
  }

  var newUser = {
    username: username,
    email: email,
    password: password,
  };

  existingUsers.push(newUser);

  localStorage.setItem("userData", JSON.stringify(existingUsers));

  alert("Sign up successful!");
  return true;
}

function logoutUser(){
    // localStorage.removeItem("userData");
    window.location.href = "index.html";

}