// Global Smart Language Engine for Mufti Uzair Academy

function changeLanguage(lang) {
    if (lang === 'ur') {
        // Urdu Translations
        setElementText('nav-home', "ہوم");
        setElementText('nav-courses', "کورسز");
        setElementText('nav-live', "لائیو کلاس");
        setElementText('nav-faq', "سوال و جواب");
        setElementText('nav-contact', "رابطہ");
        setElementText('banner-title', "خوش آمدید");
        setElementText('banner-subtitle', "مفتی عزیر آن لائن اکیڈمی میں آپ کا خیرمقدم ہے");
        setElementText('banner-desc', "قرآن پاک، تجوید، حفظ اور بنیادی دینی تعلیم حاصل کرنے کا بہترین آن لائن ادارہ۔");
        setElementText('btn-explore', "کورسز دیکھیں");
        setElementText('btn-join-live', "لائیو کلاس جوائن کریں");
        setElementText('sec-courses-title', "ہمارے خاص کورسز");
        setElementText('c1-title', "حفظ القرآن");
        setElementText('c1-urdu', "حفظ القرآن");
        setElementText('c1-desc', "بچوں اور بڑوں کے لیے قرآن مجید کی زبانی دیکھ بھال اور تجوید کے ساتھ قرآن حفظ کرنے کا خصوصی کورس۔");
        setElementText('c1-btn', "داخلہ لیں");
        setElementText('c2-title', "ترجمہ و تفسیر");
        setElementText('c2-urdu', "ترجمہ و تفسیر");
        setElementText('c2-desc', "قرآن مجید کی آیات کو آسان فہم ترجمہ اور گہری تفسیر کے ساتھ سمجھیں۔");
        setElementText('c2-btn', "داخلہ لیں");
        setElementText('c3-title', "بنیادی دین و مسائل");
        setElementText('c3-urdu', "بنیادی دین و مسائل");
        setElementText('c3-desc', "نماز، روزہ، طہارت اور روزمرہ زندگی کے ضروری اسلامی مسائل اور احکام کی تعلیم۔");
        setElementText('c3-btn', "داخلہ لیں");
        setElementText('footer-text', "© 2026 مفتی عزیر آن لائن اکیڈمی۔ جملہ حقوق محفوظ ہیں۔");
    } else if (lang === 'en') {
        // English Translations
        setElementText('nav-home', "Home");
        setElementText('nav-courses', "Courses");
        setElementText('nav-live', "Live Class");
        setElementText('nav-faq', "FAQ");
        setElementText('nav-contact', "Contact");
        setElementText('banner-title', "Welcome to Mufti Uzair Academy");
        setElementText('banner-subtitle', "Learn Quran, Tajweed & Islamic Studies Online");
        setElementText('banner-desc', "The premier online institute for learning Quran recitation, Hifz, Tajweed, and essential Islamic teachings.");
        setElementText('btn-explore', "Explore Courses");
        setElementText('btn-join-live', "Join Live Class");
        setElementText('sec-courses-title', "Our Special Courses");
        setElementText('c1-title', "Hifz-e-Quran");
        setElementText('c1-urdu', "حفظ القرآن");
        setElementText('c1-desc', "Special Quran memorization course with proper Tajweed under expert supervision.");
        setElementText('c1-btn', "Enroll Now");
        setElementText('c2-title', "Tarjuma & Tafseer");
        setElementText('c2-urdu', "ترجمہ و تفسیر");
        setElementText('c2-desc', "Understand Quranic verses deeply with easy translation and insightful commentary.");
        setElementText('c2-btn', "Enroll Now");
        setElementText('c3-title', "Basic Deen & Masail");
        setElementText('c3-urdu', "بنیادی دین و مسائل");
        setElementText('c3-desc', "Essential Islamic teachings regarding Salah, fasting, purity, and daily life rulings.");
        setElementText('c3-btn', "Enroll Now");
        setElementText('footer-text', "© 2026 Mufti Uzair Online Academy. All Rights Reserved.");
    } else {
        // Hindi Translations (Default)
        setElementText('nav-home', "होम");
        setElementText('nav-courses', "कोर्सेज");
        setElementText('nav-live', "लाइव क्लास");
        setElementText('nav-faq', "सवाल-जवाब");
        setElementText('nav-contact', "सम्पर्क");
        setElementText('banner-title', "मुफ्ती उज़ैर ऑनलाइन एकेडमी में आपका स्वागत है");
        setElementText('banner-subtitle', "घर बैठे आॅनलाइन कुरआन, तजवीद और दीनी तालीम हासिल करें");
        setElementText('banner-desc', "बच्चों और बड़ों के लिए कुरआन मजीद हिफ्ज़, तजवीद, तर्जुमा-तफ़सीर और बुनियादी दीनी मसाइल सीखने का बेहतरीन जरिया।");
        setElementText('btn-explore', "कोर्सेज देखें");
        setElementText('btn-join-live', "लाइव क्लास ज्वाइन करें");
        setElementText('sec-courses-title', "हमारे खास कोर्सेज");
        setElementText('c1-title', "हिफ्ज़-ए-कुरआन");
        setElementText('c1-urdu', "حفظ القرآن");
        setElementText('c1-desc', "ماہر قاری کی نگرانی میں تجوید और सही मखारिज के साथ कुरआन मुकम्मल हिफ्ज़ करने का कोर्स।");
        setElementText('c1-btn', "दाखिला लें");
        setElementText('c2-title', "तर्जुमा व तफ़सीर");
        setElementText('c2-urdu', "ترجمہ و تفسیر");
        setElementText('c2-desc', "अल्लाह के कलाम को आसान तर्जुमा और बेहतरीन तफ़सीर के साथ रूह में उतारने की क्लास।");
        setElementText('c2-btn', "दाखिला लें");
        setElementText('c3-title', "बुनियादी दीन व मसाइल");
        setElementText('c3-urdu', "بنیادی دین و مسائل");
        setElementText('c3-desc', "नमाज़, रोज़ा, तहारत और रोज़मर्रा की जिंदगी के जरूरी इस्लामी मसाइल की तालीम।");
        setElementText('c3-btn', "दाखिला लें");
        setElementText('footer-text', "© 2026 Mufti Uzair Online Academy. All Rights Reserved.");
    }
}

function setElementText(id, text) {
    const el = document.getElementById(id);
    if (el) {
        el.innerText = text;
    }
}
