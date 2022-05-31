import { React,useContext } from 'react'
const Personal = () => {
  
  return (
    <div><div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        className="block uppercase tracking-wide  text-xs font-bold mb-2"
        htmlFor="name"
      >
        Name
      </label>
      <input
        className="appearance-none block w-full bg-gray-200  border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="name"
        type="text"
        placeholder="Achraf"
      />
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label
        className="block uppercase tracking-wide  text-xs font-bold mb-2"
        htmlFor="country"
      >
        Country
      </label>
      <input
        className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="country"
        type="text"
        placeholder="Tunisia"
      />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label
        className="block uppercase tracking-wide  text-xs font-bold mb-2"
        htmlFor="email"
      >
        E-mail
      </label>
      <input
        className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="email"
        type="text"
        placeholder="hey@something.bye"
      />
    </div>
  </div></div>
  )
}

export default Personal