/* ==========================================
   GÜNEŞ HOTEL - UPDATED JAVASCRIPT
   ========================================== */

// Language data
const languages = {
  tr: {
    flag: '🇹🇷',
    code: 'TR',
    name: 'Türkçe'
  },
  en: {
    flag: '🇬🇧',
    code: 'EN',
    name: 'English'
  },
  it: {
    flag: '🇮🇹',
    code: 'IT',
    name: 'Italiano'
  }
};

// Gallery data - Updated for 60 photos
const galleryData = [
  { src: 'img/gallery-1.JPG', alt: 'Otel Dış Görünüm' },
  { src: 'img/gallery-2.JPG', alt: 'Resepsiyon Alanı' },
  { src: 'img/gallery-3.JPG', alt: 'Restoran' },
  { src: 'img/gallery-4.JPG', alt: 'Nemrut Dağı Manzarası' },
  { src: 'img/gallery-5.JPG', alt: 'Gün Doğumu' },
  { src: 'img/gallery-6.jpeg', alt: 'Çevre Manzarası' },
  { src: 'img/gallery-7.jpeg', alt: 'Oda İç Görünüm' },
  { src: 'img/gallery-8.JPG', alt: 'Gün Batımı' },  
  { src: 'img/double-room-1.jpg', alt: 'Geleneksel Mimari' },
  { src: 'img/double-room-2.jpg', alt: 'Doğal Güzellik' },
  { src: 'img/double-room-3.jpeg', alt: 'Yöresel Lezzetler' },
  { src: 'img/bathroom-1.jpg', alt: 'Konfor Alanı' },
  { src: 'img/bathroom-2.jpg', alt: 'Şehir Manzarası' },
  { src: 'img/triple-room.JPG', alt: 'Kültürel Miras' },
  { src: 'img/triple-room-1.jpeg', alt: 'Doğa Yürüyüşü' },
  { src: 'img/triple-room-2.jpeg', alt: 'Antik Kalıntılar' },
  { src: 'img/twin-room-1.JPG', alt: 'Gökyüzü Manzarası' },
  { src: 'img/twin-room-2.JPG', alt: 'Otel Girişi' },
  { src: 'img/twin-room-3.JPG', alt: 'Terras Alanı' },
  { src: 'img/gallery-9.JPG', alt: 'Lounge Alanı' },
  { src: 'img/gallery-10.JPG', alt: 'Tarihi Heykeller' },
  { src: 'img/gallery-11.JPG', alt: 'Bahçe Alanı' },
  { src: 'img/gallery-12.jpg', alt: 'Kahvaltı Salonu' },
  { src: 'img/gallery-13.jpg', alt: 'Kahvaltı Salonu' },
  { src: 'img/gallery-14.jpg', alt: 'Kahvaltı Salonu' },
  { src: 'img/gallery-15.jpg', alt: 'Kahvaltı Salonu' },
  { src: 'img/gallery-16.jpg', alt: 'Kahvaltı Salonu' },
  { src: 'img/gallery-17.jpg', alt: 'Kahvaltı Salonu' },
  { src: 'img/gallery-18.JPG', alt: 'Kahvaltı Salonu' },
  { src: 'img/gallery-19.jpg', alt: 'Kahvaltı Salonu' },
  { src: 'img/gallery-20.jpg', alt: 'Kahvaltı Salonu' },
  { src: 'img/gallery-21.jpeg', alt: 'Kahvaltı Salonu' },
  { src: 'img/gallery-22.jpeg', alt: 'Kahvaltı Salonu' },
  { src: 'img/gallery-23.jpeg', alt: 'Kahvaltı Salonu' },
  { src: 'img/winter.jpeg', alt: 'Kahvaltı salonu'},
  { src: 'img/gallery-24.jpeg', alt: 'Nemrut Zirvesi' },
  { src: 'img/gallery-25.jpeg', alt: 'Tarih Koridoru' },
  { src: 'img/gallery-26.jpeg', alt: 'Panoramik Manzara' },
  { src: 'img/gallery-27.jpeg', alt: 'Oda Detayı' },
  { src: 'img/gallery-28.jpeg', alt: 'Konfor Odası' },
  { src: 'img/gallery-29.jpeg', alt: 'Açık Hava Alanı' },
  { src: 'img/gallery-30.jpeg', alt: 'Antik Yol' },
  { src: 'img/gallery-31.jpeg', alt: 'Dağ Silüeti' },
  { src: 'img/gallery-32.jpeg', alt: 'Otomobil Parkı' },
  { src: 'img/gallery-33.jpeg', alt: 'Çiçek Bahçesi' },
  { src: 'img/gallery-34.jpeg', alt: 'Gece Manzarası' },
  { src: 'img/gallery-35.jpeg', alt: 'Banyo Detayı' },
  { src: 'img/gallery-36.jpeg', alt: 'Kış Manzarası' },
  { src: 'img/gallery-37.jpeg', alt: 'Yaz Manzarası' },
  { src: 'img/gallery-38.jpeg', alt: 'Köprü Görünümü' },
  { src: 'img/gallery-39.jpeg', alt: 'Antik Tiyatro' },
  { src: 'img/gallery-40.jpeg', alt: 'Çevre Köyler' },
  { src: 'img/gallery-41.jpeg', alt: 'Doğa Yaşamı' },
  { src: 'img/gallery-42.jpeg', alt: 'Tarih Müzesi' },
  { src: 'img/gallery-43.jpeg', alt: 'Yerel Kültür' },
  { src: 'img/gallery-44.jpeg', alt: 'Çiftlik Alanı' },
  { src: 'img/gallery-45.JPG', alt: 'Dere Manzarası' },
  { src: 'img/gallery-46.JPG', alt: 'Kaya Formasyonu' },
  { src: 'img/gallery-47.JPG', alt: 'Yıldızlı Gece' },
  { src: 'img/gallery-48.JPG', alt: 'Orman Alanı' },
  { src: 'img/gallery-49.JPG', alt: 'Yaban Hayatı' },
  { src: 'img/gallery-50.JPG', alt: 'Kamp Alanı' },
  { src: 'img/gallery-51.JPG', alt: 'Piknik Alanı' },
  { src: 'img/gallery-52.JPG', alt: 'Çevre Dostu Enerji' },
  { src: 'img/gallery-53.JPG', alt: 'Turistik Yollar' },
  { src: 'img/gallery-54.JPG', alt: 'Manzara Noktası' },
  { src: 'img/gallery-55.JPG', alt: 'Doğal Yaşam' },
  { src: 'img/gallery-56.JPG', alt: 'Kır Manzarası' },
  { src: 'img/gallery-57.JPG', alt: 'Antik Yollar' },
  { src: 'img/gallery-58.JPG', alt: 'Dağ Etekleri' },
  { src: 'img/gallery-59.JPG', alt: 'Göl Manzarası' },
  { src: 'img/gallery-60.JPG', alt: 'Şafak Vakti' }
];

// Global variables
let currentLang = 'tr';
let currentGalleryIndex = 0;

// ==========================================
// DOCUMENT READY
// ==========================================
$(document).ready(function() {
  // Show loading screen
  setTimeout(function() {
    $('#loading').addClass('fade-out');
    setTimeout(function() {
      $('#loading').remove();
    }, 500);
  }, 1500);

  // Check if language is already selected
  const savedLang = localStorage.getItem('selectedLanguage');
  if (savedLang) {
    currentLang = savedLang;
    $('#languageModal').addClass('hidden');
    updateLanguage(currentLang);
    updateCurrentLangDisplay(currentLang);
  }

  // Initialize components
  initSlider();
  initAOS();
  initScrollEffects();
  initFormHandling();
  initSmoothScroll();
  initEventListeners();
  initGallery();
  initMobileMenu();
  initNavigation();
});

// ==========================================
// NAVIGATION FUNCTIONS - MAIN FIX
// ==========================================
function initNavigation() {
  // Handle all navigation links
  handleNavigationLinks();
  
  // Handle hero buttons
  handleHeroButtons();
  
  // Handle footer links
  handleFooterLinks();
  
  // Handle any other navigation elements
  handleAdditionalNavigation();
}

function handleNavigationLinks() {
  // Navbar links
  $('.nav-links a[href^="#"]').off('click.navigation').on('click.navigation', function(e) {
    e.preventDefault();
    const target = $(this).attr('href');
    scrollToSection(target);
    closeMobileMenu();
  });
}

function handleHeroButtons() {
  // Hero section buttons
  $('.hero-buttons a[href^="#"]').off('click.hero').on('click.hero', function(e) {
    e.preventDefault();
    const target = $(this).attr('href');
    scrollToSection(target);
  });
}

function handleFooterLinks() {
  // Footer navigation links
  $('.footer-section a[href^="#"]').off('click.footer').on('click.footer', function(e) {
    e.preventDefault();
    const target = $(this).attr('href');
    scrollToSection(target);
  });
}

function handleAdditionalNavigation() {
  // Any other navigation links that might be added dynamically
  $(document).off('click.dynamic', 'a[href^="#"]').on('click.dynamic', 'a[href^="#"]', function(e) {
    // Skip if already handled by other handlers
    if ($(this).hasClass('skip-handled') || 
        $(this).closest('.nav-links, .hero-buttons, .footer-section').length > 0) {
      return;
    }
    
    e.preventDefault();
    const target = $(this).attr('href');
    scrollToSection(target);
  });
}

function scrollToSection(target) {
  // Validate target exists
  const $target = $(target);
  if ($target.length === 0) {
    console.warn('Target section not found:', target);
    return;
  }

  // Calculate scroll position with header offset
  const headerHeight = $('header').outerHeight() || 80;
  const offset = headerHeight + 10; // Extra 10px for better spacing
  
  const scrollPosition = $target.offset().top - offset;
  
  // Smooth scroll with animation
  $('html, body').stop().animate({
    scrollTop: scrollPosition
  }, {
    duration: 1000,
    easing: 'swing', // Using jQuery's built-in easing
    complete: function() {
      // Optional: Update browser history
      if (history.pushState && target !== '#home') {
        history.pushState(null, null, target);
      }
    }
  });
}

// ==========================================
// MOBILE MENU FUNCTIONS
// ==========================================
function initMobileMenu() {
  // Hamburger menu toggle
  $('#hamburger').off('click.menu').on('click.menu', function(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleMobileMenu();
  });

  // Close menu when clicking outside
  $(document).off('click.menu-outside').on('click.menu-outside', function(e) {
    if (!$(e.target).closest('.navbar').length && 
        !$(e.target).closest('#navLinks').length) {
      closeMobileMenu();
    }
  });

  // Close menu on window resize
  $(window).off('resize.menu').on('resize.menu', function() {
    if ($(window).width() > 768) {
      closeMobileMenu();
    }
  });
}

function toggleMobileMenu() {
  const $navLinks = $('#navLinks');
  const $hamburger = $('.hamburger i');
  
  $navLinks.toggleClass('active');
  
  if ($navLinks.hasClass('active')) {
    $hamburger.removeClass('fa-bars').addClass('fa-times');
    $('body').addClass('menu-open');
  } else {
    $hamburger.removeClass('fa-times').addClass('fa-bars');
    $('body').removeClass('menu-open');
  }
}

function closeMobileMenu() {
  const $navLinks = $('#navLinks');
  const $hamburger = $('.hamburger i');
  
  $navLinks.removeClass('active');
  $hamburger.removeClass('fa-times').addClass('fa-bars');
  $('body').removeClass('menu-open');
}

// ==========================================
// LANGUAGE FUNCTIONS
// ==========================================
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('selectedLanguage', lang);
  $('#languageModal').addClass('hidden');
  updateLanguage(lang);
  updateCurrentLangDisplay(lang);
}

function updateLanguage(lang) {
  $('[data-' + lang + ']').each(function() {
    const element = $(this);
    const text = element.attr('data-' + lang);
    
    if (element.is('input') || element.is('textarea')) {
      element.attr('placeholder', text);
    } else {
      element.html(text);
    }
  });
}

function updateCurrentLangDisplay(lang) {
  const langData = languages[lang];
  $('#currentLangFlag').text(langData.flag);
  $('#currentLangText').text(langData.code);
}

function toggleLanguageDropdown() {
  $('#langDropdown').toggleClass('active');
}

// ==========================================
// GALLERY LIGHTBOX FUNCTIONS
// ==========================================
function initGallery() {
  // Gallery item click handlers
  $('.gallery-item').off('click.gallery').on('click.gallery', function() {
    const index = parseInt($(this).data('index'));
    openLightbox(index);
  });
}

function openLightbox(index) {
  currentGalleryIndex = index;
  updateLightboxContent();
  $('#lightbox').addClass('active');
  $('body').css('overflow', 'hidden');
  
  // Focus management for accessibility
  $('#lightbox').focus();
}

function closeLightbox() {
  $('#lightbox').removeClass('active');
  $('body').css('overflow', 'auto');
}

function updateLightboxContent() {
  const photo = galleryData[currentGalleryIndex];
  
  // Update image
  const img = $('#lightboxImage');
  img.attr('src', photo.src).attr('alt', photo.alt);
  
  // Resim yüklendikten sonra boyutunu ayarla
  img.off('load.lightbox').on('load.lightbox', function() {
    const windowWidth = $(window).width();
    const windowHeight = $(window).height();
    
    // Navigasyon butonları ve padding için alan bırak
    const availableWidth = windowWidth - 160;  // 160px = butonlar + padding
    const availableHeight = windowHeight - 120; // 120px = counter + padding
    
    $(this).css({
      'max-width': availableWidth + 'px',
      'max-height': availableHeight + 'px',
      'width': 'auto',
      'height': 'auto'
    });
  });
  
  // Update counter
  $('#lightboxCounter').text(`${currentGalleryIndex + 1} / ${galleryData.length}`);
  
  // Update navigation buttons
  $('#lightboxPrev').toggleClass('disabled', currentGalleryIndex === 0);
  $('#lightboxNext').toggleClass('disabled', currentGalleryIndex === galleryData.length - 1);
}

function previousImage() {
  if (currentGalleryIndex > 0) {
    currentGalleryIndex--;
    updateLightboxContent();
  }
}

function nextImage() {
  if (currentGalleryIndex < galleryData.length - 1) {
    currentGalleryIndex++;
    updateLightboxContent();
  }
}

// ==========================================
// SLIDER INITIALIZATION
// ==========================================
function initSlider() {
  $('.hero-slider').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          autoplaySpeed: 4000
        }
      }
    ]
  });
}

// ==========================================
// AOS INITIALIZATION
// ==========================================
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
      delay: 100
    });
  }
}

// ==========================================
// SCROLL EFFECTS
// ==========================================
function initScrollEffects() {
  let ticking = false;
  
  function updateScrollEffects() {
    const scroll = $(window).scrollTop();
    
    // Header scroll effect
    if (scroll >= 100) {
      $('header').addClass('scrolled');
    } else {
      $('header').removeClass('scrolled');
    }
    
    // Scroll to top button
    if (scroll > 300) {
      $('#scrollTop').addClass('visible');
    } else {
      $('#scrollTop').removeClass('visible');
    }
    
    ticking = false;
  }
  
  $(window).off('scroll.effects').on('scroll.effects', function() {
    if (!ticking) {
      requestAnimationFrame(updateScrollEffects);
      ticking = true;
    }
  });
  
  // Scroll to top functionality
  $('#scrollTop').off('click.scroll').on('click.scroll', function() {
    scrollToSection('#home');
    return false;
  });
}

// ==========================================
// SMOOTH SCROLL - REMOVED DUPLICATE
// ==========================================
function initSmoothScroll() {
  // This is now handled by initNavigation function
  // Keeping this function for backward compatibility
}

// ==========================================
// EVENT LISTENERS
// ==========================================
function initEventListeners() {
  // Language button clicks
  $('.lang-btn').off('click.lang').on('click.lang', function() {
    const lang = $(this).data('lang');
    setLanguage(lang);
  });

  // Language dropdown clicks
  $('.lang-option').off('click.lang-option').on('click.lang-option', function() {
    const lang = $(this).data('lang');
    setLanguage(lang);
    $('#langDropdown').removeClass('active');
  });

  // Current language click
  $('#currentLang').off('click.lang-toggle').on('click.lang-toggle', function(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleLanguageDropdown();
  });

  // Lightbox controls
  $('#lightboxClose').off('click.lightbox').on('click.lightbox', closeLightbox);
  $('#lightboxPrev').off('click.lightbox').on('click.lightbox', previousImage);
  $('#lightboxNext').off('click.lightbox').on('click.lightbox', nextImage);

  // Close lightbox when clicking outside
  $('#lightbox').off('click.lightbox-outside').on('click.lightbox-outside', function(e) {
    if (e.target === this) {
      closeLightbox();
    }
  });

  // Close dropdowns when clicking outside
  $(document).off('click.outside').on('click.outside', function(event) {
    if (!$(event.target).closest('.language-selector').length) {
      $('#langDropdown').removeClass('active');
    }
  });

  // Keyboard navigation for accessibility
  $(document).off('keydown.navigation').on('keydown.navigation', function(e) {
    // Lightbox navigation
    if ($('#lightbox').hasClass('active')) {
      switch(e.keyCode) {
        case 27: // Escape
          closeLightbox();
          break;
        case 37: // Left arrow
          previousImage();
          break;
        case 39: // Right arrow
          nextImage();
          break;
      }
    }
    
    // Language dropdown navigation
    if ($('#langDropdown').hasClass('active')) {
      if (e.keyCode === 27) { // Escape
        $('#langDropdown').removeClass('active');
      }
    }
    
    // Mobile menu navigation
    if ($('#navLinks').hasClass('active')) {
      if (e.keyCode === 27) { // Escape
        closeMobileMenu();
      }
    }
  });
}

// ==========================================
// FORM HANDLING
// ==========================================
function initFormHandling() {
  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];
  $('#checkinDate, #checkoutDate').attr('min', today);
  
  // Update checkout date when checkin changes
  $('#checkinDate').off('change.form').on('change.form', function() {
    const checkinDate = $(this).val();
    if (checkinDate) {
      const nextDay = new Date(checkinDate);
      nextDay.setDate(nextDay.getDate() + 1);
      $('#checkoutDate').attr('min', nextDay.toISOString().split('T')[0]);
    }
  });

  // Update guest count based on room type
  $('#roomType').off('change.form').on('change.form', function() {
    const roomType = $(this).val();
    const guestSelect = $('#guestCount');
    
    // Clear current options
    guestSelect.find('option:not(:first)').remove();
    
    // Add appropriate options based on room type
    let maxGuests = 5;
    switch(roomType) {
      case 'double':
      case 'twin':
        maxGuests = 2;
        break;
      case 'triple':
        maxGuests = 3;
        break;
      case 'family':
        maxGuests = 5;
        break;
    }
    
    for(let i = 1; i <= maxGuests; i++) {
      guestSelect.append(`<option value="${i}">${i}</option>`);
    }
  });

  // Form submission - handled by separate function below
}

// ==========================================
// FORM VALIDATION
// ==========================================
function validateBookingForm(formData) {
  // Check required fields
  const requiredFields = ['checkinDate', 'checkoutDate', 'roomType', 'guestCount', 'fullName', 'email', 'phone'];
  
  for (let field of requiredFields) {
    if (!formData[field]) {
      showAlert(
        currentLang === 'tr' ? 'Lütfen tüm zorunlu alanları doldurun.' : 
        currentLang === 'en' ? 'Please fill all required fields.' : 
        'Si prega di compilare tutti i campi obbligatori.',
        'error'
      );
      return false;
    }
  }
  
  // Date validation
  const checkin = new Date(formData.checkinDate);
  const checkout = new Date(formData.checkoutDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  if (checkin < today) {
    showAlert(
      currentLang === 'tr' ? 'Giriş tarihi bugünden önce olamaz.' : 
      currentLang === 'en' ? 'Check-in date cannot be before today.' : 
      'La data di arrivo non può essere precedente a oggi.',
      'error'
    );
    return false;
  }
  
  if (checkout <= checkin) {
    showAlert(
      currentLang === 'tr' ? 'Çıkış tarihi giriş tarihinden sonra olmalıdır.' : 
      currentLang === 'en' ? 'Check-out date must be after check-in date.' : 
      'La data di partenza deve essere successiva alla data di arrivo.',
      'error'
    );
    return false;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    showAlert(
      currentLang === 'tr' ? 'Geçerli bir e-posta adresi giriniz.' : 
      currentLang === 'en' ? 'Please enter a valid email address.' : 
      'Si prega di inserire un indirizzo email valido.',
      'error'
    );
    return false;
  }
  
  // Phone validation
  const phoneRegex = /^[+]?[\d\s\-\(\)]{10,}$/;
  if (!phoneRegex.test(formData.phone)) {
    showAlert(
      currentLang === 'tr' ? 'Geçerli bir telefon numarası giriniz.' : 
      currentLang === 'en' ? 'Please enter a valid phone number.' : 
      'Si prega di inserire un numero di telefono valido.',
      'error'
    );
    return false;
  }
  
  return true;
}

// ==========================================
// ALERT SYSTEM
// ==========================================
function showAlert(message, type = 'info') {
  // Remove existing alerts
  $('.custom-alert').remove();
  
  const alertClass = type === 'success' ? 'alert-success' : 
                    type === 'error' ? 'alert-error' : 'alert-info';
  
  const alertHtml = `
    <div class="custom-alert ${alertClass}">
      <div class="alert-content">
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 
                       type === 'error' ? 'fa-exclamation-circle' : 
                       'fa-info-circle'}"></i>
        <span class="alert-message">${message}</span>
        <button class="alert-close" onclick="$(this).parent().parent().fadeOut(300, function(){ $(this).remove(); })">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  `;
  
  $('body').append(alertHtml);
  
  // Add CSS if not exists
  if (!$('#alert-styles').length) {
    $('head').append(`
      <style id="alert-styles">
        .custom-alert {
          position: fixed;
          top: 100px;
          right: 20px;
          z-index: 10001;
          max-width: 400px;
          width: 90%;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          overflow: hidden;
          animation: slideInRight 0.3s ease;
        }
        
        .alert-content {
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: white;
        }
        
        .alert-success .alert-content { background: linear-gradient(135deg, #28a745, #20c997); }
        .alert-error .alert-content { background: linear-gradient(135deg, #dc3545, #fd7e14); }
        .alert-info .alert-content { background: linear-gradient(135deg, #007bff, #6f42c1); }
        
        .alert-message {
          flex: 1;
          font-size: 0.9rem;
          line-height: 1.4;
        }
        
        .alert-close {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 1rem;
          padding: 0.2rem;
          border-radius: 50%;
          transition: background 0.3s;
        }
        
        .alert-close:hover {
          background: rgba(255,255,255,0.2);
        }
        
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @media (max-width: 768px) {
          .custom-alert {
            top: 80px;
            right: 10px;
            left: 10px;
            width: auto;
            max-width: none;
          }
        }
        
        body.menu-open {
          overflow: hidden;
        }
      </style>
    `);
  }
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    $('.custom-alert').fadeOut(300, function() {
      $(this).remove();
    });
  }, 5000);
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Format date for display
function formatDate(dateString, locale = 'tr-TR') {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Format price with currency
function formatPrice(price, currency = 'EUR', locale = 'tr-TR') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(price);
}

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// ==========================================
// PERFORMANCE OPTIMIZATIONS
// ==========================================

// Lazy loading for images
function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// Debounce function for performance
function debounce(func, wait, immediate) {
  let timeout;
  return function executedFunction() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// ==========================================
// ANALYTICS & TRACKING
// ==========================================
function trackEvent(eventName, eventData = {}) {
  // Google Analytics 4 event tracking
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, {
      event_category: 'User Interaction',
      event_label: eventData.label || '',
      value: eventData.value || 0,
      ...eventData
    });
  }
  
  // Console log for development
  console.log('Event tracked:', eventName, eventData);
}

// Track important user interactions
function initTracking() {
  // Track language selection
  $(document).off('click.tracking', '.lang-btn, .lang-option').on('click.tracking', '.lang-btn, .lang-option', function() {
    const lang = $(this).data('lang');
    if (lang) {
      trackEvent('language_change', { label: lang });
    }
  });
  
  // Track gallery opens
  $(document).off('click.tracking', '.gallery-item').on('click.tracking', '.gallery-item', function() {
    const index = $(this).data('index');
    if (index !== undefined) {
      trackEvent('gallery_view', { label: 'image_' + index });
    }
  });
  
  // Track form submissions
  $('#bookingForm, #reservationForm').off('submit.tracking').on('submit.tracking', function() {
    trackEvent('booking_form_submit');
  });
  
  // Track external link clicks
  $('a[href^="http"], a[href^="mailto"], a[href^="tel"]').off('click.tracking').on('click.tracking', function() {
    const href = $(this).attr('href');
    const type = href.startsWith('mailto') ? 'email' : 
                 href.startsWith('tel') ? 'phone' : 'external_link';
    trackEvent('external_link_click', { label: type, value: href });
  });
  
  // Track navigation clicks
  $('a[href^="#"]').off('click.nav-tracking').on('click.nav-tracking', function() {
    const target = $(this).attr('href');
    trackEvent('navigation_click', { label: target.substring(1) });
  });
}

// ==========================================
// ERROR HANDLING
// ==========================================
window.addEventListener('error', function(e) {
  console.error('JavaScript Error:', e.error);
  
  // Track error for analytics
  trackEvent('javascript_error', {
    label: e.error.message,
    value: e.lineno
  });
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
  console.error('Unhandled Promise Rejection:', e.reason);
  
  trackEvent('promise_rejection', {
    label: e.reason.toString()
  });
});

// ==========================================
// SERVICE WORKER REGISTRATION
// ==========================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js')
      .then(function(registration) {
        console.log('SW registered: ', registration);
      })
      .catch(function(registrationError) {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// ==========================================
// ACCESSIBILITY IMPROVEMENTS
// ==========================================

// Focus management
function manageFocus() {
  // Skip to main content link
  if ($('.skip-link').length === 0) {
    $('body').prepend('<a href="#main" class="skip-link">Skip to main content</a>');
  }
  
  // Add main landmark
  $('main, .main, #main').attr('role', 'main').attr('id', 'main');
  
  // Enhance form labels
  $('.form-control').each(function() {
    const id = $(this).attr('id');
    const label = $(`label[for="${id}"]`);
    if (label.length === 0) {
      const placeholder = $(this).attr('placeholder');
      if (placeholder) {
        $(this).attr('aria-label', placeholder);
      }
    }
  });
}

// Initialize accessibility features
function initAccessibility() {
  manageFocus();
  
  // Add ARIA labels where needed
  $('.hamburger').attr('aria-label', 'Toggle navigation menu');
  $('.scroll-top').attr('aria-label', 'Scroll to top');
  $('.lightbox-close').attr('aria-label', 'Close lightbox');
  $('.lightbox-prev').attr('aria-label', 'Previous image');
  $('.lightbox-next').attr('aria-label', 'Next image');
  
  // Announce dynamic content changes
  if ($('#live-region').length === 0) {
    $('<div id="live-region" class="sr-only" aria-live="polite" aria-atomic="true"></div>').appendTo('body');
  }
}

// Announce content changes to screen readers
function announceToScreenReader(message) {
  $('#live-region').text(message);
  setTimeout(() => {
    $('#live-region').text('');
  }, 1000);
}

// ==========================================
// RESERVATION FORM HANDLING
// ==========================================
function initReservationForm() {
  const form = document.getElementById("reservationForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Collect form data
    const data = {
      checkIn: document.getElementById("checkinDate").value,
      checkOut: document.getElementById("checkoutDate").value,
      roomType: document.getElementById("roomType").value,
      guests: document.getElementById("guestCount").value,
      fullName: document.getElementById("fullName").value.trim(),
      email: document.getElementById("email").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      notes: document.getElementById("specialRequests").value.trim(),
    };

    // Client-side validation
    if (!data.checkIn || !data.checkOut) {
      showAlert(
        currentLang === 'tr' ? "Lütfen giriş ve çıkış tarihlerini seçin." :
        currentLang === 'en' ? "Please select check-in and check-out dates." :
        "Si prega di selezionare le date di arrivo e partenza.",
        'error'
      );
      return;
    }
    
    if (new Date(data.checkOut) <= new Date(data.checkIn)) {
      showAlert(
        currentLang === 'tr' ? "Çıkış tarihi, giriş tarihinden sonra olmalı." :
        currentLang === 'en' ? "Check-out date must be after check-in date." :
        "La data di partenza deve essere successiva alla data di arrivo.",
        'error'
      );
      return;
    }
    
    if (!data.roomType) {
      showAlert(
        currentLang === 'tr' ? "Lütfen oda tipini seçin." :
        currentLang === 'en' ? "Please select room type." :
        "Si prega di selezionare il tipo di camera.",
        'error'
      );
      return;
    }
    
    if (!data.guests) {
      showAlert(
        currentLang === 'tr' ? "Lütfen kişi sayısını seçin." :
        currentLang === 'en' ? "Please select number of guests." :
        "Si prega di selezionare il numero di ospiti.",
        'error'
      );
      return;
    }
    
    if (!data.fullName || !data.email || !data.phone) {
      showAlert(
        currentLang === 'tr' ? "Ad Soyad, E-posta ve Telefon zorunludur." :
        currentLang === 'en' ? "Full Name, Email and Phone are required." :
        "Nome, email e telefono sono obbligatori.",
        'error'
      );
      return;
    }

    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = currentLang === 'tr' ? 'Gönderiliyor...' :
                           currentLang === 'en' ? 'Sending...' :
                           'Invio in corso...';

    // Submit form
    try {
      const res = await fetch("http://localhost:3000/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (res.ok && json.ok) {
        showAlert(
          json.message || 
          (currentLang === 'tr' ? "Rezervasyon talebiniz alındı. Teşekkürler!" :
           currentLang === 'en' ? "Your reservation request has been received. Thank you!" :
           "La vostra richiesta di prenotazione è stata ricevuta. Grazie!"),
          'success'
        );
        form.reset();
        // Reset room type and guest count dropdowns
        $('#roomType, #guestCount').find('option:not(:first)').remove();
      } else {
        showAlert(
          (json && json.message) || 
          (currentLang === 'tr' ? "Gönderim sırasında bir hata oluştu." :
           currentLang === 'en' ? "An error occurred during submission." :
           "Si è verificato un errore durante l'invio."),
          'error'
        );
      }
    } catch (err) {
      console.error(err);
      showAlert(
        currentLang === 'tr' ? "Sunucuya ulaşılamıyor. Lütfen daha sonra tekrar deneyin." :
        currentLang === 'en' ? "Cannot reach the server. Please try again later." :
        "Impossibile raggiungere il server. Riprova più tardi.",
        'error'
      );
    } finally {
      // Reset button
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
}

// ==========================================
// INITIALIZE ALL COMPONENTS
// ==========================================
$(document).ready(function() {
  // Initialize tracking
  initTracking();
  
  // Initialize accessibility
  initAccessibility();
  
  // Initialize reservation form
  initReservationForm();
  
  // Initialize lazy loading if needed
  initLazyLoading();
  
  console.log('Güneş Hotel - All components initialized successfully');
});

// ==========================================
// EXPORT FUNCTIONS FOR GLOBAL ACCESS
// ==========================================
window.GunesHotel = {
  setLanguage,
  toggleLanguageDropdown,
  toggleMobileMenu,
  closeMobileMenu,
  openLightbox,
  closeLightbox,
  previousImage,
  nextImage,
  showAlert,
  trackEvent,
  formatDate,
  formatPrice,
  scrollToSection
};

// Make specific functions globally available for HTML onclick events
window.setLanguage = setLanguage;
window.toggleLanguageDropdown = toggleLanguageDropdown;
window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.previousImage = previousImage;
window.nextImage = nextImage;
window.scrollToSection = scrollToSection;