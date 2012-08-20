/* Author: FRONT END
  Site specific application codes.

*/



/*  dashboard namespace */
dashboard = {
  getStockInfo : function() {
    // Use Data JS to parse ODATA format. This enables us to deal with the underlying
    // payload data without having to parse the XML tags ourselves. 
    // refer to DATAJS website for more details on how to use it.
    OData.defaultHttpClient.enableJsonpCallback = true;

    // Namespaced Global associative array. 
    $.tickerData = { };  // usage: $.tickerData.myVarName = "STRING" to set. 

    // set headers to JSON if we intend to have JSON being returned to us.
    OData.read({ requestUri: "http://175.156.130.85/TAExchangeBrokerage/Brokerage.svc/stocks", headers: { Accept: "application/json"} },
    function (data, request) {

        var jdata = data.results;

        $.each(data.results, function (i, data) {
        $.tickerData[data.tickerSymbol] = data.stockName;
      });
   
      dashboard.updateStockInfo();

      // Uncomment to view stockName : stockTicker pair 
      // $.each($.tickerData, function (index, value) {
      //       console.log( index + ' : ' + value );
      // });
    });
  },

  updateStockInfo : function() {
    // set headers to JSON if we intend to have JSON being returned to us.
    OData.read({ requestUri: "http://175.156.130.85/TAExchangeBrokerage/Brokerage.svc/markets", headers: { Accept: "application/json"} },
    function (data, request) {

    var jdata = data.results;

    $.tickerData["dataArray"] = new Array();
        for (var i = 0; i < jdata.length; i++) {
           // Store data in global var
           $.tickerData["dataArray"][i] = $.tickerData[jdata[i].tickerSymbol] + '(' + jdata[i].tickerSymbol + '.HK), ' + jdata[i].change +" (" + jdata[i].changeinPercent+")";
        }

      // Append results in to HTML div to be displayed.
      for (var i = 0; i < $.tickerData["dataArray"].length; i+=3) {
      // Todo: Check for $.tickerData being undefined !  
      // console.log($.tickerData["dataArray"][i] +' | ' + $.tickerData["dataArray"][i+1] +' | ' + $.tickerData["dataArray"][i+2]);

      $(".carousel-inner").append(
        "<div id=\"ticker-data\" class=\"item\">"+$.tickerData["dataArray"][i] +' | ' + $.tickerData["dataArray"][i+1] +' | ' + $.tickerData["dataArray"][i+2]+"</div>"
        )
      }

    });
  },

  startCarousel : function () {

    this.getStockInfo(); 
    setInterval(this.updateStockInfo, 5000);

    $('.carousel').carousel({
      interval: 3000
    });
    
  }

};


/*	test namespace	*/
test = {
 common : {
 	setUpCarousel :function () {
 		
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