document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('propertyForm').addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateForm()) {
            alert('تم إرسال النموذج بنجاح!');
        }
    });
});

function showDetails(button, propertyId) {
    const details = {
        property1: {
            city: "دمشق",
            area: "ركن الدين",
            floor: "الطابق الثالث",
            parking: "متوفر كراج",
            ownership: "طابو",
            balcony: "بلكون مساحة 12 متر",
            furnished: "مفروشة",
            images: ["image1.jpg", "image2.jpg"]
        },
        property2: {
            city: "جمص",
            area: "وسط البلد",
            floor: "الأرضي",
            parking: "غير متوفر",
            ownership: "طابو",
            balcony: "بدون بلكون",
            furnished: "غير مفروشة",
            images: ["image3.jpg"]
        },
        property3: {
            city: "دمشق",
            area: "المزة",
            floor: "الطابق الأول",
            parking: "متوفر كراج",
            ownership: "طابو",
            balcony: "بلكون مساحة 15 متر",
            furnished: "غير مفروشة",
            images: ["image4.jpg", "image5.jpg"]
        }
    };

    const propertyDetails = details[propertyId];
    const row = button.parentElement.parentElement;
    const existingDetailsRow = row.nextElementSibling;

    if (existingDetailsRow && existingDetailsRow.classList.contains('details-row')) {
        existingDetailsRow.remove();
    } else {
        const detailsRow = document.createElement('tr');
        detailsRow.classList.add('details-row');
        let imagesHtml = propertyDetails.images.map(img => `<img src="${img}" alt="صورة العقار" style="width:100px;height:100px;">`).join('');
        detailsRow.innerHTML = `<td colspan="4">
            <strong>المدينة:</strong> ${propertyDetails.city}<br>
            <strong>المنطقة:</strong> ${propertyDetails.area}<br>
            <strong>الطابق:</strong> ${propertyDetails.floor}<br>
            <strong>كراج:</strong> ${propertyDetails.parking}<br>
            <strong>الملكية:</strong> ${propertyDetails.ownership}<br>

            <strong>بلكون:</strong> ${propertyDetails.balcony}<br>
            <strong>مفروشة:</strong> ${propertyDetails.furnished}<br>
                                     ${imagesHtml}
        </td>;`
        row.insertAdjacentElement('afterend', detailsRow);
    }
}

function validateForm() {
    // Validate form inputs
    const fullName = document.getElementById('fullName').value;
    const nationalId = document.getElementById('nationalId').value;
    const birthdate = document.getElementById('birthdate').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const captcha = document.getElementById('captcha').value;

    if (!fullName &&  !nationalId && !birthdate && !mobile && !email || !captcha) {
        alert('يرجى ملء جميع الحقول.');
        return false;
    }
    // Further validation logic here
    return true;
}

function generateCaptcha() {
    // Captcha generation logic
    alert('رمز التحقق تم توليده');
    }