class login{
    data ={
        "Adharsh": {username:"adharsh", password:"1234"}
    }

    savedata(){
        if (this.data){
        localStorage.setItem("data",JSON.stringify(this.data))
    }
}

    getdata(){
        const details=JSON.parse(localStorage.getItem("data"))
        console.log(details);
    }

    signup(){
    let usnm = newusername.value
    let pswd = newpassword.value

     console.log(usnm);
     console.log(pswd);

     if(usnm=="" ||pswd=="" ){
        alert(`enter values`)
     }
     else{
        if(usnm in this.data){
            alert(`user exists`)
        }
        else{
            this.data[usnm]={username:usnm, password:pswd}
            obj.savedata()
            console.log(this.data);
            alert(`successfull`)
            window.location=`index.html`
        }
     }

    }

    signin(){
        this.getdata()

       let usnm=userName.value
       let pswd=passWord.value


       if(usnm=="" || pswd==""){
        alert("enter values")
       }
       else if (usnm in this.data){
        if(this.data[usnm].password==pswd){
            alert(`login successfull`)
            window.location=`dashboard.html`
        }
        else{
            alert(`incorrect password`)
        }

       }
       else{
        alert(`incorrect username`)
       }

    }




}



const obj=new login()

obj.getdata()
