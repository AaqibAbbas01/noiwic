export const TitleLogo = ({ title, caption, className }) => {
  return (
    <span className={`${className || ''} title-logo`}>
      {caption && <span className="logo-caption">{caption}</span>}
      <img src="/images/noiwic-tech-logo.png" alt={`${title || 'NOIWIC'} Tech`} className="logo-mark" />
    </span>
  )
}

export const TitleSm = ({ title }) => {
  return <h1 className='titleSm'>{title}</h1>
}
export const Title = ({ title, className }) => {
  return <h1 className={`${className || ''} title`}>{title}</h1>
}
