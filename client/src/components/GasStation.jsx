import React from 'react';
import styled from 'styled-components';
import data from '../data/db';
import FavoriteIconDeactivated from '../icons/favorite_icon_deactivated.svg';

function GasStation() {
  return (
    <GasStationList role="list">
      {data.map(station => (
        <GasStationItem className="ListItems" key={station.uuid}>
          <Price>{station.e5}</Price>
          <Brand>{station.brand}</Brand>
          <Name>
            {station.name.length > 14 ? `${station.name.substring(0, 14)}...` : station.name}
          </Name>
          <Street>{station.street}</Street>
          <Adress>
            {station.post_code} {station.city}
          </Adress>

          <FavoriteIcon src={FavoriteIconDeactivated} alt="Favorite icon deactivated" />
        </GasStationItem>
      ))}
    </GasStationList>
  );
}

const GasStationList = styled.ul`
  display: flex;
  margin-top: 120px;
  margin-bottom: 100px;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const GasStationItem = styled.li`
  display: grid;
  width: 100%;
  grid-template-columns: 0.1fr 1fr 0.1fr 1fr 1fr 0.1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    '. gasStationName . brand . .'
    'price street . . . favoriteIcon'
    '. adress city . . .';
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25), inset 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-bottom: 4px;
  padding: 15px;
  list-style: none;
`;

const Price = styled.p`
  grid-area: price;
  justify-self: start;
  margin-right: 1em;
  font-size: 1.5rem;
`;

const Brand = styled.p`
  grid-area: brand;
`;

const Name = styled.p`
  grid-area: gasStationName;
`;

const Street = styled.p`
  grid-area: street;
  font-size: 0.75rem;
`;

const Adress = styled.p`
  grid-area: adress;
  font-size: 0.75rem;
`;

const FavoriteIcon = styled.img`
  grid-area: favoriteIcon;
  justify-self: end;
`;

export default GasStation;
