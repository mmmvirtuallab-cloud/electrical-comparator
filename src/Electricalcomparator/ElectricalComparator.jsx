import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
} from "react-icons/fa";
import "./ElectricalComparator.css";
import { useNavigate } from "react-router-dom";

const ElectricalComparator = () => {
  const navigate = useNavigate();
  // Refs
  const headRef = useRef(null);
  const tableRef = useRef(null);

  // State
  const [headY, setHeadY] = useState(0);
  const [workpiecePosition, setWorkpiecePosition] = useState({ x: 0, y: 0 });
  const [isHeadLocked, setIsHeadLocked] = useState(false); // For locking screw
  const [deviation, setDeviation] = useState(0);
  const [workpieceType, setWorkpieceType] = useState("flat1"); // 'flat1', 'flat2', 'flat3'

  const [readings, setReadings] = useState([]);

  // Wires State
  const [wirePaths, setWirePaths] = useState({
    path1: "M 292 145 C 350 145, 380 200, 450 275",
    path2: "M 552 275 L 580 275 C 590 275, 590 285, 590 295 L 590 325",
    path3: "M 200 160 C 160 160, 150 200, 150 250",
  });

  const procedureSteps = [
    "1. Set the standard workpiece to 50 mm.",
    "2. Select Workpiece 1",
    "3. Move the plunger using the ⬆️  ⬇️ buttons.",
    "4. Move Workpiece 1 using the ⬅️  ➡️ buttons and take 3 readings.",
    "5. Now select Workpiece 2",
    "6. Move the plunger using the ⬆️  ⬇️ buttons",
    "7. Move Workpiece 2 using the ⬅️  ➡️ buttons and take 3 readings",
    "8. If the readings exceed the specified limit, the workpiece is Rejected",
    "9. If the readings are within the limit, the workpiece is Accepted.",
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const readingsPerPage = 3;

  // Pagination logic
  const indexOfLastReading = currentPage * readingsPerPage;
  const indexOfFirstReading = indexOfLastReading - readingsPerPage;
  const currentReadings = readings.slice(
    indexOfFirstReading,
    indexOfLastReading
  );
  const totalPages = Math.ceil(readings.length / readingsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
  };
  const handleReset = () => {
    setDeviation(0); // Reset deviation display
  };

  const [currentStep, setCurrentStep] = useState(0);

  const workpieceLeftRef = useRef(null);
  const workpieceRightRef = useRef(null);
  const plungerUpRef = useRef(null);
  const plungerDownRef = useRef(null);
  const lockHeadRef = useRef(null);

  const notificationSequence = [
    {
      text: "left",
      ref: workpieceLeftRef,
    },
    {
      text: " right",
      ref: workpieceRightRef,
    },
    {
      text: " up",
      ref: plungerUpRef,
    },
    {
      text: "down",
      ref: plungerDownRef,
    },
    {
      text: "Lock the plunger head",
      ref: lockHeadRef,
    },
  ];

  const [currentNotification, setCurrentNotification] = useState(null);

  const triggerNotifications = () => {
    let index = 0;

    const showNext = () => {
      if (index < notificationSequence.length) {
        setCurrentNotification(notificationSequence[index]);
        index++;
        setTimeout(showNext, 3000); // 3s per notification
      } else {
        setCurrentNotification(null);
      }
    };

    showNext();
  };

  const workpieceVisualHeight = 40; // px

  useEffect(() => {
    triggerNotifications();
  }, []); // runs only once after mount

  useEffect(() => {
    const x = workpiecePosition.x; // current workpiece X
    let numericDiff = 0; // always a number

    if (workpieceType === "flat1") {
      numericDiff = 0.0;
    } else if (workpieceType === "flat2") {
      const positions = [-30, 0, 10, 30];
      const deviations = [0.121, 0.0, 0.311, 0.489];

      let nearestIndex = 0;
      let minDist = Math.abs(x - positions[0]);
      for (let i = 1; i < positions.length; i++) {
        const dist = Math.abs(x - positions[i]);
        if (dist < minDist) {
          nearestIndex = i;
          minDist = dist;
        }
      }
      numericDiff = deviations[nearestIndex];
      console.log(numericDiff);
    } else if (workpieceType === "flat3") {
      const positions = [-45, -20, 0, 20, 47];
      const deviations = [0.4, 0.521, 0.0, 0.55, 0.6];

      let nearestIndex = 0;
      let minDist = Math.abs(x - positions[0]);
      for (let i = 1; i < positions.length; i++) {
        const dist = Math.abs(x - positions[i]);
        if (dist < minDist) {
          nearestIndex = i;
          minDist = dist;
        }
      }
      numericDiff = deviations[nearestIndex];
    }

    // Format numericDiff safely
    const displayDiff = numericDiff;
    console.log("display", displayDiff);

    setDeviation(displayDiff);

    // Optional: update wires visually
    const path1_startY = 145 + headY;
    const path3_startY = 160 + headY;
    setWirePaths((prevPaths) => ({
      ...prevPaths,
      path1: `M 292 ${path1_startY} C 350 ${path1_startY}, 380 ${
        200 + headY * 0.5
      }, 450 275`,
      path3: `M 200 ${path3_startY} C 160 ${path3_startY}, 150 ${
        200 + headY * 0.5
      }, 150 250`,
    }));
  }, [headY, workpiecePosition, workpieceType]);

  const maxHeadY = 160 - workpieceVisualHeight - workpiecePosition.y;
  const headBounds = { top: -150, bottom: maxHeadY };

  const handleHeadDrag = (e, ui) => setHeadY((prev) => prev + ui.deltaY);
  const handleWorkpieceDrag = (e, data) =>
    setWorkpiecePosition({ x: data.x, y: data.y });

  const currentDeviationMM = deviation;
  const displayValue = currentDeviationMM.toFixed(3);

  // Move buttons
  const moveLeft = () => {
    setWorkpiecePosition((prev) => ({
      x: Math.max(prev.x - 10, -55),
    }));
  };

  const moveRight = () => {
    setWorkpiecePosition((prev) => ({
      x: Math.min(prev.x + 10, 55),
    }));
  };

  const moveUp = () => {
    setHeadY((prev) => Math.max(prev - 10, headBounds.top)); // move up by 10px
  };

  const moveDown = () => {
    setHeadY((prev) => Math.min(prev + 10, headBounds.bottom)); // move down by 10px
  };

  const workpieceStyle = {
    height: "40px",
    width: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    backgroundColor:
      workpieceType === "flat1"
        ? "#ccc" // Flat 1 color
        : workpieceType === "flat2"
        ? "#a5d6a7" // Flat 2 color (greenish)
        : "#90caf9", // Flat 3 color (bluish)
  };

  const handleAddReading = () => {
    const standardHeight = 50.0;
    const measuredHeight = (standardHeight - parseFloat(displayValue)).toFixed(
      3
    );
    const newReading = {
      id: Date.now(),
      standard: standardHeight.toFixed(3),
      measured: measuredHeight,
      deviation: parseFloat(displayValue).toFixed(3),
    };
    setReadings([newReading, ...readings]);
  };

  const handleClearAllReadings = () => setReadings([]);

  return (
    <div className="app-layout">
      {/* 1. Fixed Header */}
      <header className="title">
        <div>
          <h2>Electrical Comparator</h2>
          <button
            className="exit-btn"
            onClick={() => navigate("/")} // <--- Navigates to IntroPage inside HashRouter
          >
            Introduction
          </button>
        </div>
      </header>
      <div className="comparator-page">
        <div className="main-content-area">
          <div className="comparator-container">
            <div className="comparator-rig">
              <svg className="wires-svg" viewBox="0 0 800 650">
                <path
                  d={wirePaths.path1}
                  stroke="blue"
                  fill="transparent"
                  strokeWidth="3"
                />
                <path
                  d={wirePaths.path2}
                  stroke="red"
                  fill="transparent"
                  strokeWidth="3"
                />
                <path
                  d={wirePaths.path3}
                  stroke="green"
                  fill="transparent"
                  strokeWidth="3"
                />
              </svg>

              <div className="wp">
                <h5>workpiece Types</h5>
              </div>
              {/* Corner workpiece selector */}
              <div className="wp-selector">
                <div
                  className={`wp-icon wp-flat ${
                    workpieceType === "flat1" ? "active" : ""
                  }`}
                  onClick={() => setWorkpieceType("flat1")}
                >
                  STD WP
                </div>

                <div
                  className={`wp-icon wp-flat ${
                    workpieceType === "flat2" ? "active" : ""
                  }`}
                  onClick={() => setWorkpieceType("flat2")}
                >
                  WP2
                </div>

                <div
                  className={`wp-icon wp-flat ${
                    workpieceType === "flat3" ? "active" : ""
                  }`}
                  onClick={() => setWorkpieceType("flat3")}
                >
                  WP3
                </div>
              </div>

              <Draggable
                nodeRef={headRef}
                axis="y"
                onDrag={handleHeadDrag}
                position={{ x: 0, y: headY }}
                bounds={headBounds}
                disabled={isHeadLocked}
              >
                <div ref={headRef} className="measuring-head-assembly">
                  <div className="locking-screw">
                    <span>Locking Screw</span>
                  </div>
                  <div className="head-body">
                    <div className="casing">
                      <span>Casing</span>
                      <div className="coil coil-1">
                        <span>Coils</span>
                      </div>
                      <div className="coil coil-2"></div>
                      <div className="armature">
                        <span>Armature</span>
                      </div>
                    </div>
                    <div className="plunger">
                      <span>Plunger</span>
                    </div>
                  </div>
                </div>
              </Draggable>

              <div className="table">
                <span>Table</span>
              </div>

              <Draggable
                nodeRef={tableRef}
                axis="x"
                onDrag={handleWorkpieceDrag}
                position={{ x: workpiecePosition.x, y: 0 }}
                bounds={{ left: -55, right: 55 }}
                scale={0.5}
              >
                <div ref={tableRef} className="table-workpiece-assembly">
                  <div className="workpiece" style={workpieceStyle}>
                    <span>
                      {workpieceType === "flat1"
                        ? "STD WP"
                        : workpieceType === "flat2"
                        ? "WP 2"
                        : "WP 3"}
                    </span>
                  </div>
                </div>
              </Draggable>

              <div className="stand">
                <span>Stand</span>
              </div>
              <div className="base">
                <span>Base</span>
              </div>

              <div className="electronics">
                <div className="amplifier">
                  <span>Amplifier</span>
                </div>

                {/* DIGITAL READOUT */}
                <div className="digital-display">
                  <div className="digital-value">{displayValue}</div>
                  <div className="digital-unit">mm</div>
                </div>
              </div>

              <div className="button-gro">
                <div>workpiece Movement </div>
                <button
                  ref={workpieceLeftRef}
                  className="move-btn"
                  onClick={moveLeft}
                >
                  <FaArrowLeft />
                </button>
                <button
                  ref={workpieceRightRef}
                  className="move-btn"
                  onClick={moveRight}
                >
                  <FaArrowRight />
                </button>

                <div>Plunger Movement </div>

                <button
                  ref={plungerUpRef}
                  className="move-btn"
                  onClick={moveUp}
                >
                  <FaArrowUp />
                </button>
                <button
                  ref={plungerDownRef}
                  className="move-btn"
                  onClick={moveDown}
                >
                  <FaArrowDown />
                </button>

                <button onClick={handleReset} className="reset-button">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
        {currentNotification && currentNotification.ref.current && (
          <div
            className="tooltip-notification"
            style={{
              position: "fixed",
              top:
                currentNotification.ref.current.getBoundingClientRect().top -
                40,
              left: currentNotification.ref.current.getBoundingClientRect()
                .left,
            }}
          >
            {currentNotification.text}
          </div>
        )}

        <div className="side-bar">
          <div className="procedure-panel">
            <h3>Procedure Steps</h3>
            <div className="procedure-content">
              <p>{procedureSteps[currentStep]}</p>
            </div>
            <div className="procedure-buttons">
              <button
                onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
                disabled={currentStep === 0}
              >
                Prev
              </button>
              <button
                onClick={() =>
                  setCurrentStep((prev) =>
                    Math.min(prev + 1, procedureSteps.length - 1)
                  )
                }
                disabled={currentStep === procedureSteps.length - 1}
              >
                Next
              </button>
            </div>
            <div className="procedure-progress">
              Step {currentStep + 1} of {procedureSteps.length}
            </div>
          </div>

          <div className="readings-panel">
            <h3>Measurement Controls</h3>

            <div className="button-group">
              <button onClick={handleAddReading} className="store-button">
                Store Reading
              </button>
              <button
                onClick={handleClearAllReadings}
                className="clear-all-button"
              >
                Clear All
              </button>
            </div>
            {readings.length > 0 ? (
              <>
                <table>
                  <thead>
                    <tr>
                      <th>Standard (mm)</th>
                      <th>Measured (mm)</th>
                      <th>Deviation (mm)</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentReadings.map((r) => (
                      <tr key={r.id}>
                        <td>{r.standard}</td>
                        <td>{r.measured}</td>
                        <td
                          className={
                            parseFloat(r.deviation) > 0
                              ? "positive"
                              : parseFloat(r.deviation) < 0
                              ? "negative"
                              : ""
                          }
                        >
                          {r.deviation}
                        </td>
                        <td>
                          {parseFloat(r.deviation) > 0.5 ? (
                            <button className="status-button rejected">
                              Rejected
                            </button>
                          ) : (
                            <button className="status-button accepted">
                              Accepted
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="pagination">
                  <button onClick={handlePrev} disabled={currentPage === 1}>
                    Prev
                  </button>

                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => handlePageClick(index + 1)}
                      className={`page-btn ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              </>
            ) : (
              <p className="no-readings">No readings stored.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricalComparator;
