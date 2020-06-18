$(document).ready(function() {
  $.getJSON('https://reqres.in/api/users?page=1', function(data) {
    console.log(data.data[0].email);
    userData = data.data;
    $.each(userData, function () {
      $('.user-row-container').append(
        '<div class="user-row"><img class="user-image" src="' + this.avatar + '"><p class="user-name">' + this.first_name + ' ' + this.last_name + '</p><p class="user-email">' + this.email + '</p><p class="job-role">Developer</p><button class="isActive">Activated</button></div>'
      )
  });
 });
})