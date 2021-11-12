import React from "react";
import { Card } from "primereact/card";
import { Caroussel, TabsView, Footer, Header } from "components/shared";
import { CarIformation } from "components/pages/home-page";
import { carInformations } from "utils/helper";

const cardCustomStyle = {
  height: "30rem",
};

export const Home = () => {
  return (
    <>
      <Header />
      <div className="p-grid p-m-1">
        <div className="p-col-12 p-md-6">
          <Card style={cardCustomStyle}>
            <Caroussel numScroll={1} numVisible={1} />
          </Card>
        </div>
        <div className="p-col-12 p-md-6">
          <Card style={cardCustomStyle}>
            <CarIformation carInformation={carInformations} />
          </Card>
        </div>
        <div className="p-col-12">
          <Card>
            <TabsView />
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};
