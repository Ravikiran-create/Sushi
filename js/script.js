$(document).ready(function() {
  //toggler btn
  $(".navbar-toggler").click(function() {
    $(".navbar-toggler").toggleClass("change");
  });

  //ripples
  $("#header,.info").ripples({
    dropRadius: 20,
    perturbance: 0
  });

  //magnific popup
  $(".parent-container").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallary: {
      enabled: true
    }

    // other options
  });
});
