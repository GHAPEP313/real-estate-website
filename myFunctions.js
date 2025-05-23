document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (validateForm()) {
                alert('تم إرسال النموذج بنجاح!');
                form.reset();
            }
        });
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
            city: "حمص",
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
    const row = button.closest('tr');
    const existingDetailsRow = row.nextElementSibling;

    if (existingDetailsRow?.classList.contains('details-row')) {
        existingDetailsRow.remove();
    } else {
        const detailsRow = document.createElement('tr');
        detailsRow.classList.add('details-row');
        const imagesHtml = propertyDetails.images
            .map(img => `<img src="${img}" alt="صورة العقار">`)
            .join('');
            
        detailsRow.innerHTML = `
            <td colspan="4">
                <div class="details-grid">
                    <div class="details-section">
                        <p><strong>المدينة:</strong> ${propertyDetails.city}</p>
                        <p><strong>المنطقة:</strong> ${propertyDetails.area}</p>
                        <p><strong>الطابق:</strong> ${propertyDetails.floor}</p>
                    </div>
                    <div class="details-section">
                        <p><strong>كراج:</strong> ${propertyDetails.parking}</p>
                        <p><strong>الملكية:</strong> ${propertyDetails.ownership}</p>
                        <p><strong>بلكون:</strong> ${propertyDetails.balcony}</p>
                        <p><strong>مفروشة:</strong> ${propertyDetails.furnished}</p>
                    </div>
                    <div class="images-section">
                        ${imagesHtml}
                    </div>
                </div>
            </td>`;
        row.insertAdjacentElement('afterend', detailsRow);
    }
}

function validateForm() {
    const requiredFields = ['fullname', 'nationalId', 'dob', 'phone', 'email', 'captcha'];
    let isValid = true;

    requiredFields.forEach(field => {
        const input = document.getElementById(field);
        if (!input || !input.value.trim()) {
            isValid = false;
        }
    });

    if (!isValid) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return false;
    }

    const nationalId = document.getElementById('nationalId');
    if (nationalId && !/^\d{11}$/.test(nationalId.value)) {
        alert('الرقم الوطني يجب أن يتكون من 11 رقم');
        return false;
    }

    const phone = document.getElementById('phone');
    if (phone && !/^09\d{8}$/.test(phone.value)) {
        alert('رقم الموبايل يجب أن يبدأ ب 09 ويتكون من 10 أرقام');
        return false;
    }

    return true;
}

function generateCaptcha() {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('captcha').value = captcha;
}