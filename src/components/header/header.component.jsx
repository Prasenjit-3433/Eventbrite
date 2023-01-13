import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return(
        <header>
            <nav>
            <Image src="" alt="" />

            <Link href="/">Home</Link>
            <Link href="/events">Events</Link>
            <Link href="/about">About</Link>
            </nav>
      </header>
    );
}

export default Header;