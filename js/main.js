// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }
});

// 移动端菜单切换
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // 关闭移动端菜单
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// 动画效果
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// 观察所有需要动画的元素
document.querySelectorAll('.feature-card, .stat, .screenshot-item').forEach(el => {
    observer.observe(el);
});

// 截图轮播
const screenshotsSlider = document.querySelector('.screenshots-slider');
let isDown = false;
let startX;
let scrollLeft;

if (screenshotsSlider) {
    screenshotsSlider.addEventListener('mousedown', (e) => {
        isDown = true;
        screenshotsSlider.classList.add('active');
        startX = e.pageX - screenshotsSlider.offsetLeft;
        scrollLeft = screenshotsSlider.scrollLeft;
    });

    screenshotsSlider.addEventListener('mouseleave', () => {
        isDown = false;
        screenshotsSlider.classList.remove('active');
    });

    screenshotsSlider.addEventListener('mouseup', () => {
        isDown = false;
        screenshotsSlider.classList.remove('active');
    });

    screenshotsSlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - screenshotsSlider.offsetLeft;
        const walk = (x - startX) * 2;
        screenshotsSlider.scrollLeft = scrollLeft - walk;
    });
}

// 添加CSS动画类
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .nav-menu.active {
        display: flex;
        position: fixed;
        top: 70px;
        left: 0;
        width: 100%;
        flex-direction: column;
        background: rgba(255, 255, 255, 0.98);
        padding: 2rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        animation: slideDown 0.3s ease-out;
    }
    
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .nav-toggle.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    .screenshots-slider.active {
        cursor: grabbing;
    }
    
    .screenshots-slider {
        cursor: grab;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
    
    .screenshots-slider::-webkit-scrollbar {
        display: none;
    }
`;
document.head.appendChild(style);

// 加载占位图片
function createPlaceholderImage(width, height, text) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    // 背景
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, width, height);
    
    // 文字
    ctx.fillStyle = '#999';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2);
    
    return canvas.toDataURL();
}

// 设置占位图片
document.addEventListener('DOMContentLoaded', function() {
    // 主界面模拟图
    const mockupImage = document.querySelector('.mockup-image');
    if (mockupImage && !mockupImage.src) {
        mockupImage.src = createPlaceholderImage(400, 800, '应用界面');
    }
    
    // 截图占位图
    const screenshots = document.querySelectorAll('.screenshot-item img');
    screenshots.forEach((img, index) => {
        if (!img.src) {
            img.src = createPlaceholderImage(300, 600, `截图 ${index + 1}`);
        }
    });
});