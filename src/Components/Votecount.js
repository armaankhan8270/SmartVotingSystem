import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Charts from "./Chart";

const VoteCountPage = () => {
  const [partyVotes, setPartyVotes] = useState([]);

  useEffect(() => {
    // Fetch party votes from Firestore
    const fetchPartyVotes = async () => {
      try {
        const db = firebase.firestore();
        const voteSnapshot = await db.collection("vote").get();
        const partyVotesData = voteSnapshot.docs.map((doc) => ({
          name: doc.id,
          votes: doc.data().votes || 0,
        }));
        setPartyVotes(partyVotesData);
      } catch (error) {
        console.error("Error fetching party votes:", error);
      }
    };

    fetchPartyVotes();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Vote Count for Each Party</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Party Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Votes
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {partyVotes.map((party) => (
            <tr key={party.name}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="text-sm font-medium text-gray-900">
                    {party.name}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{party.votes}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Charts />
    </div>
  );
};

export default VoteCountPage;
