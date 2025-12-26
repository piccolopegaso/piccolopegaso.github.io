// 导航栏滚动效果
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar')
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
})

// 打字机效果
const typingText = document.querySelector('.typing-text')
const text = typingText.textContent
typingText.textContent = ''
let charIndex = 0

function typeWriter() {
  if (charIndex < text.length) {
    typingText.textContent += text.charAt(charIndex)
    charIndex++
    setTimeout(typeWriter, 100)
  }
}

// 页面加载完成后开始打字效果
window.addEventListener('load', () => {
  setTimeout(typeWriter, 500)
})

// 视差滚动效果
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset
  const parallaxElements = document.querySelectorAll('.hero::before')
  
  parallaxElements.forEach(element => {
    const speed = 0.5
    element.style.transform = `translateY(${scrolled * speed}px)`
  })
})

// 卡片悬浮效果增强
const cards = document.querySelectorAll('.skill-card, .project-card, .stat-item, .contact-card')

cards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px) scale(1.02)'
  })
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)'
  })
})

// Intersection Observer 用于元素出现动画
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1'
      entry.target.style.transform = 'translateY(0)'
    }
  })
}, observerOptions)

// 为所有卡片添加淡入动画
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.skill-card, .project-card, .stat-item')
  
  animatedElements.forEach((element, index) => {
    element.style.opacity = '0'
    element.style.transform = 'translateY(30px)'
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
    element.style.transitionDelay = `${index * 0.1}s`
    observer.observe(element)
  })
})

// 动态背景效果
const hero = document.querySelector('.hero')
let mouseX = 0
let mouseY = 0

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX / window.innerWidth
  mouseY = e.clientY / window.innerHeight
  
  const moveX = (mouseX - 0.5) * 50
  const moveY = (mouseY - 0.5) * 50
  
  if (hero) {
    hero.style.backgroundPosition = `${50 + moveX}% ${50 + moveY}%`
  }
})

// 添加加载动画
window.addEventListener('load', () => {
  document.body.classList.add('loaded')
})

// 统计数字动画
function animateValue(element, start, end, duration) {
  let startTimestamp = null
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    const value = Math.floor(progress * (end - start) + start)
    element.textContent = value + (end > 99 ? '' : '+')
    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }
  window.requestAnimationFrame(step)
}

// 当统计区域进入视口时触发数字动画
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statValue = entry.target.querySelector('.stat-value')
      const endValue = parseInt(statValue.textContent)
      animateValue(statValue, 0, endValue, 2000)
      statsObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.5 })

document.querySelectorAll('.stat-item').forEach(item => {
  statsObserver.observe(item)
})
