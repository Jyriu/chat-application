import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-4 bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
            S'inscrire
            <span className='text-blue-500'> talkz</span>
        </h1>

        <form>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Nom et prénom</span>
                </label>
                <input type='text' placeholder="LeKabyleQuiDit JaiFaitDuDroitConstitutionnel" className='w-full input input-bordered h-10' />
            </div>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Nom d'utilisateur</span>
                </label>
                <input type='text' placeholder="XxRamboPLxX" className='w-full input input-bordered h-10' />
            </div>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Mot de passe</span>
                </label>
                <input type='text' placeholder="Entrer votre mot de passe" className='w-full input input-bordered h-10' />
            </div>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Confirmer mot de passe</span>
                </label>
                <input type='text' placeholder="Confirmer votre mot de passe" className='w-full input input-bordered h-10' />
            </div>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Email</span>
                </label>
                <input type='text' placeholder="donnetesinfoschakal@rat.com" className='w-full input input-bordered h-10' />
            </div>


            <GenderCheckbox />

            <a href='#' className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block'>
                Vous avez un compte ?
            </a>

            <div>
                <button className='btn btn-block btn-sm mt-2'>S'inscrire</button>
            </div>

        </form>
      </div>
    </div>
  )
}

export default SignUp


// STARTER CODE FOR THIS SIGNUP COMPONENT
// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-4 bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//             S'inscrire
//             <span className='text-blue-500'> talkz</span>
//         </h1>

//         <form>
//             <div>
//                 <label className='label p-2'>
//                     <span className='text-base label-text'>Nom</span>
//                 </label>
//                 <input type='text' placeholder="LeKabyleQuiDit" className='w-full input input-bordered h-10' />
//             </div>
//             <div>
//                 <label className='label p-2'>
//                     <span className='text-base label-text'>Prénom</span>
//                 </label>
//                 <input type='text' placeholder="JaiFaitDuDroitConstitutionnel" className='w-full input input-bordered h-10' />
//             </div>
//             <div>
//                 <label className='label p-2'>
//                     <span className='text-base label-text'>Nom d'utilisateur</span>
//                 </label>
//                 <input type='text' placeholder="XxRamboPLxX" className='w-full input input-bordered h-10' />
//             </div>
//             <div>
//                 <label className='label p-2'>
//                     <span className='text-base label-text'>Mot de passe</span>
//                 </label>
//                 <input type='text' placeholder="Entrer votre mot de passe" className='w-full input input-bordered h-10' />
//             </div>
//             <div>
//                 <label className='label p-2'>
//                     <span className='text-base label-text'>Confirmer mot de passe</span>
//                 </label>
//                 <input type='text' placeholder="Confirmer votre mot de passe" className='w-full input input-bordered h-10' />
//             </div>
//             <div>
//                 <label className='label p-2'>
//                     <span className='text-base label-text'>Email</span>
//                 </label>
//                 <input type='text' placeholder="donnetesinfoschakal@rat.com" className='w-full input input-bordered h-10' />
//             </div>


//             <GenderCheckbox />

//             <a href='#' className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block'>
//                 Vous avez un compte ?
//             </a>

//             <div>
//                 <button className='btn btn-block btn-sm mt-2'>S'inscrire</button>
//             </div>

//         </form>
//       </div>
//     </div>
//   )
// }

// export default SignUp
