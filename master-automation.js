/**
 * ========================================================
 * MUFTI UZAIR ACADEMY: ADVANCED MASTER AUTOMATION ENGINE
 * ========================================================
 * Description: Handles global layouts, multi-language sync,
 * 3-days free live trial logic, and admin data automation.
 */

(function() {
    'use strict';

    // 1. Global Configurations & Branding
    const MUA_CONFIG = {
        academyName: "Mufti Uzair Online Academy",
        trialDays: 3,
        version: "2.0.0-master"
    };

    // Run core automation checks when DOM is fully loaded
    document.addEventListener("DOMContentLoaded", function() {
        initMasterAutomation();
    });

    function initMasterAutomation() {
        console.log(`[MUA Master Automation] Initialized v${MUA_CONFIG.version}`);
        injectGlobalLayouts();
        checkFreeTrialSystem();
        initAdminDataSync();
    }

    // 2. Automated Global Layout Injector (Header/Footer Sync)
    function injectGlobalLayouts() {
        // Automatically inject common footer or navigation components if missing
        const footer = document.querySelector("footer");
        if (footer && !footer.innerHTML.trim()) {
            footer.innerHTML = `
                <div style="background: #0d1117; color: #8b949e; padding: 20px; text-align: center; border-top: 1px solid #30363d; margin-top: 40px;">
                    <p id="footer-text">© 2026 Mufti Uzair Online Academy. All Rights Reserved.</p>
                </div>
            `;
        }
    }

    // 3. Automated 3-Days Free Live Trial Engine
    function checkFreeTrialSystem() {
        if (!window.location.pathname.includes("live.html")) return;

        let signupTimestamp = localStorage.getItem('mua_student_signup');
        
        if (!signupTimestamp) {
            signupTimestamp = new Date().getTime();
            localStorage.setItem('mua_student_signup', signupTimestamp);
        }

        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - parseInt(signupTimestamp);
        const daysPassed = elapsedTime / (1000 * 3600 * 24);

        const liveContainer = document.getElementById("live-video-container");
        const trialMessage = document.getElementById("trial-expired-message");

        if (daysPassed > MUA_CONFIG.trialDays) {
            // Trial Expired: Lock live stream and display admission prompt
            if (liveContainer) liveContainer.style.display = "none";
            if (trialMessage) {
                trialMessage.style.display = "block";
                trialMessage.innerHTML = `
                    <div style="background: #161b22; color: #ffffff; padding: 40px; text-align: center; border-radius: 12px; border: 2px solid #58a6ff; max-width: 600px; margin: 30px auto; box-shadow: 0 8px 24px rgba(0,0,0,0.5);">
                        <h2 style="color: #58a6ff; margin-bottom: 15px;">⚠️ आपका 3 दिन का फ्री लाइव ट्रायल समाप्त हो गया है!</h2>
                        <p style="color: #c9d1d9; font-size: 16px; line-height: 1.6;">मुफ्ती उज़ैर साहब की आगे की लाइव कक्षाओं से जुड़े रहने के लिए कृपया नीचे दिए गए बटन पर क्लिक करके एडमिशन फॉर्म भरें और फीस जमा करें।</p>
                        <a href="contact.html" style="background: #238636; color: #ffffff; padding: 14px 28px; text-decoration: none; font-weight: bold; border-radius: 6px; display: inline-block; margin-top: 20px; transition: background 0.2s;">एडमिशन फॉर्म भरें & फीस जमा करें</a>
                    </div>
                `;
            }
        } else {
            const daysRemaining = Math.ceil(MUA_CONFIG.trialDays - daysPassed);
            console.log(`[MUA Trial Engine] Active trial. Days remaining: ${daysRemaining}`);
        }
    }

    // 4. Automated Admin Data Sync & Table Renderer
    function initAdminDataSync() {
        if (!window.location.pathname.includes("admin-students.html")) return;

        const tableBody = document.getElementById("admin-students-table-body");
        if (!tableBody) return;

        const studentsList = JSON.parse(localStorage.getItem('mua_registered_students')) || [];
        tableBody.innerHTML = "";

        if (studentsList.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:30px; color:#8b949e;">कोई भी छात्र अभी रजिस्टर्ड नहीं है।</td></tr>`;
            return;
        }

        studentsList.forEach((student, index) => {
            const row = `
                <tr style="border-bottom: 1px solid #30363d;">
                    <td style="padding: 12px;">${index + 1}</td>
                    <td style="padding: 12px; font-weight: bold; color: #58a6ff;">${student.name}</td>
                    <td style="padding: 12px;">${student.phone}</td>
                    <td style="padding: 12px;">${student.course}</td>
                    <td style="padding: 12px;"><code style="background: #21262d; padding: 4px 8px; border-radius: 4px;">TxID: ${student.txId}</code><br><small style="color: #8b949e;">${student.date}</small></td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    }

    // Expose global handlers if needed
    window.MUAAutomation = {
        config: MUA_CONFIG,
        resetTrial: function() {
            localStorage.removeItem('mua_student_signup');
            alert("फ्री ट्रायल रीसेट कर दिया गया है!");
            location.reload();
        }
    };

})();
