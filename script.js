document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let userData = {
        name: document.getElementById("name").value,
        department: document.getElementById("department").value,
        year: document.getElementById("year").value
    };

    // Save to local storage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));

    // Simulated AJAX request
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://example.com/register", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Registration successful!");
            document.getElementById("registrationForm").reset();
        }
    };
    xhr.send(JSON.stringify(userData));
});
