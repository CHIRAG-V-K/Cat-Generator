function generateCatButton() {
   let image= document.createElement('img');
   image.src="https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
   let div= document.createElement('div');
   div= document.getElementById('imagebox').appendChild(image);
 }

 function resetButton() {
   //document.getElementById('imagebox').remove();
   window.location.reload();
   }