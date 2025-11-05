import './WavyText.css'

const WavyText = ({ children, className = '' }) => {
  return (
    <div className={`wavy-text ${className}`}>
      {children}
    </div>
  )
}

export default WavyText
