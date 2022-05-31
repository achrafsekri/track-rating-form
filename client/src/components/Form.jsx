import Personal from "./Personal";
import { React,useContext } from "react";
import {Survey} from "../context/survey";
import { genres } from "../data/genres";
import { GenreSection } from "./GenreSection";
export const Form = () => {
    const {info,setinfo}=useContext(Survey)

    console.log(genres)
  return (
    <div
      name="container"
      className="h-screen w-screen text-txt flex justify-center p-10"
    >
      <form className="w-3/5 h-full bg-pwgreen rounded-lg p-6 overflow-auto	scroll-smooth scrollbar ">
        <h1 className="block  tracking-wide  text-2xl font-bold mb-5">Audio Survey</h1>
        <p className=" text-l italic mb-10">
          Thank you for participating in this servey, you will rate the tracks by dragging them from favorite to less favorite
        </p>
        <Personal/>
        {genres.map(genre=><GenreSection key={genre.title} title={genre.title} tracks={genre.tracks}/>)}
      
        <input type="submit" className="bg-transparent hover:bg-button text-txt font-semibold hover:text-white py-2 px-4 border border-txt hover:border-transparent rounded hover:cursor-pointer" />
      </form>
    </div>
  );
};
