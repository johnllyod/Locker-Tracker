// Top navigation
document.getElementById("TopNav").innerHTML = `<nav class="navbar navbar-expand-lg mb-4">
    <div class="container-fluid">
        <a id="LogoHome" class="navbar-brand">Locker Tracker</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a id="HomeNav" class="nav-link active" aria-current="page">Home</a>
            </li>
            <li class="nav-item">
            <a id="LockerNav" class="nav-link">Locker</a>
            </li>
        </ul>
        <span class="navbar-text">
            <a id="LogoutNav" class="nav-link" href="#">Logout</a>
        </span>
        </div>
    </div>
</nav>`;

// Fetch HTML code from the views folder
function MainContent(tab){
    const mainContent = document.getElementById("MainContent"); // div element where the main contents goes
    const homeNav = document.getElementById("HomeNav");         // Home button from the top nav
    const lockerNav = document.getElementById("LockerNav");     // Locker button from the top nav

    let t;

    // check what nav button is clicked
    if (tab == "locker")
    {
        t = "locker";
        window.sessionStorage.setItem("pageView", t);       // Save page view name
        homeNav.classList.remove("active");                 // Remove active class from home nav button
        lockerNav.classList.add("active");                  // Assign active class from locker nav button
    }  else if(tab == "login")
    {
        t = "login";
        window.sessionStorage.setItem("pageView", t);
    }
    else
    {
        t = "home";
        window.sessionStorage.setItem("pageView", t);
        homeNav.classList.add("active");
        lockerNav.classList.remove("active");
    }

    // Fetch HTML file
    fetch(`../../views/${t}.html`).then(res => {
        if (res.ok) {
            return res.text();
        }
    }).then(htmlSnippet => {
        mainContent.innerHTML = htmlSnippet; // Adding the fetch HTML code under the main content div

        if (t == "locker")
        {
            FillLockerList(10, 7);          // if in the locker page then fill locker list with locker buttons.
        }
    });
}

// Check what content to display when a user refresh the page
function ContentOnRefresh()
{
    let pageName = window.sessionStorage.getItem("pageView");   // Get saved page name
    if (pageName) 
    {
        MainContent(pageName);
    }
    else 
    {
        MainContent("");
    }
}
ContentOnRefresh();