/**
 * =========================================================================
 * ملف بيانات وتفاصيل دعوة الخطوبة (بيانات العروسين يوسف وشهد)
 * INVITATION CONFIGURATION FILE
 * =========================================================================
 * يمكنك تغيير أي صورة بكل سهولة إما:
 * 1) استبدال ملف الصورة مباشرة في مجلد public (مثل: couple.jpg أو children.png أو gallery2.jpg أو gallery3.jpg)
 * 2) أو تعديل المسار هنا في هذا الملف مباشرة.
 * =========================================================================
 */

export const INVITATION_DATA = {
  // =========================================================================
  // 📸 قسم الصور (جميع الصور موجودة في مجلد public ويمكن استبدالها وتغييرها بسهولة)
  // =========================================================================
  images: {
    // 1. صورة العروسين الرئيسية (الصورة 1 في معرض الصور)
    couple: "/couple.jpg",

    // 2. صور معرض الصور الإضافية (الصورة 2 و 3)
    gallery1: "/couple.jpg",
    gallery2: "/gallery_rings.jpg",
    gallery3: "/gallery_sunset.jpg",

    // 3. صورة الأطفال في أسفل الدعوة
    children: "/children.png",

    // 4. صورة الظرف الملكي (شاشة البداية)
    envelope: "/envelope.png",

    // 5. صورة الستارة المخملية (أعلى البطاقة)
    curtain: "/curtain.png",

    // 6. صورة باقة الورد (أعلى اليمين)
    bouquet: "/bouquet.png",

    // 7. صورة الحمامة الطائرة
    dove: "/dove.png",
  },

  // ترويسة الغلاف والظرف
  envelopeHeader: "We're getting engaged",

  // الاسمان بالخط الإنجليزي المائل (مثل الصورة المرجعية تماماً)
  scriptNames: "Youssef & Shahd",

  // ترويسة الدعوة
  headerTitleEn: "THE engagement OF OUR CHILDREN",
  headerTitleAr: "حفل خطوبة مبارك",

  // بيانات العريس
  groom: {
    name: "Youssef",
    nameAr: "يوسف",
    subtitle: "GROOM"
  },

  // بيانات العروس
  bride: {
    name: "Shahd",
    nameAr: "شهد",
    subtitle: "BRIDE"
  },

  // عبارة الدعوة الترحيبية بالإنجليزية
  welcomeMessage: "Two souls, one beautiful story. What began as a feeling became a promise, and what feels like a dream today will become our forever.",

  // معرض الصور (صورة واحدة فقط)
  gallery: {
    title: "PHOTO GALLERY",
    photos: [
      { id: 1, src: "/couple.jpg", fallback: "/gallery1.jpg", alt: "صورة العروسين" },
    ],
    photoMainPortrait: "/couple.jpg",
  },

  // تفاصيل الموعد والوقت (العد التنازلي)
  schedule: {
    headingEn: "THE ENGAGEMENT PARTY WILL TAKE PLACE AT:",
    timeDisplay: "5:00 PM",
    dateDayName: "FRIDAY",
    dateDayNameAr: "الجمعة",
    dateDayNumber: "20",
    dateMonthYear: "NOVEMBER 2026",
    dateMonthYearAr: "نوفمبر ٢٠٢٦",
    // التاريخ الجديد: 20 نوفمبر 2026 الساعة 5:00 مساءً
    targetDateTime: "2026-11-20T17:00:00"
  },

  // تفاصيل المكان وخريطة Google Maps
  location: {
    title: "LOCATION",
    venueName: "El Shorouk Golden Gate 2",
    venueNameAr: "الشروق جولدن جيت 2",
    address: "El Shorouk City",
    addressAr: "مدينة الشروق",
    // رابط خريطة Google Maps المرسل من المستخدم
    googleMapsUrl: "https://maps.app.goo.gl/bByB3zJFMLGejgWG8?g_st=iw",
    // تضمين خريطة Google Maps
    mapEmbedIframe: "https://maps.google.com/maps?q=El+Shorouk+Golden+Gate+2&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },

  // دريس كود الحفل وألوان الملابس المقترحة
  dressCode: {
    title: "DRESS CODE",
    subtitle: "WE WOULD LOVE TO SEE YOU IN SHADES OF:",
    colors: [
      { id: 1, name: "Blush", nameAr: "بلاش", hex: "#D9C1BF" },
      { id: 2, name: "Rose", nameAr: "روز", hex: "#BF8F8F" },
      { id: 3, name: "Burgundy", nameAr: "بورجندي", hex: "#40110D" },
      { id: 4, name: "Wine", nameAr: "واين", hex: "#6C0825" },
    ]
  },

  // تأكيد الحضور ورسائل التهنئة للعروسين (RSVP)
  rsvp: {
    title: "RSVP",
    subtitle: "PLEASE CONFIRM YOUR ATTENDANCE",
    namePlaceholder: "Name",
    messagePlaceholder: "Leave a message for Youssef & Shahd...",
    submitText: "SEND RSVP",
    successHeading: "THANK YOU!",
    successMessage: "Your message has been received with love for Youssef & Shahd ❤️"
  },

  // مسار ملف الموسيقى الرومانسية
  audioTrack: "/song.mp3"
};

