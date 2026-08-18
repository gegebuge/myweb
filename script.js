// Nav shrink on scroll
window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '10px 5%';
    } else {
        nav.style.padding = '16px 5%';
    }
});

// Fade-in animation on scroll
var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.about-card, .contact-card').forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============ Copy to Clipboard ============
function copyText(value, label) {
    var textarea = document.createElement('textarea');
    textarea.value = value;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        showToast(label + ' ' + value + ' 已复制！');
    } catch(e) {
        showToast('复制失败，请手动复制: ' + value);
    }
    document.body.removeChild(textarea);
}

function showToast(msg) {
    var existing = document.querySelector('.toast');
    if (existing) existing.remove();
    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(function() { toast.classList.add('show'); }, 10);
    setTimeout(function() {
        toast.classList.remove('show');
        setTimeout(function() { toast.remove(); }, 400);
    }, 3000);
}
