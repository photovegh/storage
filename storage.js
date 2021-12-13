console.log("Hello Server!!!!");
//localStorage.setItem("name", "Süsüsoft");
//localStorage.setItem("address", "Kohary");
console.log(
    localStorage.getItem("name") + " <- ez man a localStoragebol gyutt"
);

//sessionStorage.setItem("name", "Tibor");
console.log(
    sessionStorage.getItem("name") + " <*** ez man a sessionStoragebol gyutt"
);

document.cookie =
    "name = Tibor by the big Developer; expires = " +
    new Date(2021, 11, 14).toUTCString();

document.cookie =
    "familyName = Vegh; expires = " + new Date(2021, 11, 14).toUTCString();

console.log(document.cookie);
