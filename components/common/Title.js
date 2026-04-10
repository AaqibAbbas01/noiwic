export const TitleLogo = ({ title, caption, className }) => {
  const noiwic = title || 'NOIWIC'
  const noi = noiwic.slice(0, 3)
  const wic = noiwic.slice(3)
  return (
    <h1 className={`${className || ''} title-logo`}>
      {caption && <span>{caption}</span>}
      {noi}<span className="gold">{wic}</span>
    </h1>
  )
}

export const TitleSm = ({ title }) => {
  return <h1 className='titleSm'>{title}</h1>
}
export const Title = ({ title, className }) => {
  return <h1 className={`${className || ''} title`}>{title}</h1>
}
