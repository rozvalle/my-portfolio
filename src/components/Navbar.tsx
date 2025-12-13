import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold">Elmo V.</h1>
      <ul className="flex items-center space-x-6">
        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
        <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
        <li><Link to="/projects" className="hover:text-gray-300">Projects</Link></li>
        <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
        <li className="flex space-x-4">
          <a href="https://github.com" target="_blank" className="hover:text-gray-300"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-gray-300"><FaLinkedin /></a>
        </li>
      </ul>
    </nav>
  );
}
