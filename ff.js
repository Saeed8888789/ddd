function openSetting(setting) {
    const settingTitle = document.getElementById("setting-title");
    const settingContent = document.getElementById("setting-content");
    const settingDetails = document.getElementById("setting-details");

    let settingsData = {
        wifi: "إعدادات WiFi: قم بتشغيل أو إيقاف شبكة WiFi والاتصال بالشبكات المتاحة.",
        bluetooth: "إعدادات Bluetooth: إدارة الأجهزة المتصلة عبر Bluetooth.",
        display: "إعدادات الشاشة: تغيير السطوع والخلفيات ووضع الشاشة.",
        sound: "إعدادات الصوت: التحكم في مستوى الصوت ونغمات الرنين.",
        about: "معلومات الهاتف: عرض رقم الإصدار والمواصفات."
    };

    settingTitle.innerText = setting;
    settingContent.innerText = settingsData[setting] || "إعداد غير معروف";
    settingDetails.style.display = "block";
}

function closeSetting() {
    document.getElementById("setting-details").style.display = "none";
}