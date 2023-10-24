import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import useFetchData from "../../CustomHooks/useFetchData";
import { NotificationService } from '../../Service/NotificationService';
import { LocalStorageService } from '../../Services/LocalStorageService';

const EditProfile = (props) => {

  const {name,email,date_of_birth,alternate_mobile_number,profile_photo} = props.data

  const [editData, setEditData] = useState({
    name: name,
    email: email,
    dob: date_of_birth,
    alternate_mobile_number: alternate_mobile_number,

  });

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm( {

    });

    const { loading, makeRequest } = useFetchData();

   const editProfile = async (data) => {

      const {name,email,dob, alternate_mobile_number} = editData
      const payload = 
      {
        "name": name,
          "email": email,
          "dob": dob,
          "alternate_mobile_number": alternate_mobile_number.toString()
      };
      const Response = await makeRequest("/user/profile/update", "post", payload);
      if (Response.status) {
           NotificationService(Response.message, 'success', 'top-right')
           props.call()
      }
     
        // reset()
    };


    const onSubmit = async (data) => {
      const formData = new FormData();
      
      formData.append('photo', data?.image[0]);
      
      const accessToken = LocalStorageService.getItem('accessToken')
    
      try {
        // Make an API request to upload the image
        const response = await fetch(process.env.REACT_APP_SERVER_BASE_URL + '/user/profile/update-photo', {
          method: 'POST',
          body: formData,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
    
        if (response.ok) {
         
          NotificationService('Image uploaded successfully','success', 'top-right');
          reset()
          props.call()
        } else {
          // Handle error cases
          NotificationService(Response.message, 'error', 'top-right')
          console.error('Image upload failed');
        }
      } catch (error) {
        console.error('Error uploading image', error);
      }
    };
    

    const handleChange = (e) => {
      console.log(e.target.name);
      setEditData({...editData, [e.target.name]: e.target.value });
    };
  

  return (
    <>
    <div className='md:w-5/6 p-1 md:p-5'>
        <p className='font-semibold'>Current Profile</p>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col justify-center items-start space-y-3 mt-3 md:w-fit '>

        <img src={profile_photo} className='h-16 object-center w-16' alt="" />
       
        <input
          type="file"
          id="image"
          accept="image/png, image/jpeg,  image/png"
          className=''
          {...register('image', { required: 'Profile image is required' })}
        />
        {/* <ProfilePictureChange currentPicture={profilePicture} onPictureChange={handlePictureChange} /> */}

        < button  className='text-primary cursor-pointer text-sm text-center'>Change</button>
        </div>
        </form>
       
        <div className='mt-5'>
        {/* <form onSubmit={handleSubmit(editProfile)} > */}

        <div className="space-y-2  w-full    items-center  justify-center">
          <label htmlFor="name" className='text-sm font-semibold'>Profile Name</label>
              <input
                className="border rounded-md w-full outline-none   max-md:mt-2 py-[10px] px-3  placeholder:text-sm"
                type="text"
                autoComplete="off"
                name="name" 
                value={editData.name}
                onChange={handleChange}
                // {...register("name", { required: true })}
                id="name"
                placeholder="Santhosh"
              />
              {/* {errors.name && (
                <span style={{ color: "red", fontSize: 10 }}>
                  {"Name required *"}
                </span>
              )} */}
            </div>


            <div className="  w-full mt-3  space-y-2  items-center  justify-center">
            <label htmlFor="dob" className='text-sm font-semibold'>Date of Birth</label>
              <input
                className="border rounded-md w-full outline-none  max-md:mt-2 py-[10px] px-3  placeholder:text-sm"
                type="text"
                autoComplete="dob"
                name="dob"
                value={editData.dob}
                onChange={handleChange}
                // {...register("dob", { required: true })}
                id="dob"
                placeholder="Date of Birth"
              />
              {/* {errors.dob && (
                <span style={{ color: "red", fontSize: 10 }}>
                  {"DOB required *"}
                </span>
              )} */}
            </div>


            <div className="  w-full space-y-2 mt-3   items-center  justify-center">
            <label htmlFor="email" className='text-sm font-semibold'>Email Id (optional)</label>
              <input
                className="border rounded-md  w-full outline-none   max-md:mt-2 py-[10px] px-3  placeholder:text-sm"
                type="email"
                autoComplete="off"
                name="email"
                value={editData.email}
                onChange={handleChange}
                // {...register("email", { required: true })}
                id="email"
                placeholder="Email Address"
              />
              {/* {errors.email && (
                <span style={{ color: "red", fontSize: 10 }}>
                  {"Email Address required *"}
                </span>
              )} */}
            </div>

            <div className="space-y-2 mt-3  w-full   items-center  justify-center">
            <label htmlFor="number" className='text-sm font-semibold'>Alternative Number</label>
              <input
                className="border rounded-md w-full outline-none   max-md:mt-2 py-[10px] px-3 mb-5 placeholder:text-sm"
                type="text"
                autoComplete="off"
                name="alternate_mobile_number"
                value={editData.alternate_mobile_number}
                onChange={handleChange}
                // {...register("alternate_mobile_number", { required: true })}
                id="number"
                placeholder="9876567890"
              />
              {/* {errors.number && (
                <span style={{ color: "red", fontSize: 10 }}>
                  {"Alternative Number required *"}
                </span>
              )} */}
            </div>
 
           <div onClick={()=>editProfile()} className='flex justify-end mt-5'> <button type='' className='bg-primary text-white py-2 px-10 text-sm'>Update</button></div>
           {/* </form> */}
        </div>
    </div>
    </>
  )
}

export default EditProfile



// const ProfilePictureChange = ({currentPicture, onPictureChange }) => {
//   const [selectedPicture, setSelectedPicture] = useState(null);

//   const handlePictureChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedPicture(file);
//   };

//   const handleUpload = () => {
//     if (selectedPicture) {
//       onPictureChange(selectedPicture);
//       setSelectedPicture(null);
//     }
//   };

//   return (
//     <div>
//       <img  className='h-16 object-center w-16' src={currentPicture} alt="Current Profile" width="150" height="150" />
//       <br />
//       <input type="file" accept="image/*"  onChange={handlePictureChange} />
//       <br />
//       <button onClick={handleUpload}>Change</button>
//     </div>
//   );
// };

