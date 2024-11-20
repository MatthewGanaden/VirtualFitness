import Image from "next/image";
import HelloWorld from './components/HelloWorld';
import Banner from './components/Banner'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div>
      <Banner/>
      <Navbar/>
      <h1>This message came from Django</h1>
      <HelloWorld/>
    </div>
  );
}
