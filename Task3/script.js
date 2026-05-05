function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let valid = true;

    // Reset errors
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    // Validation
    if (email === "") {
        document.getElementById("emailError").innerText = "Email required";
        valid = false;
    }

    if (password === "") {
        document.getElementById("passwordError").innerText = "Password required";
        valid = false;
    }

    if (!valid) return;

    // Send data to backend
    fetch("api/login.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `email=${email}&password=${password}`
    })
    .then(res => res.json())
    .then(data => {
        if (data.status === "success") {
            document.getElementById("result").innerText = "Login Successful ✅";
        } else {
            document.getElementById("result").innerText = data.message;
        }
    });
}
