let time= 2000,
  currentImageIndex=0,
  images= document
            .querySelectorAll( "#slider img")
    maxImages=images.length;


    function nextImage(){

      images[currentImageIndex].
          classList.remove("selected")

      currentImageIndex++
      if( currentImageIndex>=maxImages) 
        currentImageIndex=0

      console.log(currentImageIndex)
      images[currentImageIndex].
          classList.add("selected")
      
    }


    function start () {
      setInterval(()=> {
        // Lógica de troca de images

        nextImage()

      },time)
    }


  

    window.addEventListener( "load",start)