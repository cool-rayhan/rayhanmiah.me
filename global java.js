//pop up buttons system
// Function to open the popup with unique IDs
        function openPopup(popupId) {
            var popup = document.getElementById(popupId);
            popup.style.display = 'flex';
            setTimeout(function() {
                popup.style.opacity = '1';
                var content = popup.querySelector('.popup-box-content');
                content.style.transform = 'scale(1)';
            }, 10);
        }

        // Function to close the popup with unique IDs
        function closePopup(popupId) {
            var popup = document.getElementById(popupId);
            popup.style.opacity = '0';
            var content = popup.querySelector('.popup-box-content');
            content.style.transform = 'scale(0.8)';
            setTimeout(function() {
                popup.style.display = 'none';
            }, 300);
        }

        // Function to visit profile with unique URLs
        function visitProfile(url) {
            window.open(url, '_blank');
        }

        // Function to copy text to clipboard
        function copyText(text) {
            navigator.clipboard.writeText(text).then(function() {
                alert('Copied to clipboard: ' + text);
            }, function() {
                alert('Failed to copy text: ' + text);
            });
        }

              // for scroll system
              document.addEventListener('scroll', () => {
       const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
       const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
       const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

       const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
       document.querySelector('.scrollProgressBar').style.width = scrolled + '%';
});
