
( function ( $ ) {
  'use strict';
  // use $(document).ready() for jQuery code in external js file
  // $(function(){}) is shorthand for $(document).ready(function(){}
  $( function () {

  //************************
  // Model
  // cat data is here
  //************************

  var model = {
    cats: [
    {
      name: 'cat-1',
      image: 'images/cat-1.jpg',
      clickCount: 0
    },

    {
      name: 'cat-2',
      image: 'images/cat-2.jpg',
      clickCount: 0
    },
    
    {
      name: 'cat-3',
      image: 'images/cat-3.jpg',
      clickCount: 0
    },
    
    {
      name: 'cat-4',
      image: 'images/cat-4.jpg',
      clickCount: 0
    },

    {
      name: 'cat-5',
      image: 'images/cat-5.jpg',
      clickCount: 0  
    }
    ],
    selectedCat: 0
  };

  //************************
  // Views
  // viewList for the nav menu
  // viewCat to display selected cat
  //************************

  var viewList = {
    init: function(){
      // grab elements and html for using in the render function
      this.$catList = $('#cat-List');
      this.render();
    },
    render: function(){
      // Cache vars for use in forEach() callback
      var $catList = this.$catList,
          catListID = '#';
      // for each cat create a nav <li> item with unique id
      // and click handler to display chosen cat
      octopus.getCats().forEach(function(cat) {
        // nav item
        $catList.append('<li><a href="#" class="cat-list-item" id="show' + cat.catID + '">' + cat.name + '</a></li>');
        // save unique menu id
        catListID = '#show' + cat.catID;
        // attach click event to unique id
        // the id is remembered for each of the nav items
        $(catListID).click(function(e){
          octopus.setSelectedCat(cat.catID);
          viewCat.render();
        });
      });
    }
  };