class Landing{
    //property
  database= {
    "Adharsh":{username:"Adharsh", password:"1234"},
    "Ajith":{username:"Ajith", password:"12345"},
    "Justin":{username:"Justin", password:"123456"}
    }
   

    //method to store data

    storeData(){
        if(this.database){
            localStorage.setItem("database",JSON.stringify(this.database)) //(key,value)
        }
    }

    //method to retrieve data
    getData(){
        const data =JSON.parse(localStorage.getItem("database"))
        console.log(data);
    }

    register(){
        
      let regusnm=newusername.value
       let regpswd=newpassword.value

        console.log(regusnm);
        console.log(regpswd);

        if(regusnm=="" || regpswd=="" ){
            alert(`please fill the form`)
        }
        else{
            if(regusnm in this.database){
                alert(`user already exist`)
            }
            else{
                this.database[regusnm]={username:regusnm,password:regpswd}
                console.log(this.database);
                obj.storeData()
                alert(`successfull`)
                window.location=`index.html` //to navigate
            }
        }
    }




    login(){
        this.getData()

        let uname =loginusername.value
        let pswd =loginpassword.value
        console.log(uname);
        console.log(pswd);

        if(uname=="" || pswd==""){
            alert(`please fill the form`)
        }
        else{
            if(uname in this.database){
                if(this.database[uname].password == pswd){
                    alert(`log-in succesfull`)
                    localStorage.setItem("user",uname);     
                    window.location=`dashboard.html`
                }/* else{
                    alert(`incorrect username or password`)
                }
 */
            }
            else{
                alert(`incorrect username or password`)
            }
        }
    }




} 

const obj = new Landing()
obj.login()



obj.getData()