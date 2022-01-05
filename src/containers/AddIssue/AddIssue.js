import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

const AddIssue = () => {
  const { register, handleSubmit, reset } = useForm();
  const user = useSelector((state) => state.data.user);
  const time = new Date();

  const onSubmit = (data) => {
    Object.keys(data).forEach((k) => data[k] === '' && delete data[k]);
    data.displayName = user.name;
    data.photoURL = user.photoURL;
    data.userEmail = user.email;
    data.date = time.toLocaleDateString();
    data.time = time.toLocaleTimeString();
    data.status = 'open';

    fetch('https://somadhanapp.herokuapp.com/issue', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert('Your Issue is posted successfully \n Thank you!!');
          reset();
        }
      });
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:min-h-screen md:w-80 xl:w-96">
        <Navbar></Navbar>
      </div>

      <div className="flex flex-col justify-between w-full">
        <div>
          <div>
            <p className=" mt-10 mb-2 text-4xl font-base text-center">
              Create an Issue
            </p>
            <div className="flex justify-center">
              <div className=" bg-brand-1 h-px w-20 mb-10"></div>
            </div>
          </div>
          <form
            className="flex flex-col items-center text-brand-1"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              required
              type="email"
              placeholder="Admin Email"
              className="text-sm w-8/12 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-2"
              style={{ outline: 'none' }}
              {...register('adminEmail')}
            />
            <input
              required
              type="text"
              placeholder="Title"
              className="text-sm w-8/12 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-2"
              style={{ outline: 'none' }}
              {...register('title')}
            />

            <textarea
              required
              placeholder="Write About Your Issue Here"
              className="text-sm w-8/12 bg-gray-100 flex flex-row justify-between h-60 py-2 pl-5 rounded-lg mb-3"
              style={{ outline: 'none' }}
              {...register('description')}
            />
            <button
              type="submit"
              className="text-white py-2 px-7 w-60 mt-5 rounded-md bg-brand-3 transition duration-500 hover:bg-brand-9"
            >
              Submit New Issue
            </button>
            <br />
          </form>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AddIssue;
