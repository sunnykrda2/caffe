

document.addEventListener('DOMContentLoaded', function() {
  var questionContainers = document.querySelectorAll('.question-container');
  questionContainers.forEach(function(questionContainer) {
    
    var icon = questionContainer.querySelector('.toggle-icon');
    
    var questionText = questionContainer.querySelector('.question-text');
    questionText.insertBefore(icon, questionText.firstChild);
    
    questionContainer.addEventListener('click', function() {
      this.classList.toggle('active');
      var content = this.querySelector('.question-container-content');
      content.classList.toggle('show');
      
      
      icon.classList.toggle('fa-plus');
      icon.classList.toggle('fa-minus');
    });
  });
});

  fetch('footer.html')
  .then(response => response.text())
  .then(html => {
    const footerContainer = document.getElementById('footerContainer');
    if (footerContainer) {
      footerContainer.innerHTML = html;
    } else {
      console.error("Element with ID 'footerContainer' not found.");
    }
  })
  .catch(error => {
    console.error('Error fetching or setting footer:', error);
  });


  document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = document.querySelectorAll('img[data-src]');
    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0
    };

    var lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.removeAttribute('data-src');
                lazyImageObserver.unobserve(lazyImage);
            }
        });
    }, options);

    lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
    });
});
