function hello()
{
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    document.getElementById("fullname").innerHTML += fname + " "+lname;
}

