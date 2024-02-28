document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggleAudio");
    var nextButton = document.getElementById("nextSurah");
    var audioElement = document.createElement("audio");
    var currentSurah = 1;

    var surahNames = [
        "Al-Fatihah",
        "Al-Baqarah",
        "Al-Imran",
        "An-Nisa",
        "Al-Ma'idah",
        "Al-An'am",
        "Al-A'raf",
        "Al-Anfal",
        "At-Tawbah",
        "Yunus",
        "Hud",
        "Yusuf",
        "Ar-Ra'd",
        "Ibrahim",
        "Al-Hijr",
        "An-Nahl",
        "Al-Isra",
        "Al-Kahf",
        "Maryam",
        "Ta-Ha",
        "Al-Anbiya",
        "Al-Hajj",
        "Al-Mu'minun",
        "An-Nur",
        "Al-Furqan",
        "Ash-Shu'ara",
        "An-Naml",
        "Al-Qasas",
        "Al-Ankabut",
        "Ar-Rum",
        "Luqman",
        "As-Sajda",
        "Al-Ahzab",
        "Saba",
        "Fatir",
        "Ya-Sin",
        "As-Saffat",
        "Sad",
        "Az-Zumar",
        "Ghafir",
        "Fussilat",
        "Ash-Shura",
        "Az-Zukhruf",
        "Ad-Dukhan",
        "Al-Jathiyah",
        "Al-Ahqaf",
        "Muhammad",
        "Al-Fath",
        "Al-Hujurat",
        "Qaf",
        "Adh-Dhariyat",
        "At-Tur",
        "An-Najm",
        "Al-Qamar",
        "Ar-Rahman",
        "Al-Waqi'ah",
        "Al-Hadid",
        "Al-Mujadila",
        "Al-Hashr",
        "Al-Mumtahina",
        "As-Saff",
        "Al-Jumu'ah",
        "Al-Munafiqun",
        "At-Taghabun",
        "At-Talaq",
        "At-Tahrim",
        "Al-Mulk",
        "Al-Qalam",
        "Al-Haqqah",
        "Al-Ma'arij",
        "Nuh",
        "Al-Jinn",
        "Al-Muzzammil",
        "Al-Muddathir",
        "Al-Qiyamah",
        "Al-Insan",
        "Al-Mursalat",
        "An-Naba",
        "An-Nazi'at",
        "'Abasa",
        "At-Takwir",
        "Al-Infitar",
        "Al-Mutaffifin",
        "Al-Inshiqaq",
        "Al-Buruj",
        "At-Tariq",
        "Al-A'la",
        "Al-Ghashiyah",
        "Al-Fajr",
        "Al-Balad",
        "Ash-Shams",
        "Al-Lail",
        "Ad-Duha",
        "Ash-Sharh",
        "At-Tin",
        "Al-'Alaq",
        "Al-Qadr",
        "Al-Bayyinah",
        "Az-Zalzalah",
        "Al-'Adiyat",
        "Al-Qari'ah",
        "At-Takathur",
        "Al-'Asr",
        "Al-Humazah",
        "Al-Fil",
        "Quraish",
        "Al-Ma'un",
        "Al-Kawthar",
        "Al-Kafirun",
        "An-Nasr",
        "Al-Masad",
        "Al-Ikhlas",
        "Al-Falaq",
        "An-Nas"
    ];
    

    function loadSurah(surahNumber) {
        var audioSource = "/quranic/" + surahNumber.toString().padStart(3, "0") + ".mp3";
        audioElement.src = audioSource;
        audioElement.load();
        document.getElementById("title").textContent = surahNames[surahNumber - 1]; // Update surah name
    }

    toggleButton.addEventListener("click", function() {
        if (audioElement.paused) {
            loadSurah(currentSurah);
            audioElement.play();
            toggleButton.textContent = "Pause Audio";
        } else {
            audioElement.pause();
            toggleButton.textContent = "Play Audio";
        }
    });

    nextButton.addEventListener("click", function() {
        currentSurah = (currentSurah % 114) + 1;
        loadSurah(currentSurah);
        if (!audioElement.paused) {
            audioElement.pause();
            toggleButton.textContent = "Play Audio";
        }
    });

    audioElement.addEventListener("ended", function() {
        currentSurah = (currentSurah % 114) + 1;
        loadSurah(currentSurah);
        audioElement.play();
    });

    loadSurah(currentSurah); 
});
