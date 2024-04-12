function Home() {
  return (
    <>
      <div className="grid grid-rows-home h-screen max-h-screen overflow-hidden">
        <div className="flex justify-between bg-[#161616] pb-3">
          <h1 className="font-anton text-4xl mt-7 ml-10 text-white">AGORA</h1>
          <div className="w-1/2 h-3/5 rounded-sm border-gray-500 border-2 mt-7">
            <input className="w-10/12 h-1/2 text-lg min-h-full border-0 border-r-2 border-black rounded-sm p-5 focus:outline-none"></input>
            <button className="w-2/12 text-xl align text-white">Search</button>
          </div>
          <h1 className="font-anton text-4xl h-1/2 mt-7 mr-10 text-white">
            Account
          </h1>
        </div>
        <div className="bg-[#161616] grid grid-cols-home-content rounded-sm">
          <div className=""></div>
          <div className="border-gray-500 border-t-2 border-r-2 border-l-2"></div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
}

export default Home;
