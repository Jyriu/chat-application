import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-venter justify-center min-w-96 mx-auto'>
        <div className='w-full p-4 bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Se connecter
                <span className='text-blue-500'> talkz</span>
            </h1>

            <form>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Nom d'utilisateur</span>
                    </label>
                    <input type='text' placeholder="Nom d'utilisateur" className='w-full input input-bordered h-10' />
                </div>

                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Mot de passe</span>
                    </label>
                    <input type='password' placeholder="Mot de passe" className='w-full input input-bordered h-10' />
                </div>

                <a href='#' className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block'>
                    {"Vous"} n'avez pas de compte ?
                </a>

                <div>
                    <button className='btn btn-block btn-sm mt-2'>Se connecter</button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default Login

// STARTER CODE FOR THIS FILE
// const Login = () => {
//     return (
//       <div className='flex flex-col items-venter justify-center min-w-96 mx-auto'>
//           <div className='w-full p-4 bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100'>
//               <h1 className='text-3xl font-semibold text-center text-gray-300'>
//               Se connecter
//                   <span className='text-blue-500'> talkz</span>
//               </h1>
  
//               <form>
//                   <div>
//                       <label className='label p-2'>
//                           <span className='text-base label-text'>Nom d'utilisateur</span>
//                       </label>
//                       <input type='text' placeholder="Nom d'utilisateur" className='w-full input input-bordered h-10' />
//                   </div>
  
//                   <div>
//                       <label className='label'>
//                           <span className='text-base label-text'>Mot de passe</span>
//                       </label>
//                       <input type='password' placeholder="Mot de passe" className='w-full input input-bordered h-10' />
//                   </div>
  
//                   <a href='#' className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block'>
//                       {"Vous"} n'avez pas de compte ?
//                   </a>
  
//                   <div>
//                       <button className='btn btn-block btn-sm mt-2'>Se connecter</button>
//                   </div>
//               </form>
//           </div>
        
//       </div>
//     )
//   }
  
//   export default Login