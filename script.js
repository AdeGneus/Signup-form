let fName = document.getElementById("firstName");
        let lName = document.getElementById("lastName");
        let emailAdd = document.getElementById("email");
        let passWord = document.getElementById("password");
        
        const freeTrial = () => {
            if (fName.value === '') {
                document.getElementById("fNameEmpty").innerHTML = "First Name cannot be empty"; 
            } else if (lName.value === '') {
                document.getElementById("lNameEmpty").innerHTML = "Last Name cannot be empty"; 
            } else if (emailAdd.value === '') {
                document.getElementById("wrongEmail").innerHTML = "Looks like this is not an email"; 
            } else {
                document.getElementById("emptyPassword").innerHTML = "Password cannot be empty";
            }
        }