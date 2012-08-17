/* Author: FRONT END
Site specific application codes.
*/


/*	dashboard namespace	*/
dashboard = {
 common : {
 	alert :function () {
 		alert(this.config.message);
 	},
   init : function(){
      this.config.message = "Hello POPS";
   },
   config : {
       message : "my POP!", 
   }
 },
 mapping : {
   init     : function(){
       //create a map
   },
   geolocate    : function(){
       //geolocation is cool
   },
   geocode : function(){
       //look up an address or landmark
   },
   drawPolylines : function(){
       //draw some lines on a map
   },
   placeMarker : function(){
       //place markers on the map
   }
 }
};


// Another name space for another file...
dashboard2 = {
 common : {
 	alert :function () {
 		alert(this.config.message);
 	},
   init : function(){
      this.config.message = "Hello POPS";
   },
   config : {
       message : "my POP!", 
   }
 },
 mapping : {
   init     : function(){
       //create a map
   },
   geolocate    : function(){
       //geolocation is cool
   },
   geocode : function(){
       //look up an address or landmark
   },
   drawPolylines : function(){
       //draw some lines on a map
   },
   placeMarker : function(){
       //place markers on the map
   }
 }
};