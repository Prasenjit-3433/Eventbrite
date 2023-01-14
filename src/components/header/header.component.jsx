import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return(
        <header>
            <div>
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
                <p id="header-text">Discover Great Events or Create Your Own & Sell Tickets</p>
            </div>
      </header>
    );
}

export default Header;