import './GradientText.css'

export default function GradientText({
  children,
  className = '',
  colors = ['#6366f1', '#8b5cf6', '#d946ef', '#8b5cf6', '#6366f1'],
  animationSpeed = 8,
  animationDelay = 0,
  showBorder = false,
  ...rest
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`,
    animationDelay: `${animationDelay}s`,
  }

  return (
    <div
      className={`animated-gradient-text${showBorder ? '' : ' animated-gradient-text--flat'} ${className}`.trim()}
      data-border={showBorder}
      {...rest}
    >
      {showBorder ? <div className="gradient-overlay" style={gradientStyle} /> : null}
      <div className="text-content" style={gradientStyle}>
        {children}
      </div>
    </div>
  )
}
