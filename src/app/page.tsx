import Link from 'next/link'
import '@/styles/app.css'

export default function Home() {
  return (
    <ul>
      <li className='red'><Link href={'facebook'}> facebook </Link></li>
      <li><Link href={'linkedin'}> Linkedin </Link></li>
      <li><Link href={'zalo'}> Zalo </Link></li>
    </ul>
  )
}
