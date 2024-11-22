import Image from "next/image";
import HelloWorld from './components/HelloWorld';
import Banner from './components/Banner'
import Navbar from './components/Navbar'

//Home Page
export default function Home() {
  return (
    <div className="">
      <Banner/>
      <Navbar/>

      {/*Hero */}
      <div className="bg-[#FFA6C4] ">
        <div className="flex mx-auto max-w-[1300px] h-[702px]">
          <div className="flex flex-col pt-[100px]">
            <h1 className="font-black text-5xl uppercase text-[#212529]">Run & conquer your limits</h1>
            <a href="" className="bg-[#D91E5D] w-[119px] h-[47px] flex items-center justify-center text-center font-bold uppercase rounded">
              Join Now
            </a>
          </div>
          <img src="/MainImage.png" alt="cart" className="w-auto h-auto" />
        </div>
      </div>

      {/*Body */}
      <div className="bg-[#F5F5F5]">

        <div className="mx-auto max-w-[1300px]">
          {/*Section 1*/}
          <div className="pt-[35px]">
            <h2 className="text-[#212529] text-4xl font-black">Vifit Virtual Fitness</h2>
            <span className="text-[#212529]">Ignite your passion for running with the Vifit Virtual Fitness Run 2024!Join the MOUNTAIN SERIES VIRTUAL Races from June 1 to December 31, 2024. This exciting event invites runners from the Philippines and around the world to take on a virtual running challenge.</span>
          </div>

          {/*Section 2 */}
          <div className="pt-[35px]">
            <div className="grid grid-cols-2 items-center">
              {/*Left part of Section 2 */}
              <div>
                <h2 className="text-[#212529] text-4xl font-black">Exclusive Mountain Series Medal</h2>
                <span className="text-[#212529]">
                  Choose to run distances of 75K, 125K, 250K, or 375K during the event period and accumulate your runs to earn the Exclusive Mountain Series Medal, T-shirts, and a Virtual Badge.
                </span>
              </div>

              {/*Right part of Section 2 */}
              <div className="flex justify-center">
                <div class="relative bg-gray-100 p-8">
                  
                  <div class="absolute top-[50px] left-[50px] w-[412px] h-[384px] bg-[#2372CA] rounded"></div>
                  
                  <div class="relative w-[412px] h-[384px] bg-white rounded p-4 z-10">
                    <img src="/medals/MountainSeriesMedals.png" alt="Mountain Series Medals" class="w-full h-full object-cover rounded" />
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/*Section 3 */}
          <div>
            <h2 className="text-[#212529] text-4xl font-black">Don’t Stop There!</h2>
            <span className="text-[#212529]">
              Continue your journey throughout the year to complete the entire 4 legs Mountain Series!  Join us in this thrilling adventure to collect all four puzzle medals and push your limits in the ultimate running challenge!
            </span>
          </div>
        </div>
        
      </div>

      <h1>This message came from Django</h1>
      <HelloWorld/>
    </div>
  );
}
