import * as $ from "jquery";
import { signUserUp, signUserOut, signUserin, changePage } from "./model";

function initListeners() {
  // login
  console.log("init");
  $("#submit").on("click", () => {
    const firstName = $("#fName").val();
    const lastName = $("#lName").val();
    const email = $("#email").val();
    const password = $("#password").val();

    signUserUp(firstName, lastName, email, password);
  });

  $("#so").on("click", () => {
    signUserOut();
  });

  $("#siSubmit").on("click", () => {
    let siEmail = $("#siEmail").val();
    let siPassword = $("#siPassword").val();
    signUserin(siEmail, siPassword);
  });
}

function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  console.log("route", pageID);
  changePage(pageID);
}

// this function adds the url change listener to the window
function initSite() {
  $(window).on("hashchange", route);
  route();
}

$(document).ready(function () {
  initListeners();
  initSite();
});
