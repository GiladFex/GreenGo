var contentType, Destination;



   $( "#facebook" ).click(function() {

     $('#facebookThumbnail').attr('src','img/facebookActive.png');
     $('#twitterThumbnail').attr('src','img/twitterDisabled.png');
     $('#instagramThumbnail').attr('src','img/instagramDisabled.png');

     $(".modal-header").addClass("facebook-header");
     $(".modal-header").removeClass("twitter-header");
     $(".modal-header").removeClass("instagram-header");

     $(".modal-body").addClass("facebook-body");
     $(".modal-header").removeClass("twitter-body");
     $(".modal-header").removeClass("instagram-body");

     contentType = "facebook";
   });




   $( "#twitter" ).click(function() {

     $('#facebookThumbnail').attr('src','img/facebookDisabled.png');
     $('#twitterThumbnail').attr('src','img/twitterActive.png');
     $('#instagramThumbnail').attr('src','img/instagramDisabled.png');

     $(".modal-header").removeClass("facebook-header");
     $(".modal-header").addClass("twitter-header");
     $(".modal-header").removeClass("instagram-header");

     $(".modal-header").removeClass("facebook-body");
     $(".modal-header").addClass("twitter-body");
     $(".modal-header").removeClass("instagram-body");

     contentType = "twitter";
   });




   $( "#instagram" ).click(function() {

     $('#facebookThumbnail').attr('src','img/facebookDisabled.png');
     $('#twitterThumbnail').attr('src','img/twitterDisabled.png');
     $('#instagramThumbnail').attr('src','img/instagramActive.png');

     $(".modal-header").removeClass("facebook-header");
     $(".modal-header").removeClass("twitter-header");
     $(".modal-header").addClass("instagram-header");

     $(".modal-header").removeClass("facebook-body");
     $(".modal-header").removeClass("twitter-body");
     $(".modal-header").addClass("instagram-body");

     contentType = "instagram";
   });




   $( "#Jerusalem" ).click(function() {
     Destination = "Jerusalem";
   });
   $( "#Tel-Aviv" ).click(function() {
     Destination = "Tel-Aviv";
   });
   $( "#Haifa" ).click(function() {
     Destination = "Haifa";
   });


$('#searchbox').keypress(function (e) {
  if (e.which == 13) {
    if(($("#searchbox").val() == "חיפה")||($("#searchbox").val() == "ירושלים") || ($("#searchbox").val() == "תל אביב")||($("#searchbox").val() == "תל-אביב")){
      if ($("#searchbox").val() == "חיפה"){
        Destination = "Haifa";
      }
      if ($("#searchbox").val() == "ירושלים"){
        Destination = "Jerusalem";
      }
      if (($("#searchbox").val() == "תל אביב")||($("#searchbox").val() == "תל-אביב")){
        Destination = "Tel-Aviv";
      }
      $("#exampleModal").modal()
    }
    return false;    //<---- Add this line
  }
});

$('.bg').on('dragstart', function(event) { event.preventDefault(); });

//runs after everything is rendered.
$( "#facebook" ).click();
