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
            var avatarPreview = document.getElementById("avatarPreview");
            var avatarArray = ["img/cubeAvatar.png", "img/ninjaAvatar.png","img/vampireAvatar.png","img/robotAvatar.png" ];
            //Changing the image 
            switch(avatarSelect.value){
                case "0":
                    avatar.src=avatarArray[0];
                    avatarPreview.src=avatarArray[0];
                    break;
                case "1":
                    avatar.src=avatarArray[1];
                    avatarPreview.src=avatarArray[1];
                    break;
                case "2":
                    avatar.src=avatarArray[2];
                    avatarPreview.src=avatarArray[2];
                    break;
                case "3":
                    avatar.src=avatarArray[3];
                    avatarPreview.src=avatarArray[3];
                    break;
            }
       } 
    }
});