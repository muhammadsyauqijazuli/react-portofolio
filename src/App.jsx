import DataImage from "./data";
import { listTools, listProyek } from "./data";


function App() {

  return (
    <>
      <div className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
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
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto" loading="lazy" />
      </div>


      {/* tentang */}
      <div className="tentang mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy"/>
          <p className="text-base/loose mb-10">
            I am currently a part of the Bangkit Academy cohort, where I am focusing on Cloud Computing
            . This program has sharpened my skills and prepared me to thrive, aiming to be a skilled and well-rounded
            expert in the tech industry.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block
            hidden" loading="lazy"/>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  45<span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  4<span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tools mt-32 ">
          <h1 className="text-4xl/snug font-bold mb-4">Tools yang di pakai</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50">Berikut ini beberapa tools yang biasa yang pakai untuk pembuatan website ataupun Design</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map(tool => (
              <div className=" flex items-center gap-2 p-3 border border-zinc-600 group rounded-md
            hover:bg-zinc-800" key={tool.id}>
                <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy" />
                <div>
                  <h4 className="font-bold">
                    {tool.nama}
                  </h4>
                  <p className="opacity-50">
                    {tool.ket}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* tentang */}
      
      {/* Proyek */}
      <div className="proyek mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-2">
          Proyek
        </h1>
        <p className="text-base/loose text-center opacity-50">
            Berikut ini beberapa proyek yang sudah saya buat
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listProyek.map(proyek => (
              <div key={proyek.id} className="p4 bg-zinc-800 rounded-md">
                <img src={proyek.gambar} alt="Proyek Image" loading="lazy"/>
                <div>
                  <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                  <p className="text-base/loose mb-4">{proyek.desk}</p>
                  <div className="flex flex-wrap gap-2">
                    {proyek.tools.map((tool, index) => (
                      <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <a href="#" className="bg-violet-700 p-3 rounded-lg block border
                    border-zinc-600 hover:bg-violet-600">Lihat Website</a>
                  </div>
                </div>
              </div>
            ))}
        </div>  
      </div>
      {/* Proyek */}

      {/* Kontak */}
      <div className="kontak mt-32 p-10">
        <h1 className="text-4xl mb-2 font-bold text-center">Kontak</h1>
        <p className=" text-base/loose text-center mb-10 opacity-50">Mari Terhubung dengan saya</p>
        <form action="https://formsubmit.co/syauqialjm93@gmail.com" method="POST" className="bg-zinc-800 p-10 w-fit mx-auto rounded-md" 
        autoComplete="off">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukkan Nama..." className="border
              border-zinc-500 p-2 rounded-md" required/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="Email" name="email" placeholder="Masukkan Email..." className="border
              border-zinc-500 p-2 rounded-md" required/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan..." className="border
              border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button className="bg-violet-700 p-3 rounded-lg w-full border
              cursor-pointer border-zinc-600 hover:bg-violet-600" type="submit">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
      {/* Kontak */}

    </>

  )
}

export default App
