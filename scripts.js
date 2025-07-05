// Ambil semua elemen gambar dan modal
const galleryItems = document.querySelectorAll('.gallery-item img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementById('close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Menyimpan index gambar saat modal dibuka
let currentIndex = 0;

// Menampilkan gambar di modal
function openModal(index) {
    modal.style.display = 'flex';
    modalImg.src = galleryItems[index].src;
    modalImg.style.animation = 'zoomIn 0.3s ease-in-out'; // Animasi Zoom In
    currentIndex = index;
}

// Menutup modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Navigasi Prev dan Next
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryItems.length - 1;
    modalImg.src = galleryItems[currentIndex].src;
    modalImg.style.animation = 'zoomIn 0.3s ease-in-out'; // Animasi Zoom In
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < galleryItems.length - 1) ? currentIndex + 1 : 0;
    modalImg.src = galleryItems[currentIndex].src;
    modalImg.style.animation = 'zoomIn 0.3s ease-in-out'; // Animasi Zoom In
});

// Menampilkan modal saat gambar diklik
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        openModal(index);
    });
});

// Menutup modal jika diklik di luar gambar
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Tambahkan event listener saat halaman selesai dimuat
window.addEventListener('load', () => {
    document.body.style.opacity = 1; // Fade-in efek untuk body

    // Menambahkan animasi ke elemen galeri setelah halaman dimuat
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`; // Menambah delay untuk setiap gambar
    });

    // Menambahkan animasi untuk teks atau elemen lain jika perlu
    const textElements = document.querySelectorAll('h1, p, .cta-button');
    textElements.forEach((elem, index) => {
        elem.style.animationDelay = `${index * 0.3}s`; // Delay untuk teks dan tombol
    });
});
