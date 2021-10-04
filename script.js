//Assignment 3
//Amandeep Kaur(0772966)
$(document).ready(function () {
  function getMembersOne() {
    $.getJSON("./team.json", function (response) {
      let team = response.teammembers;
      team.forEach(function (teamMember) {
        let name = `<h3>${teamMember.name}</h3>`;
        $("#team").append(name);
        let title = `<h4>${teamMember.title}</h4>`;
        $("#team").append(title);
        let bio = `<p>${teamMember.bio}</p>`;
        $("#team").append(bio);
      });
    });
  }

  function getMembersTwo() {
    $.ajax({
      url: "./team.json",
      method: "GET",
      beforeSend: function () {
        $("#team").text("Loading...");
      },
      success: function (response) {
        setTimeout(function () {
          $("#team").empty();
          let team = response.teammembers;
          team.forEach(function (teamMember) {
            let name = `<h3>${teamMember.name}</h3>`;
            $("#team").append(name);
            let title = `<h4>${teamMember.title}</h4>`;
            $("#team").append(title);
            let bio = `<p>${teamMember.bio}</p>`;
            $("#team").append(bio);
          });
        }, 5000);
      },
    });
  }

  // getMembersOne();
  getMembersTwo();
});
