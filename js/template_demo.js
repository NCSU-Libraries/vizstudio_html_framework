(function() {

  var colors = ['#fff','#ddd','#bbb'];
  var zones = document.querySelectorAll('.zone');
  for (var i = 0; i < zones.length; i++) {
    var zone = zones[i];
    if (!zone.classList.contains('demo-show')) {
      var width = zone.offsetWidth;
      var colorIndex = i % colors.length;
      var classes = [];
      zone.classList.forEach(function(c) { classes.push('.' + c); });
      var html = classes.join('<br>');
      html = html + '<br><br>(' + width + ' x 1080)'
      var p = document.createElement('p');
      p.style.fontFamily = 'monospace';
      p.style.textAlign = 'center';
      p.style.fontSize = '100px'
      p.innerHTML = html;
      var wrapper = document.createElement('div');
      wrapper.style.background = colors[colorIndex];
      wrapper.classList.add('wrapper');
      wrapper.appendChild(p);
      zone.appendChild(wrapper);
    }
  }

})();
