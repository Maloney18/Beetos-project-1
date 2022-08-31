import { useState } from 'react';
import './Upload.css'

const Upload = () => {
    // --------------upload for each file-------
    const [eachFile, setEachFile] = useState({
        chooseFile: '' ,
        category:'',
        nameOfFile: ''
    })
    console.log(eachFile)


    function handleChangeInUpload(e) {
        // console.log(e.target.type)
        const {value, name,type} = e.target

        if (type === "file") {
            setEachFile (prevFiles => (
                {...prevFiles, nameOfFile: e.target.files[0].name}
            ))
        }
        
        setEachFile(prevFiles => (
            {...prevFiles,
                [name]:value 
            }
        ))
    }

    return(
        <div className="uploadPage">
            <h2>UPLOAD DOCUMENT</h2>
            <form action="" className='upload'>
                <ul>
                    <li>
                        <label htmlFor="file-select">Select a file</label>
                        <input 
                            type="file" 
                            name="chooseFile" 
                            id="file-select"
                            onChange={(e) => handleChangeInUpload(e)}
                            value={eachFile.chooseFile}
                        />

                    </li>

                    <li>
                        <label htmlFor="rename-file">Rename file</label>
                        <input 
                            type="text" 
                            name="nameOfFile" 
                            id="rename-file" 
                            placeholder='Optional'
                            onChange={(e) => handleChangeInUpload(e)}
                            value={eachFile.nameOfFile}
                        />
                    </li>

                    <li>
                        <label htmlFor="category">Category</label>
                        <select 
                            name="category" 
                            id="category" 
                            size={1}
                            value={eachFile.category}
                            onChange={(e) => handleChangeInUpload(e)} 
                        >
                            <option value="">Select</option>
                            <option value="Private">Private</option>
                            <option value="Public">Public</option>
                        </select>
                    </li>
                </ul>
                
                <div className="button" >
                    <button>Add</button>
                </div>
            </form>
        </div>
    )
}

export default Upload;