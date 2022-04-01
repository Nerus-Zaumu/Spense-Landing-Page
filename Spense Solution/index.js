function hamburgerMenuClick(){
   let elRef = document.getElementById('hidden-menu')
    elRef.hidden = !elRef.hidden
    elRef.hidden ? elRef.style.visibility = 'visible' : elRef.style.visibility = 'hidden';
    if(elRef.hidden){
        elRef.style.height = 'fit-content'
    }
    if(!elRef.hidden){
            elRef.style.height = '0px'
        }
        console.log(getWidth())
}

function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }
