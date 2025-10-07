import { useMemo } from 'react'
import LiquidEther from './components/LiquidEther'
import './App.css'

function App() {
  const heroStats = useMemo(
    () => [
      { label: '前端经验', value: '4 年+' },
      { label: '上线项目', value: '12 个' },
      { label: '满意度', value: '100%' }
    ],
    []
  )

  const etherColors = useMemo(() => ['#5227FF', '#FF9FFC', '#B19EEF'], [])
  const navLabels = useMemo(() => ['关于我', '亮点', '联系'], [])

  return (
    <div className="app">
      <header className="hero" id="top">
        <div className="hero__background">
          <LiquidEther
            colors={etherColors}
            mouseForce={20}
            cursorSize={120}
            resolution={0.55}
            autoDemo
            autoSpeed={0.4}
            autoIntensity={2.4}
            autoResumeDelay={2800}
          />
          <div className="hero__gradient" aria-hidden="true" />
        </div>
        <nav className="hero__nav">
          <div className="hero__logo">Song Aug</div>
          <div className="hero__nav-links">
            {navLabels.map((label) => (
              <button key={label} type="button">
                {label}
              </button>
            ))}
          </div>
          <button className="hero__cta" type="button">
            联系我
          </button>
        </nav>
        <div className="hero__content">
          <p className="hero__eyebrow">前端开发者 · 体验创造者</p>
          <h1>你好，我是 Song Aug</h1>
          <p className="hero__subtitle">
            专注打造具有温度的数字体验，将复杂的业务需求转化为顺滑流畅的界面互动，助力品牌在网络世界脱颖而出。
          </p>
          <div className="hero__buttons">
            <button className="button button--primary" type="button">
              查看亮点
            </button>
            <button className="button button--ghost" type="button">
              了解更多
            </button>
          </div>
          <dl className="hero__stats">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>
    </div>
  )
}

export default App
