import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { useForm } from 'react-hook-form';

const AddIssue = () => {
  const { register, handleSubmit, reset } = useForm();
  const d = new Date();
  const onSubmit = (data) => {
    data.status = 'Pending';
    fetch('https://lit-refuge-91293.herokuapp.com/userorders', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) =>
        alert('Successfully Ordered. Please wait for the confirmation message.')
      );
    // console.log(data);
    reset();
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:min-h-screen md:w-80 xl:w-96">
        <Navbar></Navbar>
      </div>

      <div className="flex flex-col justify-between w-full">
        <div className="mx-auto mt-8">
          <h1 className="font-bold uppercase leading-10 text-5xl">
            Add an issue
          </h1>
        </div>
        <form
          className="mx-auto mt-8 flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register('name', { required: true, maxLength: 20 })}
            placeholder="Name"
            className="border-2 p-2 m-2 md:w-96"
            // defaultValue={user.displayName}
          />
          <input
            readOnly
            {...register('email', { required: true })}
            placeholder="Email"
            className="border-2 p-2 m-2"
            // defaultValue={user.email}
            // disabled
          />
          <input
            type="tel"
            {...register('mobile', { required: true })}
            placeholder="Mobile Number"
            className="border-2 p-2 m-2"
          />
          <input
            readOnly
            {...register('date', { required: true })}
            placeholder="Date"
            defaultValue={d.toLocaleDateString()}
            className="border-2 p-2 m-2"
            // disabled
          />
          <input
            readOnly
            {...register('time', { required: true })}
            placeholder="Time"
            defaultValue={d.toLocaleTimeString()}
            className="border-2 p-2 m-2"
            // disabled
          />
          <textarea
            {...register('productname')}
            placeholder="Issue Here"
            // defaultValue={el.name}
            // disabled
            className="border-2 p-2 m-2"
          />
          <input
            type="submit"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800  shadow-red-500/50 dark:shadow-red-800/80 font-medium rounded-lg text-sm py-2.5"
          />
        </form>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default AddIssue;
