import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={'label gap-2 cursor-pointer'}>
                <span className='label-text'>Homme</span>
                <input type='checkbox' className='checkbox border-slate-900' />
            </label>
        </div>
        <div>
        <div className='form-control'>
            <label className={'label gap-2 cursor-pointer'}>
                <span className='label-text'>Femme</span>
                <input type='checkbox' className='checkbox border-slate-900' />
            </label>
        </div>
        </div>
    </div>
  )
}

export default GenderCheckbox

// STARTER CODE FOR THIS COMPONENT
// import React from 'react'

// const GenderCheckbox = () => {
//   return (
//     <div className='flex'>
//         <div className='form-control'>
//             <label className={'label gap-2 cursor-pointer'}>
//                 <span className='label-text'>Homme</span>
//                 <input type='checkbox' className='checkbox border-slate-900' />
//             </label>
//         </div>
//         <div>
//         <div className='form-control'>
//             <label className={'label gap-2 cursor-pointer'}>
//                 <span className='label-text'>Femme</span>
//                 <input type='checkbox' className='checkbox border-slate-900' />
//             </label>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default GenderCheckbox
