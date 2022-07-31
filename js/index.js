(function () {
  $(document).ready(function () {
    $(".tabs li").click(function () {
      $(this).addClass("active").siblings("li").removeClass("active");
    });
  });
})();
