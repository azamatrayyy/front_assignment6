
$(document).ready(function() {
  console.log("jQuery is ready!");

  
  $("#btn-change-text").click(function() {
    $("#personal-headline").text("Updated: Computer Science Student");
    $("#personal-headline").css("color", "#007bff");
  });

 
  $("#btn-dark").click(function() {
    $("body").removeClass("light-theme").addClass("dark-theme");
  });

  $("#btn-light").click(function() {
    $("body").removeClass("dark-theme").addClass("light-theme");
  });


  $("#btn-hide").click(function() {
    $("#status-message").hide();
  });

  $("#btn-show").click(function() {
    $("#status-message").show();
  });

  $("#btn-toggle").click(function() {
    $("#status-message").toggle();
  });

  
  $("#btn-fade-out").click(function() {
    $(".gallery-img").fadeOut();
  });

  $("#btn-fade-in").click(function() {
    $(".gallery-img").fadeIn();
  });

  $("#btn-fade-toggle").click(function() {
    $(".gallery-img").fadeToggle();
  });

  
  $(".acc-header").click(function() {
   
    $(this).next(".acc-content").slideToggle();
  });

  
  $("#btn-append").click(function() {
    let skillText = $("#skill-input").val().trim();
    if (skillText !== "") {
      $("#skills-list").append("<li>" + skillText + "</li>");
      $("#skill-input").val(""); 
    } else {
      alert("Please enter a skill!");
    }
  });

  $("#btn-prepend").click(function() {
    let skillText = $("#skill-input").val().trim();
    if (skillText !== "") {
      $("#skills-list").prepend("<li>" + skillText + "</li>");
      $("#skill-input").val(""); 
    } else {
      alert("Please enter a skill!");
    }
  });

  $("#btn-remove").click(function() {
    $("#skills-list li:last").remove();
  });

  $("#btn-change-link").click(function() {
  let currentHref = $("#social-link").attr("href");

    if (currentHref.includes("youtube.com")) {
      $("#social-link")
        .attr("href", "https://github.com")
        .text("GitHub");
      $("#btn-change-link").text("Change Link to YouTube");
    } else {
      $("#social-link")
        .attr("href", "https://youtube.com")
        .text("YouTube");
      $("#btn-change-link").text("Change Link to GitHub");
    }
  });

  $("#name-input").on("input", function() {
    let nameVal = $(this).val();
    $("#preview-name").text(nameVal !== "" ? nameVal : "---");
  });

  $("#email-input").on("input", function() {
    let emailVal = $(this).val();
    $("#preview-email").text(emailVal !== "" ? emailVal : "---");
  });

  let isAnimated = false;

  $("#btn-animate-skills").click(function() {
    if (!isAnimated) {
      
      $("#bar-html").animate({ width: $("#bar-html").data("width") }, 1000);
      $("#bar-js").animate({ width: $("#bar-js").data("width") }, 1000);
      $("#bar-cs").animate({ width: $("#bar-cs").data("width") }, 1000);
      isAnimated = true;
    } else {
     
      $(".skill-bar-fill").animate({ width: "0%" }, 1000);
      isAnimated = false;
    }
  });

});