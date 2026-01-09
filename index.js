// alert("Website Development in Progress!");

// Site Loading Screen
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');

    if (document.documentElement.classList.contains('show-loader')) {
    
        setTimeout(() => {
            loader.classList.add('fade-out');
            sessionStorage.setItem('hasSeenSplash', 'true');

            setTimeout(() => {
                loader.style.display = 'none';
                document.documentElement.classList.remove('show-loader');
            }, 1500);
        }, 2000);
    }
});