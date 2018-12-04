// For menu display
$( document ).ready(function() {
    $(".menu").click(function() {
      $(".menu").addClass("active");
      $(".triangle").addClass("active");
      $(".menu-open").addClass("active");
    })

    $(".close").click(function() {
      $(".menu-open").removeClass("active");
      $(".menu").removeClass("active");
      $(".triangle").removeClass("active");
    })
});
