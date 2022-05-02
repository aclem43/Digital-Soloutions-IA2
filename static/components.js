



const getHeader = (user) => {
        let data;
        if (user) {
            data = user;
        }
        else{
            data = "Not Logged In"
        }
        return `
<div class="header">
    <div class="flex textcenter">
        <img height="75px" class="logo" src="static/Images/sitelogo.png" onclick="toPage('index.html')">
        <h1 class="textcenter">Indooroopilly State High School UN Day</h1>
    </div>
    <div>
        <p id="permissionlevel" class="permissionlvel textright">${data}</p>
    </div>
</div>
`

}