$(document).ready(function () {

  $(".logout-btn").click(function () {
    if (document.getElementById("big-block2").style.display = 'block') {
      document.getElementById("big-block2").style.display = 'none'
      document.getElementById("big-block").style.display = 'grid'
    }
  })
  // burger nav
  $(".icon").click(function () {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  })
  //plus minus
  let count = +($(".kg-text").text());
  let sum = count;
  let count2 = +($(".gumar-input").val())
  let sum2 = count2;
  $(".plus-btn").click(function () {
    sum += 1000
    sum2 += 0.5
    $(this).closest(".min-block").find(".gumar-input").val(`${sum2}KG`)
    $(this).closest(".min-block").find(".kg-text").text(sum)
  })
  $(".minus-btn").click(function () {
    if (sum !== 0) {
      sum -= 1000
      sum2 -= 0.5
      $(this).closest(".min-block").find(".gumar-input").val(`${sum2}KG`)
      $(this).closest(".min-block").find(".kg-text").text(sum)
    }
  })

  let loginText = document.querySelector(".title-text .login");
  let loginForm = document.querySelector("form.login");
  let loginBtn = document.querySelector("label.login");
  let signupBtn = document.querySelector("label.signup");
  let signupLink = document.querySelector("form .signup-link a");
  signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
  })
  loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
  });
  signupLink.onclick = (() => {
    signupBtn.click();
    return false;
  })
  document.getElementById("myDIV").style.display = "none"
  document.getElementById("myDIV2").style.display = "none"

  let users = [];

  if (users.length !== 0) {
    let usersJson = JSON.stringify(users);
    localStorage.setItem('usersStorage', usersJson);
  }

  $(".submit-btn").click(function () {
    let login = $(".name").val();
    let password = $(".password").val();

    let userStogage = localStorage.getItem('usersStorage');
    let users = JSON.parse(userStogage);
    if (users == null) {
      users = [];
    }

    for (key of users) {
      if (login && password && key.name == login && key.pass == password) {
        myfunction()
      } else {
        document.getElementById("myDIV").style.display = "block"
      }
    }

    $(".name").val("");
    $(".password").val("");
  });

  $(".signup-btn").click(function () {
    let login2 = $(".name-input").val();
    let password2 = $(".password-input").val();
    let password3 = $(".password2-input").val();

    if (password2 == password3) {

      let userStogage = localStorage.getItem('usersStorage');
      let users = JSON.parse(userStogage);
      if (users == null) {
        users = [];
      }
      myfunction()
      users.push({
        name: login2,
        pass: password2
      })

      let usersJson = JSON.stringify(users);
      localStorage.setItem('usersStorage', usersJson);
    } else {
      document.getElementById("myDIV2").style.display = "block"
    }

    $(".name-input").val("");
    $(".password-input").val("");
    $(".password2-input").val("");
  });

  document.getElementById("big-block2").style.display = 'none'
  function myfunction() {
    document.getElementById("big-block").style.display = 'none'
    document.getElementById("big-block2").style.display = 'block'
  }

  //modal
  let modal = document.getElementById("myModal");
  $(".my-cart-btn").click(function () {
    modal.style.display = "block";
  })
  $(".close").click(function () {
    modal.style.display = "none";
  })
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  $(".ptichka").hide()
  let nshan = 0;
  let appblock = $("#customers")
  let btn2 = $(".add-btn");
  btn2.click(function () {
    let anun = $(this).closest(".min-block").find(".min-block-text").text()
    let gin = $(this).closest(".min-block").find(".kg-text").text()
    let qash = $(this).closest(".min-block").find(".gumar-input").val()
    appblock.append(`<tr class="table-tr"><td class="table-td">${anun}</td><td class="table-td">${gin}</td><td class="table-td">${qash}</td><td class="table-td"><button class="x-btn">Empty</button></td></tr>`);
    let sum3 = 0;
    sum3 += gin
    let btn3 = $(".pay-btn")
    btn3.text("")
    btn3.text(`${+(sum3)}AMD`)
    nshan++
    $(".ptichka").text(+(nshan))
    $(".ptichka").show()
    let imgblock = $(this).closest(".min-block")
    imgblock.append(`<div class="check-div"><i class='check'></i></div>`)
  })


  $(".modal").on("click", '.x-btn', function () {
    $(this).closest("#customers").find(".table-td").remove();
    $(this).closest(".min-block").find(".check-div").remove()
  })

});

