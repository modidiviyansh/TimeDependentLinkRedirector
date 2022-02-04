var hours = 100*(new Date().getHours())+1*(new Date().getMinutes());
var day = new Date().getDay();

switch(day) {
//    <!-- Switch Case for Monday : Case I
//                        Tuesday : Case II-
//                            Wednesday : Case III0
//                                Thursaday : Case 4
//                                    fRIDAY : Case 5-> -->
  case 1:
    if (hours>=940&& hours<1030) {window.location.href ="https://tiet.zoom.us/my/eced3";
    } else if (hours>=1030&& hours<1120) {window.location.href ="https://tiet.zoom.us/my/eced2";
    } else if (hours>=1300&& hours<1350) {window.location.href ="https://tiet.zoom.us/my/eced9";
    } else if (hours>=1530&& hours<1620) {window.location.href ="https://tiet.zoom.us/my/eced7";
    } else{window.location.href = "https://diviyansh.ml/";}    
    break;
  case 2:
    if (hours>=800&& hours<940) {window.location.href ="https://tiet.zoom.us/my/eced10";
    } else if (hours>=940&& hours<1120) {window.location.href ="https://tiet.zoom.us/my/eced12";
    } else if (hours>=1120&& hours<1300) {window.location.href ="https://tiet.zoom.us/my/eced12";
    } else if (hours>=1350&& hours<1440) {window.location.href ="https://tiet.zoom.us/my/eced2";
    } else if (hours>=1440&& hours<1530) {window.location.href ="https://tiet.zoom.us/my/eced12";
    } else if (hours>=1530&& hours<1620) {window.location.href ="https://tiet.zoom.us/my/eced6";
    } else if (hours>=1620&& hours<1800) {window.location.href ="https://tiet.zoom.us/my/eced9";
    } else{window.location.href = "https://diviyansh.ml/";}

    break;
 case 3:
        if (hours>=940&& hours<1209) {window.location.href ="https://tiet.zoom.us/my/eced12";
    } else if (hours>=1210&& hours<1300) {window.location.href ="https://tiet.zoom.us/my/eced2";
    } else if (hours>=1440&& hours<1530) {window.location.href ="https://tiet.zoom.us/my/eced14";
    } else if (hours>=1530&& hours<1620) {window.location.href ="https://tiet.zoom.us/my/eced8";
    } else{window.location.href ="https://diviyansh.ml/";}
        
    break;
  case 4:
    if (hours>=800&& hours<940) {window.location.href ="https://tiet.zoom.us/my/eced10";
    } else if (hours>=1120&& hours<1210) {window.location.href ="https://tiet.zoom.us/my/eced15";
    } else if (hours>=1210&& hours<1300) {window.location.href ="https://tiet.zoom.us/my/eced3";
    } else if (hours>=1530&& hours<1710) {window.location.href ="https://tiet.zoom.us/my/eced12";
    } else if (hours>=1710&& hours<1800) {window.location.href ="https://tiet.zoom.us/my/eced4";
    } else{window.location.href = "https://diviyansh.ml/";}

    break;
 case 5:
        if (hours>=940&& hours<1030) {window.location.href ="https://tiet.zoom.us/my/eced10";
    } else if (hours>=1030&& hours<1120) {window.location.href ="https://tiet.zoom.us/my/eced10";
    } else if (hours>=1120&& hours<1210) {window.location.href ="https://tiet.zoom.us/my/eced16";
    } else if (hours>=1210&& hours<1300) {window.location.href ="https://tiet.zoom.us/my/eced11";
    } else{window.location.href = "https://diviyansh.ml/";}
        
    break;

  default:
        window.location.href = "https://diviyansh.ml/"
    // code block
}

