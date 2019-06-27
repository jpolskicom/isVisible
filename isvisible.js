/*
  Check visibility of element by Jacek Polski 2019
*/
export function isVisible(elem){
  this.item = document.querySelector(elem);
  if (this.item) {
    window.addEventListener('scroll', () => {
      let pageTop = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);
      if (pageTop >= this.item.offsetTop-(pageTop/2) && !this.item.classList.contains('visible')) {
        this.item.classList.add('visible');
      }
    })
  }
}
