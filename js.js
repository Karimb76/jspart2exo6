var tab = [document.getElementById('image1'), document.getElementById('image2'), document.getElementById('image3'), document.getElementById('image4'), document.getElementById('image5')]
//tableau avec les varianles des iamges

for (var i=0; i<tab.length; i++) {
  tab[i].addEventListener('mouseover', function() {
    this.src = this.id + '_2.jpg';
      }
    )
  tab[i].addEventListener('mouseout', function () {
    this.src = this.id + '.jpg';
  }
)
}
