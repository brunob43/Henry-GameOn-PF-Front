
import React from "react";

import { useEffect, useRef } from 'react';

const UploadWidget = ({ formWidget }) => {
   const CloudinaryRef = useRef()
   const WidgetRef = useRef()
   let resultData = ""
   useEffect(() => {
    CloudinaryRef.current = window.cloudinary;
    WidgetRef.current = CloudinaryRef.current.createUploadWidget({
        cloudName: "dllngwtvs",
        uploadPreset: "t3o5rnx1"
    }, function(error, result) {
      if(result.data.info.files){      
        resultData = result.data.info.files[0].uploadInfo.url
        
        formWidget(resultData)
    }})
   }, [])
   return (
    <div>
    <button type="button" onClick={() => {WidgetRef.current.open()}}>Upload Photo</button>
    {/* <button onClick={() => {WidgetRef.current.open()}}> Upload </button> */}
    </div>
   )
}

export default UploadWidget