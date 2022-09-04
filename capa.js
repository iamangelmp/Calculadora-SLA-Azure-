const init = document.scripts;

for (script of init) {
    var metodo = script.innerHTML;
    if (metodo.contains("buddy_id")) {
      leedata(metodo);
    }
  }
  
  function leedata(data) {
    //console.alert(data);
    let arr = data.split('{}');
    for (ar of arr){
        let test = ar.split('"buddy_id":');
        formateaInfo(test)
    }
  }

  function formateaInfo(test){
      let file = []
      for (profile of test){
          if(profile.contains('user')){
              
              estructurainfo(profile)
            file.push(profile)
          }
      }
      console.log(file)
  }


  function estructurainfo(profile){
      let user_id = profile.slice(0, 25);
      let name_user = profile.split('\"');
      user_id = user_id.split('\"');


    dataObject = 
    {
        user_id: user_id[1] ,
        name: name_user[15],
        profile_picture: ''
    }
    console.table(dataObject)
}

