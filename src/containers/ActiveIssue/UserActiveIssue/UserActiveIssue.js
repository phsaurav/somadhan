import React, { useEffect, useState } from 'react';
import Footer from '../../../components/Footer/Footer';
import IssueCard from '../../../components/IssueCard/IssueCard';
import Navbar from '../../../components/Navbar/Navbar';

const UserActiveIssue = () => {
  const [issues, setIssues] = useState([]);
  useEffect(() => {
    fetch('/issueLists.json')
      .then((res) => res.json())
      .then((data) => setIssues(data));
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:min-h-screen md:w-80 xl:w-96">
        <Navbar></Navbar>
      </div>

      <div className="flex flex-col justify-between w-full">
        <div>
          {issues.length &&
            issues.map((issue) => <IssueCard issue={issue}></IssueCard>)}
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default UserActiveIssue;
