document.addEventListener('DOMContentLoaded', () => {
    // موجودہ مینو ٹوگل اور فید ان اینیمیشن لاجک
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-buttons');
    const navbar = document.querySelector('.navbar');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('nav-open');
            authButtons.classList.toggle('nav-open');
            menuToggle.classList.toggle('is-active');
            navbar.classList.toggle('nav-expanded');
        });
    }

    const initFadeInObserver = () => {
        const fadeInElements = document.querySelectorAll('.fade-in');
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, observerOptions);
        fadeInElements.forEach(element => {
            observer.observe(element);
        });
    };
    
    const initNumberCounters = () => {
        const statsSection = document.querySelector('.stats');
        if (!statsSection) return;

        const animateNumber = (element) => {
            const target = parseInt(element.getAttribute('data-target'), 10);
            const hasPlus = element.textContent.includes('+') || (element.getAttribute('data-target') + '+') === element.innerHTML;
            
            let current = 0;
            const duration = 2000;
            const startTime = performance.now();

            const updateCounter = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                current = Math.floor(target * progress);

                let formattedNumber = current.toLocaleString();
                if (hasPlus) {
                   formattedNumber += '+';
                }
                element.textContent = formattedNumber;

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    element.textContent = target.toLocaleString() + (hasPlus ? '+' : '');
                }
            };
            requestAnimationFrame(updateCounter);
        };

        const statsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const numberCounters = entry.target.querySelectorAll('[data-target]');
                    numberCounters.forEach(animateNumber);
                    entry.target.classList.add('counted');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statsObserver.observe(statsSection);
    };

    const initCharts = () => {
        const bidsSubmitted = 5200;
        const bidsWon = 1850;

        const bidComparisonCtx = document.getElementById('bidComparisonChart');
        if (bidComparisonCtx) {
            new Chart(bidComparisonCtx, {
                type: 'bar',
                data: {
                    labels: ['Bids Submitted', 'Bids Won'],
                    datasets: [{
                        label: 'Total Bids',
                        data: [bidsSubmitted, bidsWon],
                        backgroundColor: [
                            'rgba(59, 130, 246, 0.5)',
                            'rgba(22, 163, 74, 0.5)'
                        ],
                        borderColor: [
                            'rgba(59, 130, 246, 1)',
                            'rgba(22, 163, 74, 1)'
                        ],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: '#041C38',
                            titleFont: { size: 16, weight: 'bold' },
                            bodyFont: { size: 14 },
                            padding: 12,
                            cornerRadius: 8,
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(0,0,0,0.05)'
                            }
                        }
                    }
                }
            });
        }

        const winRateCtx = document.getElementById('winRateChart');
        if (winRateCtx) {
            const bidsLost = bidsSubmitted - bidsWon;
            new Chart(winRateCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Bids Won', 'Bids Lost'],
                    datasets: [{
                        data: [bidsWon, bidsLost],
                        backgroundColor: [
                            'rgba(22, 163, 74, 0.7)',
                            'rgba(239, 68, 68, 0.7)'
                        ],
                        borderColor: [
                            'rgba(22, 163, 74, 1)',
                            'rgba(239, 68, 68, 1)'
                        ],
                        borderWidth: 2,
                        hoverOffset: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                font: {
                                    size: 14
                                },
                                padding: 20
                            }
                        },
                        tooltip: {
                            backgroundColor: '#041C38',
                            titleFont: { size: 16, weight: 'bold' },
                            bodyFont: { size: 14 },
                            padding: 12,
                            cornerRadius: 8,
                            callbacks: {
                                label: function(context) {
                                    const label = context.label || '';
                                    const value = context.raw;
                                    const total = context.chart.getDatasetMeta(0).total;
                                    const percentage = ((value / total) * 100).toFixed(1);
                                    return `${label}: ${value.toLocaleString()} (${percentage}%)`;
                                }
                            }
                        }
                    },
                    cutout: '60%'
                }
            });
        }
    };
    
    // --- ٹیسٹیمونیل کارڈ اسکرولنگ لاجک ---
    // یقینی بنائیں کہ یہ سلیکٹر صحیح ہے: اسے overflow-x: auto والے عنصر کو ٹارگٹ کرنا چاہیے
    const testimonialCardsContainer = document.querySelector('.testimonial-cards-wrapper');
    const prevButton = document.querySelector('.testimonial-nav .nav-btn.left'); // بہتر سلیکٹر
    const nextButton = document.querySelector('.testimonial-nav .nav-btn.right'); // بہتر سلیکٹر

    // ڈیبگنگ کے لیے کنسول لاگز
    console.log('testimonialCardsContainer:', testimonialCardsContainer);
    console.log('prevButton:', prevButton);
    console.log('nextButton:', nextButton);

    const scrollCards = (direction) => {
        if (!testimonialCardsContainer) {
            console.error('Error: testimonialCardsContainer not found for scrolling!');
            return;
        }

        // اسکرول کی مقدار کو بہتر طریقے سے حساب کریں: ایک کارڈ کی چوڑائی + گیپ
        let scrollAmount = testimonialCardsContainer.clientWidth / 2; // ڈیفالٹ کے طور پر آدھی کنٹینر چوڑائی
        const firstCard = testimonialCardsContainer.querySelector('.testimonial-card');
        if (firstCard) {
            // فرض کریں کہ آپ کے CSS میں کارڈز کے درمیان 24px کا گیپ ہے
            scrollAmount = firstCard.offsetWidth + 24;
        }

        if (direction === 'next') {
            testimonialCardsContainer.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
            console.log('Scrolling next by:', scrollAmount); // ڈیبگنگ
        } else if (direction === 'prev') {
            testimonialCardsContainer.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
            console.log('Scrolling prev by:', -scrollAmount); // ڈیبگنگ
        }
    };

    if (prevButton) {
        prevButton.addEventListener('click', () => scrollCards('prev'));
    } else {
        console.warn('Previous testimonial button not found.');
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => scrollCards('next'));
    } else {
        console.warn('Next testimonial button not found.');
    }
    // --- ٹیسٹیمونیل کارڈ اسکرولنگ لاجک کا اختتام ---

    // تمام فنکشنز کو کال کریں
    initFadeInObserver();
    initNumberCounters();
    initCharts();
});
