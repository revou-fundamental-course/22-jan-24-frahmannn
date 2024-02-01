
   // JavaScript validation for the contact form
   document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    function validateForm(event) {
        event.preventDefault();

        const fullNameInput = document.getElementById('fullName');
        const emailAddressInput = document.getElementById('emailAddress');
        const phoneNumberInput = document.getElementById('phoneNumber');
        const messageTextarea = document.getElementById('message');
        const interestSelect = document.getElementById('interest');

        // Menghapus spasi di depan dan di belakang
        const fullName = fullNameInput.value.trim();
        const emailAddress = emailAddressInput.value.trim();
        const phoneNumber = phoneNumberInput.value.trim();
        const message = messageTextarea.value.trim();
        const interest = interestSelect.value;

        // Memeriksa apakah fullName kosong
        if (!fullName) {
            alert('Please enter your full name.');
            return;
        }

         // Memeriksa apakah emailAddress kosong dan dalam format email yang valid
        if (!emailAddress) {
            alert('Please enter your email address.');
            return;
        } else if (!isValidEmail(emailAddress)) {
            alert('Please enter a valid email address.');
            return;
        }

         // Memeriksa apakah phoneNumber kosong dan dalam format nomor telepon yang valid
        if (!phoneNumber) {
            alert('Please enter your phone number.');
            return;
        } else if (!isValidPhoneNumber(phoneNumber)) {
            alert('Please enter a valid phone number.');
            return;
        }

       // Memeriksa apakah message kosong

        if (!message) {
            alert('Please enter your message.');
            return;
        }

        // Memeriksa apakah interest tidak dipilih
        if (interest === '') {
            alert('Please select your interest.');
            return;
        }

 // Jika semua validasi berhasil, Anda dapat mengirimkan formulir atau melakukan tindakan tambahan
        alert('Form submitted successfully!');
    }

    function isValidEmail(email) {
         // Ekspresi reguler untuk memvalidasi Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPhoneNumber(phoneNumber) {
       // Ekspresi reguler untuk memvalidasi Nomor Telepon (dengan asumsi format sederhana)
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phoneNumber);
    }

    contactForm.addEventListener('submit', validateForm);
});



    // auto-slide banner

    document.addEventListener("DOMContentLoaded", function () {
        var imageSliderContainer = document.querySelector('.image-slider-container');
        var imageSlider = imageSliderContainer.querySelector('.image-slider');
        var images = imageSlider.querySelectorAll('img');
        var currentImageIndex = 0;
        var interval = setInterval(autoSlide, 10000);

        function autoSlide() {
            // Menambahkan efek fade-out pada gambar saat ini
            images[currentImageIndex].style.opacity = 0;

            // Menunggu sebentar sebelum menampilkan gambar berikutnya
            setTimeout(function () {
                // Sembunyikan gambar saat ini
                images[currentImageIndex].style.display = 'none';
                images[currentImageIndex].style.opacity = 1; // Mengatur kembali opacity ke 1

                // Perbarui indeks untuk menampilkan gambar berikutnya atau kembali ke gambar pertama jika sudah mencapai yang terakhir
                currentImageIndex = (currentImageIndex + 1) % images.length;

                // Tampilkan gambar berikutnya
                images[currentImageIndex].style.display = 'block';
            }, 500); // Menunggu 500ms sebelum menampilkan gambar berikutnya
        }
    });


    //Smooth Scrolling

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

function scrollToContactUs() {
    // Mendapatkan elemen dengan ID "contact-us"
    var contactUsSection = document.getElementById('contact-us');
    
    // Menggunakan smooth scroll untuk membawa pengguna ke bagian "Contact Us"
    contactUsSection.scrollIntoView({ behavior: 'smooth' });
}