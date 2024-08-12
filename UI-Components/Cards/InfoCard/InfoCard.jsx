import React from 'react';
// here is two info card 
const InfoCard = () => {
  return (
    <div className="space-y-4">

      <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500">
        <h2 className="font-semibold text-yellow-700">IMPORTANT:</h2>
        <p>
          The unofficial <span className="font-bold">mongodb</span> package provided by Ubuntu is <span className="font-bold">not</span> maintained by MongoDB. You should always use the official MongoDB <span className="font-bold">mongodb-org</span> packages, which are kept up-to-date with the most recent major and minor MongoDB releases.
        </p>
      </div>

      <div className="p-4 bg-green-100 border-l-4 border-green-500">
        <h2 className="font-semibold text-green-700">NOTE:</h2>
        <p>Support for Ubuntu 12.04 has been removed from MongoDB 3.4.15+.</p>
      </div>

    </div>
  );
};

export default InfoCard;
