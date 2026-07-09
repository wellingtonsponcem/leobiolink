document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    /* ── Navbar scroll effect ── */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 40);
        }
    }, { passive: true });

    /* ── Scroll reveal ── */
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                revealObserver.unobserve(e.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => revealObserver.observe(el));

    /* ── Counter animation ── */
    function animateCounter(el) {
        const targetValue = parseFloat(el.dataset.target);
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const isDecimal = el.dataset.target.includes('.');
        const duration = 2000;
        const start = performance.now();

        const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * targetValue;
            
            if (isDecimal) {
                el.textContent = prefix + current.toFixed(1) + suffix;
            } else {
                el.textContent = prefix + Math.floor(current) + suffix;
            }

            if (progress < 1) requestAnimationFrame(step);
            else el.textContent = prefix + el.dataset.target + suffix;
        };
        requestAnimationFrame(step);
    }

    /* ── Chart animation ── */
    function animateBars(container) {
        const bars = container.querySelectorAll('.chart-bar');
        bars.forEach((bar, index) => {
            setTimeout(() => {
                const height = bar.dataset.height;
                bar.style.setProperty('--height', height);
                bar.classList.add('animate');
            }, index * 100);
        });
    }

    const counters = document.querySelectorAll('.counter');
    const chartBarsContainer = document.querySelector('.chart-bars');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                if (e.target.classList.contains('counter') && !e.target.dataset.animated) {
                    e.target.dataset.animated = 'true';
                    animateCounter(e.target);
                }
                if (e.target.classList.contains('chart-bars') && !e.target.dataset.animated) {
                    e.target.dataset.animated = 'true';
                    animateBars(e.target);
                }
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
    if (chartBarsContainer) observer.observe(chartBarsContainer);

    /* ── Smooth Scroll ── */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ── Form Submission ── */
    const applicationForm = document.getElementById('applicationForm');
    if (applicationForm) {
        applicationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btn = applicationForm.querySelector('button');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = 'Enviando...';
            btn.disabled = true;

            // Simulação de envio (Pode-se re-integrar o EmailJS aqui se desejado)
            setTimeout(() => {
                btn.innerHTML = 'Aplicação enviada ✓';
                btn.style.background = 'linear-gradient(135deg, #4ADE80, #22C55E)';
                btn.style.color = '#fff';
                
                alert('Sua candidatura foi recebida pela Fidelity Investimentos. Entraremos em contato em até 48 horas.');
                applicationForm.reset();
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                    btn.style.color = '';
                    btn.disabled = false;
                }, 4000);
            }, 2000);
        });
    }

    // Mascara de telefone (opcional - simples)
    const phoneInput = document.getElementById('whatsapp');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
            e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        });
    }
});
