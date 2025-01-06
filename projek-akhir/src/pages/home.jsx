// Baris ini mengimpor komponen Navbar dan Cardmovie dari direktori components/navbar //
import Navbar from "../components/navbar"
import Cardmovie from"../components/Cardmovie"

// Baris ini mendefinisikan sebuah fungsi bernama Home //
export default function Home() {
    return(
//  komponen Navbar atau cardmovie yang diimpor sebelumnya dipanggil //
        <div>
            <Navbar/>
            <Cardmovie/>
        </div>
        )
    
}