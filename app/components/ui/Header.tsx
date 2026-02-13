export default function Header() {
    return (
        <div className="bg-blue-800 py-2 flex items-center justify-around  text-white">
            <div className="flex text-sm items-center gap-4">
              <div className="bg-white px-2 py-1.5 rounded-md">
            <h1 className="text-blue-600">ERP</h1>
              </div>
            <div className="flex flex-col justify-center">
                <span>EDocument Cockpit</span>
                <span className="text-xs">Nigeria FIRS Compliance</span>
            </div>
            <div className="text-green-600 bg-green-950 px-0.5 rounded-full">
              <span className="text-xs">FIRS Certified</span>
            </div>
            </div>

            <div className="flex gap-2">
                <p>NG01-Nigeria</p>
                <p>Exit</p>
            </div>


        </div>
    )
}


