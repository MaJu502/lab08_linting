import React from "react";
import ReactDOM from "react-dom";
import "./styles/master.css";
import carritologo from "./imagepool/sprite_car_celebration.gif";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import carron from "./imagepool/sprite_car.gif";

const App = () => {

    const [maze, setMaze] = React.useState([[]])
    const [ancho, setAncho] = React.useState(4) /* estado inicial de 1 */
    const [largo, setLargo] = React.useState(4) /* estado inicial de 1 */

    /* ----------------------------------------------- movimiento de jugador ------------------------------------------------------ */

    const getCarLocation = (car) => {
        let lineaPlayer = 0
        let columnaPlayer = 0
        /* obtiene la ubicacion del jugador en formato de (columna, linea) */
        for (var i = 0, len = maze.length; i < len; i++) {
            /* guarda la linea en la que está el usuario */
            if (maze[i].includes(car)) { lineaPlayer = i }            
        }
        columnaPlayer = maze[lineaPlayer].indexOf(car)
        return [columnaPlayer, lineaPlayer]
        

    }
    

    const broombroomcarVerification = (position, x, y) => {
        const mz = JSON.stringify(maze)
        let track = JSON.parse(mz)
    
        const [componentex, componentey] = position
        const LaX = (componentex + x)
        const LaY = (componentey + y)
    
        if (track[LaY][LaX] === ' ') {
            track[componentey][componentex] = ' '
            track[LaY][LaX] = "p"

        } else if (track[LaY][LaX] === "g") {
            mensajeWin()
        }
        setMaze(track)
    }

    const mensajeWin = () => {
        alert("Has ganado.")
    }  
    
    /* ----------------------------------------------- generando mapa ------------------------------------------------------ */
    const generateMaze = async (w, h) => {
        const mazefromfetch = await fetch(`https://maze.juanelcaballo.club/?type=json&w=${w}&h=${h}`)
            .then((response) => {
                return response.json();
            })
            .then((responseInJSON) => {
                return responseInJSON;
            });
        return mazefromfetch;
    }

    const newMaze = async () => {
        const newLabyrinth = await generateMaze(ancho, largo)
        setMaze(newLabyrinth)
    }

    
    /* ----------------------------------------------- movimiento con teclas ------------------------------------------------------  */
    window.onkeydown = (event) => {
        const position = getCarLocation("p")
        console.log(position)
        if (event.key === "ArrowUp") {
            broombroomcarVerification(position, 0, -1) 
        } else if (event.key === "ArrowDown") {
            broombroomcarVerification(position, 0, 1)
        } else if (event.key === "ArrowLeft") {
            broombroomcarVerification(position, -1, 0)
        } else if (event.key === "ArrowRight") {
            broombroomcarVerification(position, 1, 0)
        }
    }

  return (
    <div className="main_window">
        <header>
            <h1 > 8Bit Driver Maze </h1>
            <img src={carritologo} alt="image with maze logo" />
            <div className="tt1">
                <h3> ancho </h3>
                <input onChange={event => setAncho(event.target.value)} type="number" id="ancho" min="1" max="6"></input>
            </div>
            <div className="tt2">
                <h3> alto </h3>
                <input onChange={event => setLargo(event.target.value)} type="number" id="alto" min="1" max="6"></input>
            </div>
            <div className="tt3">
                <button onClick={newMaze}>lets go!</button>
            </div>
        </header>
    <div className="elpepe">
        <div className="maze_container" css={css`
                display: grid;
                grid-template-columns: repeat(${(parseInt(ancho) * 3) + 1}, 30px);
                grid-template-rows: repeat(${(parseInt(largo) * 2) + 1}, 30px);
        `}>
            {maze.map((row, i) => (
                    row.map((character, j) => {
                        if ((character === "+") || (character === "|") || (character === "-")) {
                            return <div key={j} className="wallsito"></div>
                        } else if (character === "p") {
                            return <div key={j} className="player">
                                        <img src={carron} alt="player" />
                                    </div>
                        } else if (character === "g") {
                            return <div  key={j} className="meta"></div>
                        }
                        return <div  key={j} className="road"></div>
                    })
            ))}
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))