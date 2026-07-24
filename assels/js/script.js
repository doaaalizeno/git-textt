//  let sidebar =document.getElementById("sidebar");
//  let content = document.querySelector("#content");
//  let sidebar_toggle = document.querySelector("#sidebar-toggle");


// sidebar_toggle.addEventListener("click", () => {
//     let sidebarRight = window.getComputedStyle(sidebar).right; // القيمة الحالية

//     if (window.innerWidth > 767) {
//         // لأجهزة الحاسوب، يتم إزاحة المحتوى
//         if (sidebarRight === "0px") {
//             sidebar.style.right = "-250px";
//             content.style.marginRight = "0";
//         } else {
//             sidebar.style.right = "0";
//             content.style.marginRight = "250px";
//         }
//     } else {
//         // للجوال، لا يتم إزاحة المحتوى، فقط يظهر الشريط نفسه
//         if (sidebarRight === "0px") {
//             sidebar.style.right = "-250px";
//         } else {
//             sidebar.style.right = "0";
//         }
//     }
// });

 

//  sidebar_toggle.addEventListener("click", () => {
//     // الحصول على العرض الفعلي للشريط الجانبي
//     let sidebarWidth = window.getComputedStyle(sidebar).width;
//     if (sidebarWidth === "250px") {
//         sidebar.style.width = "0";
//         content.style.marginRight = "0"; // تم تصحيح marginright إلى marginRight
//     } else {
//         sidebar.style.width = "250px";
//         content.style.marginRight = "250px"; // تم تصحيح marginright إلى marginRight
//     }
// });



// // كود اظهار الرسالة
// let messagesarea = document.getElementById('messages-area');
// let messagescontainer = document.getElementById('messages-container');

// messagescontainer.addEventListener("click" , function(){
//     // اذا ضغطت على هاذا العنصر يلي اسمةmessages-container اذا كان الulاخد الدسبلي نون اعمل له بلوك واذا كان البلوك اعملة نون فقط فتح واغلاق
//     messagesarea.style.display = messagesarea.style.display === "block" ? "none" : "block";
// });

// //    id  تبع الجدول جاي من مكتبة datatables.net
// //   new DataTable('#example');


// // new DataTable('#example', {
// //     responsive: true,
    
// //     buttons: [
// //         {
// //             extend:'copy',
// //             text:'نسخ'

// //         }, {
// //             extend:'excel',
// //             text:' إكسل'
// //         }, {
// //             extend:'pdf',
// //             text:' ملف'
// //         }, {
// //             extend:'print',
// //             text:' طباعة'
// //         },
        
        
// //     ],
// //     layout: {
// //         topStart: 'buttons'
// //     }
// // });



// // =======================
// // Sidebar
// // =======================


// sidebar_toggle.addEventListener("click", () => {
//     let sidebarRight = window.getComputedStyle(sidebar).right;

//     if (window.innerWidth > 767) {
//         if (sidebarRight === "0px") {
//             sidebar.style.right = "-250px";
//             content.style.marginRight = "0";
//         } else {
//             sidebar.style.right = "0";
//             content.style.marginRight = "250px";
//         }
//     } else {
//         if (sidebarRight === "0px") {
//             sidebar.style.right = "-250px";
//         } else {
//             sidebar.style.right = "0";
//         }
//     }
// });

// // =======================
// // Messages
// // =======================
// let messagesarea = document.getElementById('messages-area');
// let messagescontainer = document.getElementById('messages-container');

// if (messagescontainer && messagesarea) {
//     messagescontainer.addEventListener("click", function () {
//         messagesarea.style.display =
//             messagesarea.style.display === "block" ? "none" : "block";
//     });
// }

// // =======================
// // DataTable
// // =======================
// new DataTable('#example', {
//     responsive: true,

//     layout: {
//         topStart: {
//             buttons: [
//                 {
//                     extend: 'copy',
//                     text: 'نسخ'
//                 },
//                 {
//                     extend: 'excel',
//                     text: 'إكسل'
//                 },
//                 {
//                     extend: 'pdf',
//                     text: 'PDF'
//                 },
//                 {
//                     extend: 'print',
//                     text: 'طباعة'
//                 }
//             ]
//         }
//     }
// });

// // =======================
// // Dark Mode
// // =======================
// const darkBtn = document.getElementById("toggleDark");

// if (darkBtn) {
//     darkBtn.addEventListener("click", function () {
//         document.body.classList.toggle("dark-mode");
//     });
// }


// =======================
// Sidebar
// =======================
const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");
const sidebarToggle = document.getElementById("sidebar-toggle");

if (sidebar && content && sidebarToggle) {
    sidebarToggle.addEventListener("click", () => {
        const sidebarRight = window.getComputedStyle(sidebar).right;

        if (window.innerWidth > 767) {
            if (sidebarRight === "0px") {
                sidebar.style.right = "-250px";
                content.style.marginRight = "0";
            } else {
                sidebar.style.right = "0";
                content.style.marginRight = "250px";
            }
        } else {
            if (sidebarRight === "0px") {
                sidebar.style.right = "-250px";
            } else {
                sidebar.style.right = "0";
            }
        }
    });
}

// =======================
// Messages
// =======================
const messagesContainer = document.getElementById("messages-container");
const messagesArea = document.getElementById("messages-area");

if (messagesContainer && messagesArea) {

    // إخفاء القائمة عند تحميل الصفحة
    messagesArea.style.display = "none";

    // فتح وإغلاق القائمة
    messagesContainer.addEventListener("click", function (e) {
        e.stopPropagation();

        messagesArea.style.display =
            messagesArea.style.display === "block" ? "none" : "block";
    });

    // إغلاقها عند الضغط خارجها
    document.addEventListener("click", function () {
        messagesArea.style.display = "none";
    });
}

// =======================
// DataTable
// =======================
const table = document.getElementById("example");

if (table) {
    new DataTable("#example", {
        responsive: true,
        layout: {
            topStart: {
                buttons: [
                    {
                        extend: "copy",
                        text: "نسخ"
                    },
                    {
                        extend: "excel",
                        text: "إكسل"
                    },
                    {
                        extend: "pdf",
                        text: "PDF"
                    },
                    {
                        extend: "print",
                        text: "طباعة"
                    }
                ]
            }
        }
    });
}

// =======================
// Dark Mode
// =======================
const darkBtn = document.getElementById("toggleDark");

if (darkBtn) {
    darkBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
}
