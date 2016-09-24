/*********************************************************************/
/* Dean Attali 2016                                                  */
/* timevis                                                           */
/* Create timeline visualizations in R using htmlwidgets and vis.js  */
/*********************************************************************/

HTMLWidgets.widget({

  name : 'timevisBasic',
  type : 'output',

  factory : function(el, width, height) {

    var elementId = el.id;
    var container = document.getElementById(elementId);
    var timeline = new vis.Timeline(container, [], {});
    var initialized = false;

    return {

      renderValue: function(opts) {
        if (!initialized) {
          initialized = true;
          alert("timeline is initialized!");

          if (HTMLWidgets.shinyMode) {
            alert("Ooh, Shiny!");
          }
        }
        timeline.itemsData.clear();
        timeline.itemsData.add(opts.items);
      },

      resize : function(width, height) {
        // we won't be implementing a resize function
      }
   
    };
  }
});