import { Download } from "lucide-react";



function Consent(){

    return( 
    <div className="px-1 sm:px-3.5 md:px-18 text-white">
    <div>
        <h2 className="italic text-3xl ">LEGAL & CONCENT</h2>
    </div>
    <br />
    <div className="flex justify-between px-4 mb-4">

        <p>Download and Read the Code of Conduct Carefully Before Agreeing into the checkbox</p>
        
        <a  download href="../assets/HackathonRules.docx"  className="border-none rounded-md text-black text-md bg-emerald-500 px-3.5 py-2 flex gap-1.5 items-center cursor-pointer hover:scale-110 transition">
            <Download size={16} />
             
            <span>Download</span>
           </a>
    </div>
    <div className="p-6 bg-[#8e8d8d65] rounded-4xl">
        <div className="">
            <input id="c1" type="checkbox" />
            <label htmlFor="c1">I Agree To The Code Of Conduct.</label>
            
            
        </div>
        <div>
            <input type="checkbox" name="" id="c2" />
            <label htmlFor="c2">I Concent The Use Of My Photoes/Videos For Promotional Purposes</label>

        </div>

        

    </div>
    </div>
    )

}


export default Consent;