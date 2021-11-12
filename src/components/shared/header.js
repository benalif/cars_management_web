import React from "react";
import "assets/css/header.css";
import { Menubar } from "primereact/menubar";
import { Avatar } from "primereact/avatar";

const items = [
  {
    template: (item, options) => {
      return (
        <Avatar
          //     label={getUser().charAt(0).toUpperCase()}
          // icon="pi pi-user"
          image={
            "https://scontent.falg6-1.fna.fbcdn.net/v/t39.30808-1/s200x200/252247528_3719132184978745_3372302823579923887_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGb8J6NrW3crTuy2djnFYReGAs7XEUXkuEYCztcRReS4dhjlbJUXKJfDF17CaGSY-a87VzPvegf12BTH8v9htwA&_nc_ohc=PbwhcNGVH6gAX8xoTGD&tn=oz7xNh0V20qptTva&_nc_ht=scontent.falg6-1.fna&oh=69ef5801b09ac88b44af7eeaea51c90a&oe=619362C4"
          }
          style={{ fontWeight: "bold" }}
          target={item.target}
          onClick={options.onClick}
          shape="circle"
        />
      );
    },
    items: [
      {
        label: "details",

        template: (item, options) => {
          return (
            // <div style={{ textAlign: "center", paddingTop: "1rem" }}>
            //   <p>{getUser()}</p>
            // </div>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                padding: "0.4rem",
                alignItems: "flex-start",
              }}
            >
              <Avatar
                //  label={getUser().charAt(0).toUpperCase()}
                // icon="pi pi-user"
                style={{ fontWeight: "bold" }}
                target={item.target}
                onClick={options.onClick}
                shape="circle"
              />
              <div style={{ marginLeft: "0.5rem" }}>
                {/* <div style={{ fontWeight: "bold" }}>
                    {getUser().toUpperCase()}
                  </div> */}

                <div style={{ fontSize: "0.8rem" }}>Farid BENALI</div>
              </div>
            </div>
          );
        },
      },
      {
        separator: true,
      },
      {
        label: "My informations",
        icon: "pi pi-fw pi-user",
        command: () => {
          //    setShowDetail(true);
        },
      },
      {
        label: "Reset password",
        icon: "pi pi-fw pi-lock",
        command: () => {
          //  setShowResetPassword(true);
        },
      },
      {
        separator: true,
      },
      {
        label: "Disconnect",
        icon: "pi pi-fw pi-external-link",
        command: () => {
          //  setVisible(true);
        },
      },
    ],
  },
];

export const Header = () => {
  const start = (
    <img
      alt="logo"
      src="https://enzdz
       crypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvF1f9FD6nySOuBxGuKp4rPn2YXoseEOpsJA&usqp=CAU"
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
      height="40"
      className="p-mr-2"
    ></img>
  );

  return (
    <div>
      <div className="card">
        <Menubar start={start} model={items} />
      </div>
    </div>
  );
};
