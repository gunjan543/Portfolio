$(document).ready(function () {
  // Smooth scroll for navigation links
  $('.sidebar-link').on('click', function(e) {
    e.preventDefault();
    var target = $(this.getAttribute('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 100
      }, 600);
    }
  });

  // Highlight active navigation link on scroll
  function updateActiveLink() {
    var scrollPos = $(window).scrollTop() + 150;
    
    $('.content-section').each(function() {
      var top = $(this).offset().top;
      var bottom = top + $(this).outerHeight();
      var id = $(this).attr('id');
      
      if (scrollPos >= top && scrollPos < bottom) {
        $('.sidebar-link').removeClass('active');
        $('.sidebar-link[href="#' + id + '"]').addClass('active');
      }
    });
  }

  $(window).on('scroll', updateActiveLink);
  updateActiveLink(); // Initial check

  // Calculate and display years of experience dynamically
  function calculateYearsExperience() {
    var startDate = new Date('2022-06-01'); // June 2022
    var currentDate = new Date();
    var years = (currentDate - startDate) / (1000 * 60 * 60 * 24 * 365.25);
    var yearsRounded = Math.floor(years * 10) / 10; // Round to 1 decimal place
    
    var yearsText = yearsRounded + '+ years';
    $('#years-experience').text(yearsText);
  }
  
  calculateYearsExperience();
});

// Cursor "light" effect following the pointer
document.addEventListener('pointermove', function (event) {
  var root = document.documentElement;
  root.style.setProperty('--cursor-x', event.clientX + 'px');
  root.style.setProperty('--cursor-y', event.clientY + 'px');
});
