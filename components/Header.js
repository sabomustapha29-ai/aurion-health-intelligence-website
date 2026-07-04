import Link from 'next/link';
import { navItems } from '@/data/site';

export default function Header(){
  return <header className="nav"><div className="container nav-inner">
    <Link href="/" className="brand"><img src="/brand/aurion-logo-header.png" alt="Aurion Health Intelligence Limited" /></Link>
    <nav className="links">{navItems.map(item=><Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
    <Link className="nav-cta" href="/contact">Start a Conversation</Link>
  </div></header>
}
