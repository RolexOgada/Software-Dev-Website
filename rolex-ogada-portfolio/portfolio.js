const apps = {

    downloader: {
        title: "Video Downloader",
        icon: "▶",
        description:
            "A simple and convenient video downloader for saving videos from supported social media platforms.",
        features: [
            "Download videos from supported platforms",
            "Simple and easy-to-use interface",
            "Fast media downloading",
            "Built for Android devices"
        ],
        link: "https://play.google.com/store/apps/details?id=com.rolex.downloader"
    },

    english: {
        title: "Learn English",
        icon: "A",
        description:
            "An educational app designed to help users improve their English language skills.",
        features: [
            "English grammar practice",
            "Vocabulary learning",
            "Speaking improvement",
            "Reading and listening practice"
        ],
        link: "https://play.google.com/store/apps/details?id=com.DICTNOTES.Dict"
    },

    itil: {
        title: "ITIL4 Notes",
        icon: "📚",
        description:
            "A study application containing ITIL4 learning materials and practice questions.",
        features: [
            "ITIL4 study notes",
            "Practice questions",
            "Quiz-based learning",
            "Useful revision material"
        ],
        link: "https://play.google.com/store/apps/details?id=com.itil.exam"
    },

    dict: {
        title: "DICT Notes",
        icon: "📖",
        description:
            "A Diploma in ICT learning application providing study notes and PDF resources.",
        features: [
            "ICT study notes",
            "Module 1, 2 and 3 content",
            "Built-in PDF viewing",
            "Easy access to learning materials"
        ],
        link: "https://play.google.com/store/apps/details?id=com.collince.module3"
    }

};

/* ---------- Navigation Active State ---------- */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(navLink => {
            navLink.classList.remove("active");
        });

        this.classList.add("active");

    });

});


/* ---------- Individual App Modal ---------- */

function openApp(appId) {

    const app = apps[appId];

    if (!app) return;

    document.getElementById("modalIcon").textContent = app.icon;

    document.getElementById("modalTitle").textContent = app.title;

    document.getElementById("modalDescription").textContent =
        app.description;


    const featureList =
        document.getElementById("modalFeatures");

    featureList.innerHTML = "";


    app.features.forEach(feature => {

        const li = document.createElement("li");

        li.textContent = feature;

        featureList.appendChild(li);

    });

    


    document.getElementById("playStoreButton").href =
        app.link;


    document.getElementById("appModal")
        .classList.add("show");


    document.body.style.overflow = "hidden";
}


function closeApp() {

    document.getElementById("appModal")
        .classList.remove("show");

    document.body.style.overflow = "";
}


/* ---------- All Apps Modal ---------- */

function openAllApps(event) {

    event.preventDefault();

    document.getElementById("allAppsModal")
        .classList.add("show");

    document.body.style.overflow = "hidden";
}


function closeAllApps() {

    document.getElementById("allAppsModal")
        .classList.remove("show");

    document.body.style.overflow = "";
}