const HomeNavButton = document.getElementById("HomeNav");
const LockerNavButton = document.getElementById("LockerNav");
const LogoHome = document.getElementById("LogoHome");

HomeNavButton.addEventListener('click', () => {
    MainContent("home");
});

LockerNavButton.addEventListener('click', () => {
    MainContent("locker");
});

LogoHome.addEventListener('click', () => {
    MainContent("home");
});