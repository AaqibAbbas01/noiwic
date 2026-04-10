import Link from "next/link"
import { TitleSm } from "./Title"

export const Card = ({ data, caption, show, path }) => {
  return (
    <div className='card'>
      <div className='card-img'>
        <img src={data.cover} alt={data.title} />
      </div>
      <div className='card-details'>
        <Link href={`${data.id}`} className='title-link'>
          <TitleSm title={data.title} />
        </Link>
        {caption && (
          <Link href={`${data.id}`}>
            {caption} <span className='link-icon'>&rarr;</span>
          </Link>
        )}
        <div className='flex'>
          <span>{data.category || data.catgeory}</span> {data.date && <span> / {data.date}</span>}
        </div>

        {show && (
          <ul>
            {data.desc.map((text, i) => (
              <li key={i}> - {text.text}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
