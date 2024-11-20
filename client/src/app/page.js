import Image from "next/image";
import HelloWorld from './components/HelloWorld';

export default function Home() {
  return (
    <div>
      <h1>This message came from Django</h1>
      <HelloWorld/>
    </div>
  );
}
