import React from 'react';
import { useQuery, useSubscription } from 'urql';

import { Counter } from "./components/Counter";

const TotalDonationsQuery = `
  query Query {
    totalDonations
  }
`;

const TotalUpdatedQuery = `
  subscription Subscription {
    totalUpdated {
      total
    }
  }
`;

const handleSubscription = (_, newTotal) => {
  return newTotal?.totalUpdated?.total;
};


function App() {
  const [res] = useSubscription({ query: TotalUpdatedQuery }, handleSubscription);

  const [{ data, fetching, error }] = useQuery({ query: TotalDonationsQuery });


  if (fetching) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <div className="py-12 bg-white font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-bas font-semibold tracking-wide uppercase">Transactions</h2>
          <p className="mt-2 leading-8 tracking-tight uppercase text-indigo-600 sm:text-4xl">
            <span>#team<span className="font-extrabold">pets</span></span>
          </p>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
            We did it! Now let’s keep going. Come back anytime you feel like removing some trash!
          </p>
          <Counter from={0} to={res.data || data.totalDonations} />
        </div>
      </div>
    </div>
  );
}

export default App;
