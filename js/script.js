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
     createStory();
   });
   $( "#Tel-Aviv" ).click(function() {
     Destination = "Tel-Aviv";
     createStory();
   });
   $( "#Haifa" ).click(function() {
     Destination = "Haifa";
     createStory();
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
      createStory();
      $("#exampleModal").modal()
    }
    return false;    //<---- Add this line
  }
});

$('.bg').on('dragstart', function(event) { event.preventDefault(); });

//runs after everything is rendered.
$( "#facebook" ).click();


function createStory(){
  $.get( "http://10.185.1.31:2000/map/"+Destination, function( data ) {

    viewer = OpenSeadragon({
        id: "openseadragon1",
        prefixUrl: "./openseadragon/images/",
        preserveViewport: true,
        visibilityRatio:    1,
        minZoomLevel:       1,
        defaultZoomLevel:   1,
        toolbar:       "toolbarDiv",
        sequenceMode:       true,
        tileSources: data.infoUrl
    });
  });
}
