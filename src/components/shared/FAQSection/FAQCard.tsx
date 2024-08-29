import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { IoChevronDown } from "react-icons/io5";

type TPOSITION = {
  id: number;
  jobId: string;
  jobTitle: string;
  jobDescription: string;
  jobRequirement: string[];
  skills: string[];
  jobType: string;
  jobDuration: string;
  salary: number;
};
// JOB ACCORDIAN COMPONENT
const FAQCard = ({ position }: { position: TPOSITION }) => {
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

  const handleIsExpanded = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div
      className={` ${
        isExpanded ? "max-h-full" : "max-h-16"
      } border border-amber-100 rounded-xl flex flex-col items-center justify-between overflow-hidden transition-all duration-300  bg-amber-600 `}
    >
      <div className=' w-full flex items-center justify-between p-4 text-white'>
        <span className='text-2xl font-bold'>{position.jobTitle}</span>
        <span
          className={`p-1 rounded-full border border-amber-100 flex items-center transition-all duration-300  ${
            isExpanded && "rotate-180"
          }`}
          onClick={handleIsExpanded}
        >
          <IoChevronDown color='white' />
        </span>
      </div>
      <span className='p-4 text-white'>
        <h1 className='text-xl font-bold'>Job Description</h1>
        {position.jobDescription}
        <h1 className='text-xl font-bold pt-4'>Requirement</h1>
        <ol className='list-disc list-inside'>
          {position.jobRequirement.map((requirement, index) => {
            return (
              <li className='pl-4' key={index}>
                {requirement}
              </li>
            );
          })}
        </ol>
        <h1 className='text-xl font-bold pt-4'>Skills</h1>
        <div>
          <ul className='flex items-center justify-start gap-2 flex-wrap '>
            {position.skills.map((skill,index) => (
              <li className='px-3 py-1 rounded-full bg-amber-500 text-sm' key={index}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </span>
      <div className=' w-full px-4 '>
        <JobApplicationForm />
      </div>
    </div>
  );
};

export default FAQCard;

interface FormData {
  name: string;
  email: string;
  address: string;
  mobileNumber: number;
  country: string;
  gender: string;
  cv: File | null;
}

interface FormError {
  [key: string]: string;
}

export function JobApplicationForm() {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    address: "",
    mobileNumber: 0,
    country: "",
    gender: "",
    cv: null,
  });
  const [formError] = React.useState<FormError>({});
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "cv" && files) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleSubmit = async (e: FormEvent) => {
    console.log(e);
  };
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='text-white font-bold px-5 py-2 w-full border  bg-transparent border-amber-100 hover:bg-amber-500 mb-4 rounded-md  transition-all duration-300'>
          Apply Now
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-center'>
            Job Application From
          </DialogTitle>
          <DialogDescription className='text-center'>
            Fill details below and we'll cantact you.
          </DialogDescription>
        </DialogHeader>
        <div className=' rounded-2xl   '>
          {/* <h1 className='text-4xl font-bold my-2 mb-4'>Sign Up</h1>
          <p className='text-lg font-normal  mb-4 '>Your Feedback Matters.</p> */}
          <form onSubmit={handleSubmit} className='flex flex-col '>
            <div className='w-[100%] flex flex-col'>
              <input
                type='text'
                name='name'
                onChange={handleChange}
                placeholder='Name'
                autoComplete='off'
                className='p-3 text-base outline-black border  bg-white text-black mb-4 rounded-lg'
              />
              {formError?.name && (
                <p className='text-red-500 text-sm font-normal mb-3'>
                  {formError?.name}
                </p>
              )}
            </div>
            <div className='w-[100%] flex flex-col'>
              <input
                type='email'
                name='email'
                onChange={handleChange}
                placeholder='Email'
                autoComplete='off'
                className='p-3 text-base outline-black border  bg-white text-black mb-4 rounded-lg'
              />
              {formError.email && (
                <p className='text-red-500 text-sm font-normal mb-3'>
                  {formError.email}
                </p>
              )}
            </div>
            <div className='w-[100%] flex flex-col'>
              <input
                type='text'
                name='address'
                onChange={handleChange}
                placeholder='Address'
                autoComplete='off'
                className='p-3 text-base outline-black border  bg-white text-black mb-4 rounded-lg'
              />
              {formError.address && (
                <p className='text-red-500 text-sm font-normal mb-3'>
                  {formError.address}
                </p>
              )}
            </div>
            <div className='w-[100%] flex flex-col'>
              <input
                type='tel'
                name='mobileNumber'
                onChange={handleChange}
                placeholder='Mobile Number'
                autoComplete='off'
                className='p-3 text-base outline-black border  bg-white text-black mb-4 rounded-lg'
              />
              {formError.mobileNumber && (
                <p className='text-red-500 text-sm font-normal mb-3'>
                  {formError.mobileNumber}
                </p>
              )}
            </div>
            <div className='w-[100%] flex flex-col'>
              <input
                type='text'
                name='country'
                onChange={handleChange}
                placeholder='Country'
                autoComplete='off'
                className='p-3 text-base outline-black border  bg-white text-black mb-4 rounded-lg'
              />
              {formError.country && (
                <p className='text-red-500 text-sm font-normal mb-3'>
                  {formError.country}
                </p>
              )}
            </div>
            <div className='w-[100%] flex flex-col'>
              <input
                type='text'
                name='gender'
                onChange={handleChange}
                placeholder='Gender'
                autoComplete='off'
                className='p-3 text-base outline-black border  bg-white text-black mb-4 rounded-lg'
              />
              {formError.gender && (
                <p className='text-red-500 text-sm font-normal mb-3'>
                  {formError.gender}
                </p>
              )}
            </div>
            <div className='w-[100%] flex flex-col'>
              <input
                type='file'
                id='cv'
                name='cv'
                accept='.pdf,.doc,.docx'
                onChange={handleFileChange}
                className='hidden'
              />
              <label htmlFor='cv'>
                <button
                  type='button'
                  onClick={() => document.getElementById("cv")?.click()}
                  className='p-3  w-full text-base  text-black mb-4 rounded-lg bg-slate-200 hover:bg-slate-300 transition-all duration-300'
                >
                  {selectedFile ? selectedFile.name : "Upload Resume"}
                </button>
              </label>
              {formError.gender && (
                <p className='text-red-500 text-sm font-normal mb-3'>
                  {formError.gender}
                </p>
              )}
            </div>

            <button
              type='submit'
              className='p-3 text-base   bg-primary text-white mb-4 rounded-lg hover:bg-orange-500 transition-all duration-300'
            >
              {" "}
              Submit
            </button>
            {/* <p className='text-base font-normal'>
              Already have an accout?{" "}
              <span
                onClick={() => navigate("/sign-in")}
                className='text-base underline cursor-pointer text-amber-500'
              >
                Sign in
              </span>
            </p> */}
          </form>
        </div>
        {/* <DialogFooter>
          <Button type='submit'>Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
