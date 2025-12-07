let icon = document.getElementById("icon-mobile");
let ul = document.getElementById("ul-mobile");


if (icon && ul) {
    icon.onclick = function () {
        // نستخدم 'open' بدلاً من 'mobile-nav1' ليتوافق مع CSS
        ul.classList.toggle("open");}

    }

 function registerValidation() {

    var form = document.getElementById("myFormRegister");

    // اجعل المتصفح يفحص required + minlength
    if (!form.checkValidity()) {
        form.reportValidity(); // يعرض رسائل الخطأ الافتراضية
        return;
    }
        var pass1 = document.getElementById("password").value;
        var pass2 = document.getElementById("confirm").value;
        if (pass1 != pass2) {
            alert("كلمة المرور وتأكيدها غير متطابقين");
            document.getElementById("pass1").style.borderColor = "#E34234";
            document.getElementById("pass2").style.borderColor = "#E34234";
        }
        else {
            alert("تم التسجيل بنجاح ");
        }
    }