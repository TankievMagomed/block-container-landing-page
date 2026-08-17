import React from "react";
import $ from "./Contacts.module.css";
import { ContactsInfo } from "components";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export const Contacts = () => {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 10,
  };

  return (
    <div className={$.contacts__section} id='contacts'>
      <h1 className={$.contacts__headerText}>
        Центральный офис и производство находятся в <br /> г. Люберцы Московской
        области
      </h1>
      <div className={$.contacts__map}>
        {/* <YMaps>
          <Map
            defaultState={defaultState}
            style={{height: 400 }}
          >
            <Placemark geometry={[55.684758, 37.738521]} />
          </Map>
        </YMaps> */}
      </div>
      <ContactsInfo />
    </div>
  );
};
