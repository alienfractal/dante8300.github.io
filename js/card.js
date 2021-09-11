


 function renderCardtoGrid(gridId){

    var mockImg = 'https://thumb.gyazo.com/thumb/200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfOWNjMDM4NDUwODUwYWU4MWMyNTNiMWRkMjQzNTcyNWMifQ.Sm4K6s0Y6PzL7VGBmDWdEb4SvElnMGMJQwHLCsdxoGg-png.jpg';

    // generate the html for card
    var html = '<div class="card shadow-outside">';
    html += ' <div class="card__image">';
    html += ' <img src="'+mockImg+'" alt="">';
    html += ' <div class="card__overlay card__overlay--pixelgradient ">';
    html += ' <div class="card__overlay-content">';
    html += '   <ul class="card__meta">';
    html += '<li><a href="#0"><i class="fa fa-tag"></i> Title </a></li>';
    html += ' <li><a href="#0"><i class="fa fa-clock-o"></i> Date</a></li>';
    html += ' <li><a href="#0"><i class="fa fa-clock-o"></i> 2 days ago</a></li>';
    html += '  <a href="#0" class="card__title">Card Title '+gridId+'</a>';
    html += '  </ul>';
    
    html += '</div>';
    html += '</div>   ';
    html += '  </div>  ';
    html += '</div>   ';
  // add it to the DOM tree
    var results = document.getElementById(gridId);
    results.innerHTML += html;
 
 }

 function populateGrid(){
  for (let index = 0; index < 9; index++) {
    renderCardtoGrid('grid1');
    renderCardtoGrid('grid2');
    renderCardtoGrid('grid3');
    
  }

 }

