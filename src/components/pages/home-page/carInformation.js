import React, { useEffect, useState } from "react";
import { LoadingSkeleton } from "components/shared";

const fieldsStyle = {
  backgroundColor: "#212121",
  borderRadius: "8px",
  marginBottom: "0.3rem",
};

const valuesStyle = { borderBottom: "1px solid #eee" };

export const CarIformation = ({ carInformation }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  });
  return (
    <>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <div className="p-grid">
          <div className="p-col-12">
            <h3>Détails technique</h3>
          </div>
          <div className="p-col-12 p-md-6 p-text-bold" style={fieldsStyle}>
            Nom
          </div>
          <div className="p-col-12 p-md-6 " style={valuesStyle}>
            {carInformation.name}
          </div>
          <div className="p-col-12 p-md-6 p-text-bold" style={fieldsStyle}>
            Model
          </div>
          <div className="p-col-12 p-md-6" style={valuesStyle}>
            {carInformation.model}
          </div>
          <div className="p-col-12 p-md-6 p-text-bold" style={fieldsStyle}>
            Moteur
          </div>
          <div className="p-col-12 p-md-6" style={valuesStyle}>
            {carInformation.engine}
          </div>
          <div className="p-col-12 p-md-6 p-text-bold" style={fieldsStyle}>
            Service
          </div>
          <div className="p-col-12 p-md-6" style={valuesStyle}>
            {carInformation.service}
          </div>
          <div className="p-col-12 p-md-6 p-text-bold" style={fieldsStyle}>
            Assurance
          </div>
          <div className="p-col-12 p-md-6" style={valuesStyle}>
            {carInformation.assurance}
          </div>
          <div className="p-col-12 p-md-6 p-text-bold" style={fieldsStyle}>
            Contrôle technique
          </div>
          <div className="p-col-12 p-md-6" style={valuesStyle}>
            {carInformation.control}
          </div>
        </div>
      )}
    </>
  );
};
