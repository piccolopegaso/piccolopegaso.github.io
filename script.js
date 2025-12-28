// 多语言翻译数据
const translations = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Contact'
    },
    hero: {
      greeting: "Hi, I'm",
      subtitle: 'Experienced Mobile Game Developer',
      status: '\ud83c\udfae Game Dev & Frontend',
      viewWork: 'View Work',
      contact: 'Contact'
    },
    about: {
      title: 'About Me',
      intro: "I'm an <strong>experienced mobile game developer</strong> specializing in building high-quality cross-platform games using <strong>Unity3D</strong>, <strong>Cocos2d-x</strong>, and <strong>Lua</strong>. I'm also passionate about modern frontend technologies, with expertise in the <strong>Vue.js</strong> ecosystem and enterprise application development.",
      passion: "My technical stack spans from game engine internals to frontend UI frameworks, from automation tools to data visualization. I love exploring new technologies and turning creative ideas into real-world products and solutions.",
      years: 'Years',
      projects: 'Projects',
      technologies: 'Technologies'
    },
    skills: {
      title: 'Skills',
      gameDev: {
        title: 'Game Development',
        items: ['Cocos2d-x', 'Unity3D', 'Lua Scripting', 'Cross-platform']
      },
      frontend: {
        title: 'Frontend Development',
        items: ['Vue.js', 'Element Plus', 'JavaScript/ES6+', 'Responsive Design']
      },
      dataViz: {
        title: 'Data Visualization',
        items: ['Luckysheet', 'Univer Sheets', 'Online Spreadsheets', 'Data Processing']
      },
      automation: {
        title: 'Automation',
        items: ['RSS Aggregation', 'GitHub Actions', 'AI Integration']
      },
      tools: {
        title: 'Tools',
        items: ['QR Code Generation', 'Print Utilities']
      }
    },
    experience: {
      title: 'Professional Experience',
      gameDev: {
        title: 'Mobile Game Development',
        period: '5+ years of experience',
        desc: 'Developed and shipped multiple successful mobile games using Unity3D and Cocos2d-x. Specialized in performance optimization, cross-platform deployment, and creating engaging gameplay mechanics for iOS and Android platforms.'
      },
      frontend: {
        title: 'Enterprise Web Applications',
        period: 'Professional projects',
        desc: 'Built complex enterprise-level management systems and ERP solutions using Vue.js ecosystem. Expertise in component architecture, state management, and creating intuitive user interfaces for business applications.'
      },
      tools: {
        title: 'Developer Tools & Automation',
        period: 'Side projects',
        desc: 'Created various automation tools and utilities to improve development workflow. Including RSS aggregation systems, QR code generators, and CI/CD automation scripts using GitHub Actions and modern DevOps practices.'
      },
      opensource: {
        title: 'Open Source Exploration',
        period: 'Learning & experimenting',
        desc: 'Explored and experimented with various open-source frameworks and libraries. Created small demo projects to learn new technologies and contribute to the developer community through knowledge sharing.'
      }
    },
    contact: {
      title: 'Get In Touch',
      text: 'Interested in collaboration or have a project in mind? Feel free to reach out!'
    }
  },
  zh: {
    nav: {
      about: '\u5173\u4e8e',
      skills: '\u6280\u80fd',
      experience: '\u7ecf\u9a8c',
      contact: '\u8054\u7cfb'
    },
    hero: {
      greeting: '\u4f60\u597d\uff0c\u6211\u662f',
      subtitle: '\u7ecf\u9a8c\u4e30\u5bcc\u7684\u79fb\u52a8\u6e38\u620f\u5f00\u53d1\u8005',
      status: '\ud83c\udfae \u6e38\u620f\u5f00\u53d1 & \u524d\u7aef\u5de5\u7a0b',
      viewWork: '\u67e5\u770b\u4f5c\u54c1',
      contact: '\u8054\u7cfb\u6211'
    },
    about: {
      title: '\u5173\u4e8e\u6211',
      intro: '\u6211\u662f\u4e00\u540d<strong>\u7ecf\u9a8c\u4e30\u5bcc\u7684\u79fb\u52a8\u6e38\u620f\u5f00\u53d1\u8005</strong>\uff0c\u4e13\u6ce8\u4e8e\u4f7f\u7528 <strong>Unity3D</strong>\u3001<strong>Cocos2d-x</strong> \u548c <strong>Lua</strong> \u6253\u9020\u9ad8\u8d28\u91cf\u7684\u8de8\u5e73\u53f0\u6e38\u620f\u3002\u540c\u65f6\uff0c\u6211\u4e5f\u662f\u4e00\u540d\u70ed\u8877\u4e8e\u73b0\u4ee3\u524d\u7aef\u6280\u672f\u7684\u5de5\u7a0b\u5e08\uff0c\u7cbe\u901a <strong>Vue.js</strong> \u751f\u6001\u7cfb\u7edf\u548c\u4f01\u4e1a\u7ea7\u5e94\u7528\u5f00\u53d1\u3002',
      passion: '\u6211\u7684\u6280\u672f\u6808\u6db5\u76d6\u4e86\u4ece\u6e38\u620f\u5f15\u64ce\u5e95\u5c42\u5230\u524d\u7aef UI \u6846\u67b6\uff0c\u4ece\u81ea\u52a8\u5316\u5de5\u5177\u5230\u6570\u636e\u53ef\u89c6\u5316\u3002\u6211\u70ed\u7231\u63a2\u7d22\u65b0\u6280\u672f\uff0c\u5e76\u81f4\u529b\u4e8e\u5c06\u521b\u610f\u8f6c\u5316\u4e3a\u5b9e\u9645\u7684\u4ea7\u54c1\u548c\u89e3\u51b3\u65b9\u6848\u3002',
      years: '\u5e74\u7ecf\u9a8c',
      projects: '\u4e2a\u9879\u76ee',
      technologies: '\u79cd\u6280\u672f'
    },
    skills: {
      title: '\u6280\u80fd\u6808',
      gameDev: {
        title: '\u6e38\u620f\u5f00\u53d1',
        items: ['Cocos2d-x', 'Unity3D', 'Lua \u811a\u672c', '\u8de8\u5e73\u53f0']
      },
      frontend: {
        title: '\u524d\u7aef\u5f00\u53d1',
        items: ['Vue.js', 'Element Plus', 'JavaScript/ES6+', '\u54cd\u5e94\u5f0f\u8bbe\u8ba1']
      },
      dataViz: {
        title: '\u6570\u636e\u53ef\u89c6\u5316',
        items: ['Luckysheet', 'Univer Sheets', '\u5728\u7ebf\u8868\u683c', '\u6570\u636e\u5904\u7406']
      },
      automation: {
        title: '\u81ea\u52a8\u5316\u5de5\u7a0b',
        items: ['RSS \u805a\u5408', 'GitHub Actions', 'AI \u96c6\u6210']
      },
      tools: {
        title: '\u5b9e\u7528\u5de5\u5177',
        items: ['QR \u7801\u751f\u6210', '\u6253\u5370\u5de5\u5177']
      }
    },
    experience: {
      title: '\u4e13\u4e1a\u7ecf\u9a8c',
      gameDev: {
        title: '\u79fb\u52a8\u6e38\u620f\u5f00\u53d1',
        period: '5+ \u5e74\u7ecf\u9a8c',
        desc: '\u4f7f\u7528 Unity3D \u548c Cocos2d-x \u5f00\u53d1\u5e76\u53d1\u5e03\u4e86\u591a\u6b3e\u6210\u529f\u7684\u79fb\u52a8\u6e38\u620f\u3002\u4e13\u957f\u4e8e\u6027\u80fd\u4f18\u5316\u3001\u8de8\u5e73\u53f0\u90e8\u7f72\uff0c\u4ee5\u53ca\u4e3a iOS \u548c Android \u5e73\u53f0\u521b\u5efa\u5f15\u4eba\u5165\u80dc\u7684\u6e38\u620f\u673a\u5236\u3002'
      },
      frontend: {
        title: '\u4f01\u4e1a\u7ea7 Web \u5e94\u7528',
        period: '\u4e13\u4e1a\u9879\u76ee',
        desc: '\u4f7f\u7528 Vue.js \u751f\u6001\u7cfb\u7edf\u6784\u5efa\u590d\u6742\u7684\u4f01\u4e1a\u7ea7\u7ba1\u7406\u7cfb\u7edf\u548c ERP \u89e3\u51b3\u65b9\u6848\u3002\u5728\u7ec4\u4ef6\u67b6\u6784\u3001\u72b6\u6001\u7ba1\u7406\u548c\u521b\u5efa\u76f4\u89c2\u7684\u4e1a\u52a1\u5e94\u7528\u7528\u6237\u754c\u9762\u65b9\u9762\u5177\u6709\u4e13\u4e1a\u7ecf\u9a8c\u3002'
      },
      tools: {
        title: '\u5f00\u53d1\u5de5\u5177\u4e0e\u81ea\u52a8\u5316',
        period: '\u4e2a\u4eba\u9879\u76ee',
        desc: '\u521b\u5efa\u4e86\u5404\u79cd\u81ea\u52a8\u5316\u5de5\u5177\u548c\u5b9e\u7528\u7a0b\u5e8f\u6765\u63d0\u9ad8\u5f00\u53d1\u5de5\u4f5c\u6d41\u3002\u5305\u62ec RSS \u805a\u5408\u7cfb\u7edf\u3001QR \u7801\u751f\u6210\u5668\uff0c\u4ee5\u53ca\u4f7f\u7528 GitHub Actions \u548c\u73b0\u4ee3 DevOps \u5b9e\u8df5\u7684 CI/CD \u81ea\u52a8\u5316\u811a\u672c\u3002'
      },
      opensource: {
        title: '\u5f00\u6e90\u63a2\u7d22',
        period: '\u5b66\u4e60\u4e0e\u5b9e\u9a8c',
        desc: '\u63a2\u7d22\u548c\u5b9e\u9a8c\u5404\u79cd\u5f00\u6e90\u6846\u67b6\u548c\u5e93\u3002\u521b\u5efa\u5c0f\u578b\u6f14\u793a\u9879\u76ee\u6765\u5b66\u4e60\u65b0\u6280\u672f\uff0c\u5e76\u901a\u8fc7\u77e5\u8bc6\u5171\u4eab\u4e3a\u5f00\u53d1\u8005\u793e\u533a\u505a\u51fa\u8d21\u732e\u3002'
      }
    },
    contact: {
      title: '\u8054\u7cfb\u6211',
      text: '\u5bf9\u5408\u4f5c\u611f\u5174\u8da3\u6216\u6709\u9879\u76ee\u60f3\u6cd5\uff1f\u6b22\u8fce\u968f\u65f6\u8054\u7cfb\uff01'
    }
  },
  de: {
    nav: {
      about: '\u00dcber',
      skills: 'F\u00e4higkeiten',
      experience: 'Erfahrung',
      contact: 'Kontakt'
    },
    hero: {
      greeting: 'Hallo, ich bin',
      subtitle: 'Erfahrener Mobile Game Developer',
      status: '\ud83c\udfae Spiele & Frontend',
      viewWork: 'Arbeiten',
      contact: 'Kontakt'
    },
    about: {
      title: '\u00dcber mich',
      intro: 'Ich bin ein <strong>erfahrener Mobile Game Developer</strong>, der sich auf die Entwicklung hochwertiger plattform\u00fcbergreifender Spiele mit <strong>Unity3D</strong>, <strong>Cocos2d-x</strong> und <strong>Lua</strong> spezialisiert hat. Au\u00dferdem bin ich leidenschaftlich an modernen Frontend-Technologien interessiert und verf\u00fcge \u00fcber Fachwissen im <strong>Vue.js</strong>-\u00d6kosystem und in der Entwicklung von Unternehmensanwendungen.',
      passion: 'Mein technischer Stack reicht von Game-Engine-Interna bis hin zu Frontend-UI-Frameworks, von Automatisierungstools bis hin zur Datenvisualisierung. Ich liebe es, neue Technologien zu erkunden und kreative Ideen in reale Produkte und L\u00f6sungen umzusetzen.',
      years: 'Jahre',
      projects: 'Projekte',
      technologies: 'Technologien'
    },
    skills: {
      title: 'F\u00e4higkeiten',
      gameDev: {
        title: 'Spieleentwicklung',
        items: ['Cocos2d-x', 'Unity3D', 'Lua Skripting', 'Plattform\u00fcbergreifend']
      },
      frontend: {
        title: 'Frontend-Entwicklung',
        items: ['Vue.js', 'Element Plus', 'JavaScript/ES6+', 'Responsive Design']
      },
      dataViz: {
        title: 'Datenvisualisierung',
        items: ['Luckysheet', 'Univer Sheets', 'Online-Tabellen', 'Datenverarbeitung']
      },
      automation: {
        title: 'Automatisierung',
        items: ['RSS-Aggregation', 'GitHub Actions', 'AI-Integration']
      },
      tools: {
        title: 'Werkzeuge',
        items: ['QR-Code-Generierung', 'Druck-Utilities']
      }
    },
    experience: {
      title: 'Berufserfahrung',
      gameDev: {
        title: 'Mobile Spieleentwicklung',
        period: '5+ Jahre Erfahrung',
        desc: 'Entwicklung und Ver\u00f6ffentlichung mehrerer erfolgreicher mobiler Spiele mit Unity3D und Cocos2d-x. Spezialisiert auf Leistungsoptimierung, plattform\u00fcbergreifende Bereitstellung und die Erstellung fesselnder Gameplay-Mechaniken f\u00fcr iOS- und Android-Plattformen.'
      },
      frontend: {
        title: 'Unternehmens-Webanwendungen',
        period: 'Professionelle Projekte',
        desc: 'Entwicklung komplexer Managementsysteme und ERP-L\u00f6sungen auf Unternehmensebene mit dem Vue.js-\u00d6kosystem. Fachwissen in Komponentenarchitektur, Zustandsverwaltung und der Erstellung intuitiver Benutzeroberfl\u00e4chen f\u00fcr Gesch\u00e4ftsanwendungen.'
      },
      tools: {
        title: 'Entwicklertools & Automatisierung',
        period: 'Nebenprojekte',
        desc: 'Erstellung verschiedener Automatisierungstools und Utilities zur Verbesserung des Entwicklungsworkflows. Einschlie\u00dflich RSS-Aggregationssystemen, QR-Code-Generatoren und CI/CD-Automatisierungsskripten mit GitHub Actions und modernen DevOps-Praktiken.'
      },
      opensource: {
        title: 'Open-Source-Erkundung',
        period: 'Lernen & Experimentieren',
        desc: 'Erkundung und Experimente mit verschiedenen Open-Source-Frameworks und Bibliotheken. Erstellung kleiner Demo-Projekte zum Erlernen neuer Technologien und Beitrag zur Entwickler-Community durch Wissensaustausch.'
      }
    },
    contact: {
      title: 'Kontakt aufnehmen',
      text: 'Interesse an Zusammenarbeit oder haben Sie ein Projekt im Kopf? Nehmen Sie gerne Kontakt auf!'
    }
  }
}

// 当前语言
let currentLang = 'en'

// 切换语言
function changeLanguage(lang) {
  currentLang = lang
  document.documentElement.lang = lang

  // 更新所有带 data-i18n 属性的元素
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n')
    const keys = key.split('.')
    let value = translations[lang]

    for (const k of keys) {
      value = value[k]
    }

    if (value) {
      el.innerHTML = value
    }
  })

  // 更新所有带 data-i18n-list 属性的列表
  document.querySelectorAll('[data-i18n-list]').forEach(ul => {
    const key = ul.getAttribute('data-i18n-list')
    const keys = key.split('.')
    let items = translations[lang]

    for (const k of keys) {
      items = items[k]
    }

    if (Array.isArray(items)) {
      ul.innerHTML = items.map(item => `<li>${item}</li>`).join('')
    }
  })

  // 更新语言按钮状态
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang)
  })

  // 重新触发打字机效果
  const typingElement = document.querySelector('.typing-text')
  if (typingElement) {
    const text = typingElement.textContent
    typingElement.textContent = ''
    let charIndex = 0
    function typeWriter() {
      if (charIndex < text.length) {
        typingElement.textContent += text.charAt(charIndex)
        charIndex++
        setTimeout(typeWriter, 100)
      }
    }
    setTimeout(typeWriter, 300)
  }
}

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
  anchor.addEventListener('click', function (e) {
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
if (typingText) {
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
}

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
const cards = document.querySelectorAll('.skill-card, .project-card, .stat-item')

cards.forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-10px) scale(1.02)'
  })

  card.addEventListener('mouseleave', function () {
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

  // 语言切换器事件
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      changeLanguage(btn.dataset.lang)
    })
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
