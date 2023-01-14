import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return(
        <header>
            <div className="top-nav">
                <Image src="/images/logo.png" width={50} height={50} alt="logo"/>
                <nav>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/events">Events</Link></li>
                        <li><Link href="/about">About</Link></li>
                    </ul>
                </nav>
            </div>
            <h1 id="header-text">Discover Great Events or Create Your Own & Sell Tickets</h1>
      </header>
    );
}

export default Header;