var app = new Vue({
  el: '#app',
  data: {
      firstName:"",
      lastName:""
  },
methods:{
    //Change Image url FUNCTION
        AvatarSelect: function(){
            //selecting elements and array of images
            var avatarSelect = document.getElementById("avatarSelect");
            var avatar = document.getElementById("avatar");
            var avatarArray = ["img/ninjaAvatar.png","img/vampireAvatar.png","img/robotAvatar.png", "img/cubeAvatar.png"];
            //Changing the image 
            switch(avatarSelect.value){
                case "0":
                    avatar.src=avatarArray[3];
                    break;
                case "1":
                    avatar.src=avatarArray[0];
                    break;
                case "2":
                    avatar.src=avatarArray[1];
                    break;
                case "3":
                    avatar.src=avatarArray[2];
                    break;
            }
       } 
    }
});