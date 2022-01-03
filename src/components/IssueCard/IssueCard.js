import React, { useEffect, useState } from "react";
// import issueList from '../../fakeData/issueLists.json';

const IssueCard = () => {
  const [issues, setIssues] = useState([]);
  useEffect(() => {
    fetch("/issueLists.json")
      .then((res) => res.json())
      .then((data) => setIssues(data));
  }, []);
  return (
    <div className="container mx-auto">
      {issues.map((issue, index) => (
        <div class="lg:flex shadow rounded-lg border  border-gray-400 mb-4 mx-auto">
          <div class="bg-red-600 rounded-lg lg:w-2/12 py-4 block h-full shadow-inner">
            <div class="text-center tracking-wide">
              <div class="text-white font-bold text-4xl ">24</div>
              <div class="text-white font-normal text-2xl">Sept</div>
            </div>
          </div>
          <div class="w-full  lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
            <div class="flex flex-row lg:justify-start justify-center">
              <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
                <i class="far fa-clock"></i> 1:30 PM
              </div>
              <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
                Organiser : IHC
              </div>
            </div>
            <div class="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
              Issue: {issue.issue_name}
            </div>

            <div class="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
              A-142/1, A-142, Ganesh Nagar, Tilak Nagar, New Delhi, 110018
            </div>
          </div>
          <div class="flex flex-row items-center w-full lg:w-1/3 bg-white lg:justify-end justify-evenly px-2 py-4 lg:px-0">
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-2">
              Delete
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2">
              Details
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2">
              Resolving
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IssueCard;
