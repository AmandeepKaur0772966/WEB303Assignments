$(document).ready(function () {
  $("#tabs li a:not(:first)").addClass("inactive");
  $(".tabContainer").hide();
  $(".tabContainer:first").show();

  $("#tabs li a").click(function () {
    var t = $(this).attr("id");
    if ($(this).hasClass("inactive")) {
      $("#tabs li a").addClass("inactive");
      $(this).removeClass("inactive");

      $(".tabContainer").hide();
      $("#" + t + "Tab").fadeIn("slow");
    }
  });

  function toggleIcon(e) {
    $(e.target)
      .prev(".panel-heading")
      .find(".short-full")
      .toggleClass("glyphicon-plus glyphicon-minus");
  }

  $(".panel-group").on("hidden.bs.collapse", toggleIcon);
  $(".panel-group").on("shown.bs.collapse", toggleIcon);
});
