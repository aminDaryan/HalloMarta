import React, { useState } from 'react';

// Utils
import axios from 'axios';
import {
  MainContainer,
  InputContainer,
  Input,
  SearchButton,
  ResultsContainer,
  NoResultsMessage,
  DataContainer,
  DataBox,
} from './MainStyledComponents';

export default function Main() {
  const [data, setData] = useState(null);

  async function getInfo(e) {
    e.preventDefault();
    setData(null);
    const form = new FormData(e.target);
    const input = form.get('input');
    console.log('input: ', input);
    const response = await axios.get(
      `https://jsonmock.hackerrank.com/api/stocks?date=${input}`
    );
    const theData = response?.data?.data[0] || 'Nothing';
    setData(theData);
  }

  return (
    <MainContainer>
      <InputContainer onSubmit={getInfo}>
        <Input
          type="text"
          name="input"
          placeholder="5-January-2000"
          pattern="^(([0-9])|([0-2][0-9])|([3][0-1]))-(january|february|march|april|may|june|july|august|september|october|november|december)-\d{4}$"
          required
        />
        <SearchButton type="submit" value="Search" />
      </InputContainer>
      <ResultsContainer>
        {data &&
          (data === 'Nothing' ? (
            <NoResultsMessage data-testid="no-result">
              No Results Found
            </NoResultsMessage>
          ) : (
            <DataContainer data-testid="stock-data">
              <DataBox>Open: {data?.open}</DataBox>
              <DataBox>High: {data?.high}</DataBox>
              <DataBox>Low: {data?.low}</DataBox>
              <DataBox>Close: {data?.close}</DataBox>
            </DataContainer>
          ))}
      </ResultsContainer>
    </MainContainer>
  );
}
