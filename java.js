<script>
  function scrollToSection() {
    var selectedSection = document.getElementById('mySelect').value;
    var sectionElement = document.querySelector(selectedSection);
    window.scrollTo({
      top: sectionElement.offsetTop - (window.innerHeight / 2),
      behavior: 'smooth'
    });
  }
</script>
