import React, { createRef, useRef } from "react";
import { render } from "react-dom";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";
import goal1 from "../../assets/Goal-1.png";
import goal2 from "../../assets/Goal-2.png";
import save3 from "../../assets/Save-3.png";
import save4 from "../../assets/Save-4.png";
import save5 from "../../assets/Save-5.png";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import UndoIcon from "@material-ui/icons/Undo";
import "./style.scss";

const URLImage = ({ image }) => {
  const [img] = useImage(image.src);
  return (
    <Image
      image={img}
      id={image.id}
      x={image.x}
      y={image.y}
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
    />
  );
};

const HockeyBoardSketch = () => {
  const dragUrl = React.useRef();
  const stageRef = React.useRef();
  const imageId = React.useRef();
  const [images, setImages] = React.useState([]);
  const [updatedCanvas, setUpdatedCanvas] = React.useState([]);
  const nrOfGoal1 = images.filter((images) => images.id === "goal-1");
  const nrOfGoal2 = images.filter((images) => images.id === "goal-2");
  const nrOfSave3 = images.filter((images) => images.id === "save-3");
  const nrOfSave4 = images.filter((images) => images.id === "save-4");
  const nrOfSave5 = images.filter((images) => images.id === "save-5");
  const goal1Grade = nrOfGoal1.length * 1;
  const goal2Grade = nrOfGoal2.length * 2;
  const save3Grade = nrOfSave3.length * 3;
  const save4Grade = nrOfSave4.length * 4;
  const save5Grade = nrOfSave5.length * 5;
  const totalGrade =
    goal1Grade + goal2Grade + save3Grade + save4Grade + save5Grade;
  const nrOfShots = images.length;
  const nrOfGoals = nrOfGoal1.length + nrOfGoal2.length;
  const nrOfSaves = nrOfShots - nrOfGoals;
  const finalGrade = totalGrade / nrOfShots;

  return (
    <>
      <div className="game-info-container">
        <div className="period">
          <p>Period 1</p>
        </div>
        <div className="game">
          <p>Kållered - Ulricehamn</p>
        </div>
        <div className="date"></div>
        <p>18/1 2021</p>
      </div>
      <div
        onDrop={(e) => {
          e.preventDefault();
          console.log(dragUrl.current.id);
          stageRef.current.setPointersPositions(e);
          setImages(
            images.concat([
              {
                ...stageRef.current.getPointerPosition(),
                id: imageId.current,
                src: dragUrl.current,
              },
            ])
          );
          console.log("innan undo", images);
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="hockeyBoard">
          <Stage width={571} height={610} ref={stageRef}>
            <Layer
              onDblClick={(e) => {
                console.log("halllåååå", e.target);
                images.splice(e.target.index, 1);
                const updatedCanvas = images.slice();
                setUpdatedCanvas(updatedCanvas);
              }}
              onDblTap={(e) => {
                images.splice(e.target.index, 1);
                const updatedCanvas = images.slice();
                setUpdatedCanvas(updatedCanvas);
              }}
              onMouseEnter={(e) => {
                const container = e.target.getStage().container();
                container.style.cursor = "pointer";
              }}
              onMouseLeave={(e) => {
                const container = e.target.getStage().container();
                container.style.cursor = "default";
              }}
            >
              {images.map((image) => {
                console.log("shots array:", images);
                console.log("saves + goals:", images.length);
                console.log("goals:", nrOfGoals);
                console.log(Number.parseInt(images.id));

                return <URLImage image={image} />;
              })}
            </Layer>
          </Stage>
          <div className="tool-container">
            <p className="tool-instructions">
              <TouchAppIcon /> Drag and drop shots onto the board • Double-click
              on shot to remove
            </p>
            <div className="draw-container">
              <div className="shot-container">
                <p>Goal 1</p>
                <img
                  alt="Goal-1"
                  id="goal-1"
                  src={goal1}
                  draggable="true"
                  onDragStart={(e) => {
                    dragUrl.current = e.target.src;
                    imageId.current = e.target.id;
                  }}
                />
              </div>
              <div className="shot-container">
                <p>Goal 2</p>
                <img
                  id="goal-2"
                  alt="Goal-2"
                  src={goal2}
                  draggable="true"
                  onDragStart={(e) => {
                    dragUrl.current = e.target.src;
                    imageId.current = e.target.id;
                  }}
                />
              </div>
              <div className="shot-container">
                <p>Save 3</p>
                <img
                  id="save-3"
                  alt="Save-3"
                  src={save3}
                  draggable="true"
                  onDragStart={(e) => {
                    dragUrl.current = e.target.src;
                    imageId.current = e.target.id;
                  }}
                />
              </div>
              <div className="shot-container">
                <p>Save 4</p>
                <img
                  id="save-4"
                  alt="Save-4"
                  src={save4}
                  draggable="true"
                  onDragStart={(e) => {
                    dragUrl.current = e.target.src;
                    imageId.current = e.target.id;
                  }}
                />
              </div>
              <div className="shot-container">
                <p>Save 5</p>
                <img
                  id="save-5"
                  alt="Save-5"
                  src={save5}
                  draggable="true"
                  onDragStart={(e) => {
                    dragUrl.current = e.target.src;
                    imageId.current = e.target.id;
                  }}
                />
              </div>
              <div className="undo-container">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    images.pop();
                    const updatedCanvas = images.slice();
                    setUpdatedCanvas(updatedCanvas);
                    console.log("images efter undo", images);
                    console.log("canvas efter undo", updatedCanvas);
                  }}
                >
                  Undo
                  <UndoIcon></UndoIcon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shot-presentation">
        <p>
          Saves/Shots = {nrOfSaves}/{nrOfShots}
        </p>
      </div>
      <div className="grade-presentation">
        <p>
          Grade =
          {nrOfSaves + nrOfShots !== 0 &&
            " " + (totalGrade / nrOfShots).toFixed(2) + " / "}
          {finalGrade < 3.8 && <p style={{ color: "#EB1313" }}>NOT GOOD</p>}
          {finalGrade >= 3.8 && finalGrade < 4.1 && (
            <p style={{ color: "#238138" }}>GOOD</p>
          )}
          {finalGrade >= 4.1 && <p style={{ color: "#EBE314" }}>EXCELLENT</p>}
        </p>
      </div>
    </>
  );
};

render(<HockeyBoardSketch />, document.getElementById("root"));

export default HockeyBoardSketch;
