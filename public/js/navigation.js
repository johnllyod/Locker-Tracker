import { handleLogout } from "../../auth/auth.js";

const HomeNavButton = document.getElementById("HomeNav");
const LockerNavButton = document.getElementById("LockerNav");
const LogoHome = document.getElementById("LogoHome");
const LogoutButton = document.getElementById("LogoutNav");

HomeNavButton.addEventListener('click', () => {
    MainContent("home");
});

LockerNavButton.addEventListener('click', () => {
    MainContent("locker");
});

LogoHome.addEventListener('click', () => {
    MainContent("home");
});

LogoutButton.addEventListener('click', async () => {
    await handleLogout().then(() => MainContent("login"));
});