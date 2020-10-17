import React, { useState } from 'react'
import Dropzone from 'react-dropzone';
import Axios from 'axios';

function ProfilePhotoUpload(props) {

    const [ProfilePhoto, setProfilePhoto] = useState([])

    const onDrop = (files) => {

        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        formData.append("file", files[0])

        //save the Image we chose inside the Node Server 
        Axios.post('http://localhost:5000/admin-dashboard/uploadProfilePhoto', formData, config)
            .then(response => {
                if (response.data.success) {

                    setProfilePhoto([...ProfilePhoto, response.data.profile_photo])
                    props.refreshFunction([...ProfilePhoto, response.data.profile_photo])

                } else {
                    alert('Failed to save the Profile Photo in Server')
                }
            })
    }

    const onDelete = (profile_photo) => {
        const currentIndex = ProfilePhoto.indexOf(profile_photo);

        let newProfilePhoto = ProfilePhoto
        newProfilePhoto.splice(currentIndex, 1)

        setProfilePhoto(newProfilePhoto)
        props.refreshFunction(newProfilePhoto)
    }

   return(
        <>
        <div style={{ display: 'flex', width: '200px', height: '200px', marginBottom: '8px', border:'1px solid black' }}>
            {ProfilePhoto.map((profile_photo, index) => (
                <div onClick={() => onDelete(profile_photo)}>
                    <img style={{ minWidth: '200px', width: '200px', height: '200px' }} src={`http://localhost:5000/${profile_photo}`} />
                </div>
            ))}
        </div>
          <Dropzone
                onDrop={onDrop}
                multiple={false}
                maxSize={800000000}
            >
                {({ getRootProps, getInputProps }) => (
                    <button className="btn-large"
                        {...getRootProps()}
                    >
                        {console.log('getRootProps', { ...getRootProps() })}
                        {console.log('getInputProps', { ...getInputProps() })}
                        <input {...getInputProps()} />
                        
                        <i className="fas fa-upload" style={{ fontSize: '1.5rem', color: 'black', justifyContent: 'center' }}></i>

                    </button>
                )}
            </Dropzone>
        </>
   )
}

export default ProfilePhotoUpload