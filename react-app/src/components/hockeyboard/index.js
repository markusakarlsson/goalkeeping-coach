import React, { createRef, useRef } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';
import goal1 from '../../assets/Goal-1.png';
import goal2 from '../../assets/Goal-2.png';
import save3 from '../../assets/Save-3.png';
import save4 from '../../assets/Save-4.png';
import save5 from '../../assets/Save-5.png';
import "./style.scss";

const URLImage = ({ image, i }) => {
  const [img] = useImage(image.src);

  return (
    <Image
      image={img}
      x={image.x}
      y={image.y}
      offsetX={img ? img.width / 3 : 0}
      offsetY={img ? img.height / 3 : 0}
    />
  );
};

const HockeyBoardSketch = () => {
  const dragUrl = React.useRef();
  const stageRef = React.useRef();
  const [images, setImages] = React.useState([]);
  return (
    <>
    <div className='shot-container'>
      <div className='test'>
      <p>Goal - 1: </p>
      <img
        alt="Goal-1"
        src={goal1}
        draggable="true"
        onDragStart={(e) => {
          dragUrl.current = e.target.src;
        }}
      />
      </div>
      <div className='test'>
      <p>Goal - 2: </p>
      <img
        alt="Goal-2"
        src={goal2}
        draggable="true"
        onDragStart={(e) => {
          dragUrl.current = e.target.src;
        }}
      />
      </div>
      <div className='test'>
      <p>Save - 3: </p>
      <img
        alt="Save-3"
        src={save3}
        draggable="true"
        onDragStart={(e) => {
          dragUrl.current = e.target.src;
        }}
      />
      </div>
      <div className='test'>
      <p>Save - 4: </p>
      <img
        alt="Save-4"
        src={save4}
        draggable="true"
        onDragStart={(e) => {
          dragUrl.current = e.target.src;
        }}
      />
      </div>
      <div className='test'>
      <p>Save - 5: </p>
      <img
        key='save-5'
        id='save-5'
        alt="Save-5"
        src={save5}
        draggable="true"
        onDragStart={(e) => {
          dragUrl.current = e.target.src;
        }}
      />
      </div>
    </div>
      <div
        onDrop={(e) => {
          e.preventDefault();
          console.log(images.id)
          stageRef.current.setPointersPositions(e);
          setImages(
            images.concat([
              {
                ...stageRef.current.getPointerPosition(),
                id: dragUrl.current,
                src: dragUrl.current,
              },
            ])
            );
            console.log(images)
          }}
          onDragOver={(e) => 
            e.preventDefault()
          }
          >
        <div className='hockeyBoard'>

        <Stage
          width={571}
          height={726}
          ref={stageRef}
          >
          <Layer>
            {images.map((image) => {
              return <URLImage image={image} />;
            })}
          </Layer>
        </Stage>
            </div>
      </div>
    </>
  );
};

render(<HockeyBoardSketch />, document.getElementById('root'));

export default HockeyBoardSketch