 let sidebar =document.getElementById("sidebar");
 let content = document.querySelector("#content");
 let sidebar_toggle = document.querySelector("#sidebar-toggle");


sidebar_toggle.addEventListener("click", () => {
    let sidebarRight = window.getComputedStyle(sidebar).right; // القيمة الحالية

    if (window.innerWidth > 767) {
        // لأجهزة الحاسوب، يتم إزاحة المحتوى
        if (sidebarRight === "0px") {
            sidebar.style.right = "-250px";
            content.style.marginRight = "0";
        } else {
            sidebar.style.right = "0";
            content.style.marginRight = "250px";
        }
    } else {
        // للجوال، لا يتم إزاحة المحتوى، فقط يظهر الشريط نفسه
        if (sidebarRight === "0px") {
            sidebar.style.right = "-250px";
        } else {
            sidebar.style.right = "0";
        }
    }
});

 

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



// كود اظهار الرسالة
let messagesarea = document.getElementById('messages-area');
let messagescontainer = document.getElementById('messages-container');

messagescontainer.addEventListener("click" , function(){
    // اذا ضغطت على هاذا العنصر يلي اسمةmessages-container اذا كان الulاخد الدسبلي نون اعمل له بلوك واذا كان البلوك اعملة نون فقط فتح واغلاق
    messagesarea.style.display = messagesarea.style.display === "block" ? "none" : "block";
});

//    id  تبع الجدول جاي من مكتبة datatables.net
//   new DataTable('#example');


new DataTable('#example', {
    responsive: true,
    
    buttons: [
        {
            extend:'copy',
            text:'نسخ'

        }, {
            extend:'excel',
            text:' إكسل'
        }, {
            extend:'pdf',
            text:' ملف'
        }, {
            extend:'print',
            text:' طباعة'
        },
        
        
    ],
    layout: {
        topStart: 'buttons'
    }
});
