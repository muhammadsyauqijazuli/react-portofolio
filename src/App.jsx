import DataImage from "./data";
function App() {

  return (
    <>
      <div className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
            <q>kode yang indah, lahir dari ketekunan. 😁</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Syauqi Jazuli</h1>
          <p className="text-base/loose mb-6 opacity-50">
            I am a student at Universitas Malikussaleh in Lhokseumawe, passionate about Information
            Technology. My expertise spans cloud computing and web development, reflecting my dedication 
            to development and creativity. My diverse skills are my strength in creating comprehensive 
            and high-quality technology solutions.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a href="#" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">
              Lihat Proyek 
              <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto" />
      </div>
    </>
  )
}

export default App
