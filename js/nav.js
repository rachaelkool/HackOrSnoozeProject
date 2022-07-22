"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
  $("#submit-form").hide();
  $("#my-stories").hide();
  $("#favorited-stories").hide();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */
function navFavoritesClick(evt) {
  console.debug("navFavoritesClick", evt);
  hidePageComponents();
  putFavoritesListOnPage();
  $("#submit-form").hide();
  $("#my-stories").hide();
}

$body.on("click", "#nav-favorites", navFavoritesClick);

function navMyStories(evt) {
  console.debug("navMyStories", evt);
  hidePageComponents();
  putUserStoriesOnPage();
  $ownStories.show();
  $("#submit-form").hide();
  $("#favorited-stories").hide();

}

$body.on("click", "#nav-my-stories", navMyStories);


function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

function showSubmitForm() {
  $("#submit-form").show();
  $("#my-stories").hide();
  $("#favorited-stories").hide();
  $("#all-stories-list").show();



}

$('#nav-submit').on('click', showSubmitForm);
