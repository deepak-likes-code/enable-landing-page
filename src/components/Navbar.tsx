import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="font-[Calligraffitti] text-lg font-bold">
        <Link href="/" className="p-2">
          Enable.ai
        </Link>
      </div>
      <div>
        <Link href="/story" className="p-2">
          Story
        </Link>
        <a
          href="https://twitter.com/Enable_AI"
          className="p-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faXTwitter} className="text-white" size="sm" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
