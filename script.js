// Global Smart Language Engine for Mufti Uzair Academy
function changeLanguage(lang) {
    if (lang === 'ur') {
        // Urdu Translations
        setElementText('nav-home', 'ہوم');
        setElementText('nav-courses', 'کورسز');
        setElementText('nav-live', 'لائیو کلاس');
        setElementText('nav-faq', 'سوال و جواب');
        setElementText('nav-contact', 'رابطہ');
        setElementText('banner-title', 'مفتي عزیر آن لائن اکیڈمی میں خوش آمدید');
        setElementText('banner-subtitle', 'قرآن پاک، تجوید، اور بنیادی دینی تعلیم کا بہترین اور آسان ذریعہ');
        setElementText('banner-desc', 'قرآن پاک تجوید، حفظ اور بنیادی دینی علوم کا گھر بیٹھے آن لائن کورس کریں۔');
        setElementText('btn-explore', 'کورسز دیکھیں');
        setElementText('btn-join-live', 'لائیو کلاس جوائن کریں');
        setElementText('sec-courses-title', 'ہمارے خاص کورسز:');
        setElementText('c1-title', 'حفظ القرآن');
        setElementText('c1-urdu', 'حفظ القرآن');
        setElementText('c1-desc', 'ماہر قاری کی زیر نگرانی مناسب تجوید کے ساتھ قرآن مجید حفظ کرنے کا خصوصی کورس۔');
        setElementText('c1-btn', 'داخلہ لیں');
        setElementText('c2-title', 'تارجما و تفسیر');
        setElementText('c2-urdu', 'ترجمہ و تفسیر');
        setElementText('c2-desc', 'قرآن مجید کے آیات کو آسان فہم ترجمہ اور گہرا تفسیر کے ساتھ سمجھیں۔');
        setElementText('c2-btn', 'داخلہ لیں');
        setElementText('c3-title', 'بنیادی دین و مسائل');
        setElementText('c3-urdu', 'بنیادی دین و مسائل');
        setElementText('c3-desc', 'نماز، روزہ، طہارت اور روزمرہ زندگی کی ضروری اسلامی مسائل اور احکام کی تعلیم۔');
        setElementText('c3-btn', 'داخلہ لیں');
        setElementText('footer-text', '© 2026 مفتی عزیر آن لائن اکیڈمی. جملہ حقوق محفوظ ہیں۔');
    } else if (lang === 'en') {
        // English Translations
        setElementText('nav-home', 'Home');
        setElementText('nav-courses', 'Courses');
        setElementText('nav-live', 'Live Class');
        setElementText('nav-faq', 'FAQ');
        setElementText('nav-contact', 'Contact');
        setElementText('banner-title', 'Welcome to Mufti Uzair Academy');
        setElementText('banner-subtitle', 'Learn Quran, Tajweed & Islamic Studies Online');
        setElementText('banner-desc', 'The premier online institute for learning Quran recitation, Hifz, Tajweed, and essential Islamic teachings.');
        setElementText('btn-explore', 'Explore Courses');
        setElementText('btn-join-live', 'Join Live Class');
        setElementText('sec-courses-title', 'Our Special Courses:');
        setElementText('c1-title', 'Hifz-e-Quran');
        setElementText('c1-urdu', 'حفظ القرآن');
        setElementText('c1-desc', 'Special Quran memorization course with proper Tajweed under expert supervision.');
        setElementText('c1-btn', 'Enroll Now');
        setElementText('c2-title', 'Tarjuma & Tafseer');
        setElementText('c2-urdu', 'ترجمہ و تفسیر');
        setElementText('c2-desc', 'Understand Quranic verses deeply with easy translation and insightful commentary.');
        setElementText('c2-btn', 'Enroll Now');
        setElementText('c3-title', 'Basic Deen & Masail');
        setElementText('c3-urdu', 'بنیادی دین و مسائل');
        setElementText('c3-desc', 'Essential Islamic teachings regarding Salah, fasting, purity, and daily life rulings.');
        setElementText('c3-btn', 'Enroll Now');
        setElementText('footer-text', '© 2026 Mufti Uzair Online Academy. All Rights Reserved.');
    } else {
        // Hindi Translations (Default)
        setElementText('nav-home', 'होम');
        setElementText('nav-courses', 'कोर्सेज');
        setElementText('nav-live', 'लाइव क्लास');
        setElementText('nav-faq', 'सवाल-जवाब');
        setElementText('nav-contact', 'संपर्क');
        setElementText('banner-title', 'मुफ्ती उज़ैर एकेडमी में आपका स्वागत है');
        setElementText('banner-subtitle', 'घर बैठे ऑनलाइन कुरान, ताजवीद और दीनी तालीम हासिल करें');
        setElementText('banner-desc', 'बच्चों और बड़ों के लिए कुरान मजीद हिफ्ज, ताजवीद, तर्जुमा-तफ़सीर और बुनियादी दीनी मसाइल सीखने का बेहतरीन मंच।');
        setElementText('btn-explore', 'कोर्सेज देखें');
        setElementText('btn-join-live', 'लाइव क्लास ज्वाइन करें');
        setElementText('sec-courses-title', 'हमारे खास कोर्सेज:');
        setElementText('c1-title', 'हिफ्ज-ए-कुरान');
        setElementText('c1-urdu', 'حفظ القرآن');
        setElementText('c1-desc', 'माहर उस्ताद की निगरानी में सही ताजवीद के साथ कुरान मुकम्मल हिफ्ज करने का कोर्स।');
        setElementText('c1-btn', 'داخلہ لیں');
        setElementText('c2-title', 'तर्जुमा व तफ़सीर');
        setElementText('c2-urdu', 'ترجمہ و تفسیر');
        setElementText('c2-desc', 'अल्लाह के कलाम को आसान तर्जुमा और बेहतरीन तफ़सीर के साथ समझने की क्लास।');
        setElementText('c2-btn', 'داخلہ لیں');
        setElementText('c3-title', 'बुनियादी दीन व मसाइल');
        setElementText('c3-urdu', 'بنیادی دین و مسائل');
        setElementText('c3-desc', 'नमाज़, रोजा, तहरात और रोजमर्रा की जरूरी इस्लामी मसाइल की तालीम।');
        setElementText('c3-btn', 'داخلہ لیں');
        setElementText('footer-text', '© 2026 Mufti Uzair Online Academy. All Rights Reserved.');
    }
}

function setElementText(id, text) {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
}


// ==========================================
// NEW FEATURES: 3-Days Free Trial & Admin System
// (नीचे नया वाला फीचर जोड़ा गया है, पुराना कुछ नहीं हटाया)
// ==========================================

document.addEventListener("DOMContentLoaded", function() {
    checkFreeTrial();
    loadAdminStudents();
});

// 1. 3-Days Free Live Trial Logic
function checkFreeTrial() {
    let signupDate = localStorage.getItem('mua_student_signup');
    
    if (!signupDate) {
        signupDate = new Date().getTime();
        localStorage.setItem('mua_student_signup', signupDate);
    }
    
    let currentDate = new Date().getTime();
    let timeDifference = currentDate - parseInt(signupDate);
    let daysPassed = timeDifference / (1000 * 3600 * 24);
    
    if (window.location.pathname.includes("live.html")) {
        let liveContent = document.getElementById("live-video-container");
        let lockMessage = document.getElementById("trial-expired-message");
        
        if (daysPassed > 3) {
            if (liveContent) liveContent.style.display = "none";
            if (lockMessage) {
                lockMessage.style.display = "block";
                lockMessage.innerHTML = `
                    <div style="background: #111; color: #fff; padding: 30px; text-align: center; border-radius: 10px; border: 2px solid #00d2ff;">
                        <h2>⚠️ आपका 3 दिन का फ्री लाइव ट्रायल समाप्त हो गया है!</h2>
                        <p>मुफ्ती उज़ैर साहब की आगे की लाइव क्लासेस देखने के लिए कृपया नीचे दिए गए फॉर्म से एडमिशन पूरा करें।</p>
                        <a href="contact.html" style="background: #00d2ff; color: #000; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block; margin-top: 15px;">एडमिशन फॉर्म भरें & फीस जमा करें</a>
                    </div>
                `;
            }
        }
    }
}

// 2. Student Registration & Admin Data Handler
function handleStudentRegistration(event) {
    event.preventDefault();
    
    let name = document.getElementById('student-name').value;
    let phone = document.getElementById('student-phone').value;
    let course = document.getElementById('student-course').value;
    let txId = document.getElementById('transaction-id').value;
    
    let studentData = {
        name: name,
        phone: phone,
        course: course,
        txId: txId,
        date: new Date().toLocaleDateString()
    };
    
    let studentsList = JSON.parse(localStorage.getItem('mua_registered_students')) || [];
    studentsList.push(studentData);
    localStorage.setItem('mua_registered_students', JSON.stringify(studentsList));
    
    alert("रजिस्ट्रेशन सफलतापूर्वक हो गया है! मुफ्ती उज़ैर एकेडमी में आपका स्वागत है।");
    window.location.href = "index.html";
}

// 3. Load Students List in Admin Panel
function loadAdminStudents() {
    if (window.location.pathname.includes("admin-students.html")) {
        let tableBody = document.getElementById("admin-students-table-body");
        if (!tableBody) return;
        
        let studentsList = JSON.parse(localStorage.getItem('mua_registered_students')) || [];
        tableBody.innerHTML = "";
        
        if (studentsList.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:20px;">कोई छात्र अभी रजिस्टर्ड नहीं है।</td></tr>`;
            return;
        }
        
        studentsList.forEach((student, index) => {
            let row = `<tr>
                <td>${index + 1}</td>
                <td>${student.name}</td>
                <td>${student.phone}</td>
                <td>${student.course}</td>
                <td><b>TxID:</b> ${student.txId} <br><small>${student.date}</small></td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    }
        }

