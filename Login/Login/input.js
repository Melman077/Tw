const inputLog = document.querySelector("#inputLog");
const inputPwd = document.querySelector("#inputPwd");
const submit = document.querySelector(".submit");
const mainBox = document.querySelector(".mainBox");

submit.onclick = function onclick() {
  const dl = inputLog.value;
  const dp = inputPwd.value;

 if (dl == user2 && dp == user2Pwd) {
    console.log("user2 sucssesfull");
    mainBox.style.animation = "resize forwards 1s";
    inputPwd.value = " ";
    setTimeout(function () {
      window.location.href = "../selectFile/index.html";
    }, 1500);
  } else {
    console.log("We dont know you");
  }
};
