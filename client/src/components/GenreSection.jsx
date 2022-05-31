import React from "react";
import { Audio } from "./Audio";
import "../styles/audio.css";
export const GenreSection = (props) => {
  return (
    <fieldset className="bg-wkgreen min-w-full mb-10 p-5 rounded-lg">
      <h1 className="text-txt block uppercase tracking-wide  text-l font-bold mb-2">
        {props.title}
      </h1>
      <div id="drag-container" className="w-full  gap-5 mb-4">
        <p className="text-l italic mb-5">
          sort the tracks from most favorite to less favorite by dragging them{" "}
        </p>
        <ul>
          {props.tracks.map((track) => (
            <li
              className="mb-4 cursor-move w-1/2 bg-gray-200 rounded-lg flex justify-between"
              key={track.id}
            >
              <Audio track={track.url} />
              <div className="flex items-center justify-center w-16">
                <span class="material-symbols-outlined text-pwgreen text-3xl ">
                  drag_handle
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <textarea
        id="message"
        rows="4"
        className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        placeholder="Leave a comment..."
      ></textarea>
    </fieldset>
  );
};
