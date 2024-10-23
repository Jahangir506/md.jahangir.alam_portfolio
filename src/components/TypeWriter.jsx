"use client"

import { Cursor, useTypewriter } from "react-simple-typewriter";

const TypeWriter = () => {

    const [typewriter] = useTypewriter({
        words: ["Front-end Developer.", "Web Developer."],
        loop: 0,
        typeSpeed: 100,
        deleteSpeed: 70,
      });


    return(
        <>
            {typewriter}
            <Cursor cursorColor="#22c55e"></Cursor>
        </>
    )}
export default TypeWriter;