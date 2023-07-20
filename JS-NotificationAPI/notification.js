const notifyObj={
    body:'You have a new Mail',
    image:'./image.jpg',
    icon:'./icon.jpg',
}
function notifyMe(){
    alert('About to notify');

    //ask user for permisssion using requestPermission method of notification
    // api which returns a promise in response


    Notification.requestPermission()
    .then((userPermission)=>{console.log(userPermission)
    //here userPermission is a string value
    if(userPermission==='default'){
        alert('Please Provide Permission')
    }
    else{
        //the notification constructor will take two notification (first:title,second:body)
        new Notification('New Mail',notifyObj);
    }
    })
}
