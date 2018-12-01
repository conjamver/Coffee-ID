var app = new Vue({
  el: '#app',
  data: {
      firstName:"",
      lastName:""
  },
methods:{
    //Change Image url FUNCTION
        AvaterSelect: function(){
            //selecting elements and array of images
            var avaterSelect = document.getElementById("avaterSelect");
            var avater = document.getElementById("avater");
            var avaterArray = ["../img/ninjaAvater.png","../img/vampireAvater.png","../img/robotAvater.png"];
            //Changing the image 
            switch(avaterSelect.value){
                    
                case "1":
                    alert("test");
                    avatar.src="test.png";
                    break;
                case "2":
                    avatar.src=avaterArray[1];
                    break;
                case "3":
                    avatar.src=avaterArray[2];
                    break;
                case "0":
                    avatar.src="test.png";
                    break;
                    
            }
       } 
    }
});