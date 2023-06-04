let admin = prompt('who is there?')
if(admin == 'Admin'){
    let davamet = confirm('Devam etmek isteyirsiz?')
    console.log(davamet);
    if(davamet){
        let parol = prompt('parolu daxil edin');
       if(parol == 'TheMaster'){
       alert('Welcome!')
       }      
       else{
        alert('wrong password!');
       }
    }  
}
else {
    alert("I don't know you");
}


