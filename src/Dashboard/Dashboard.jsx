import './Dashboard.css';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Docs = () => {
    return (
        <>
            <div className="generalCont">
                <div className="funcs">
                    <div className="delete">
                        <FontAwesomeIcon icon={['fas', 'trash-can']} />
                        <span>Delete</span>
                    </div>
                    <div className="edit">
                        <FontAwesomeIcon icon={['fas', 'pen']} />
                        <span>Edit</span>
                    </div>
                   <div className="download">
                        <FontAwesomeIcon icon={['fas', 'file-arrow-down']} />
                        <span>Download</span>
                   </div>
                </div>
                <p id="fileName">FileName</p> 
            </div>
        </>
         
    )
}

export default Docs;