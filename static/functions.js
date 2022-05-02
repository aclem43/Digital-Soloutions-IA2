const changeMenu = (current_menu,new_menu) => {
    document.getElementById(current_menu).hidden = true
    document.getElementById(new_menu).hidden = false
}

const backFailLogin = () => {
    changeMenu("faillogin","logindiv")
}

const changeUser = (to) => {
    if (to !== "Not logged In") {
        document.getElementById("permissionlevel").innerText = "User:" + to;
    }
    document.getElementById("permissionlevel").innerText = to;
}

const toPage = (page,arguments) => {
    let url = page;
    const usertype = getParameterByName("usertype")
    if (usertype){
        arguments.push("usertype="+usertype)
    }
    if (arguments){
        url=url +"?"
        arguments.forEach((argument,index) => {
            url = url + argument
            if (index !== arguments.length -1){
                url = url + "&"
            }
        })
    }
    
    window.location.href = url;
    return false;
}

const getParameterByName = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
