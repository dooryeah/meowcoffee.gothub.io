// 注册
function register() {
    const user = document.getElementById("regUser")?.value;
    const pass = document.getElementById("regPass")?.value;

    if (!user || !pass) {
        alert("请输入完整信息");
        return;
    }

    if (localStorage.getItem("user_" + user)) {
        alert("用户名已存在");
        return;
    }

    localStorage.setItem("user_" + user, pass);
    alert("注册成功！");
    window.location.href = "/meowcoffee.github.io/login.html";
}

// 登录
function login() {
    const user = document.getElementById("loginUser")?.value;
    const pass = document.getElementById("loginPass")?.value;

    const savedPass = localStorage.getItem("user_" + user);

    if (savedPass === pass) {
        localStorage.setItem("loggedInUser", user);
        alert("登录成功！");
        window.location.href = "/meowcoffee.github.io/index.html";
    } else {
        alert("用户名或密码错误");
    }
}

// 更新首页导航栏 UI
function updateNav() {
    const nav = document.getElementById("navLinks");
    const auth = document.getElementById("navAuth");
    const user = localStorage.getItem("loggedInUser");

    if (user) {
        if (nav) nav.classList.add("show");
        if (auth) auth.style.display = "none";
    } else {
        if (nav) nav.classList.remove("show");
        if (auth) auth.style.display = "flex";
    }
}



