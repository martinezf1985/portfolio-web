
import React from 'react'
import Link from 'next/link'

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 ">
      <video className="absolute z-0 w-full h-full object-cover  " autoPlay muted loop>
        <source src="/images/cover3.mp4" type="video/mp4"   />
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold  mb-8  text-white -900 animate-pulse">Fernando Martinez</h1>
        <Link href="/Portfolio">
          <button className="px-8 py-4 bg-gray-800 text-white rounded hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 animate-pulse">
            Open
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Landing





















// import React from 'react'
// import Link from 'next/link'


// const Landing = () => {
//   return (
//     <div>
//         <div>

//             <Link href={'/Portfolio' }>
//             <button>
//                 open...
//             </button>
//             </Link>



//         </div>
        
        
        
//         </div>
//   )
// }

// export default Landing