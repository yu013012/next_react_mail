import React, { useState, useEffect } from 'react';

interface Data {
  data: any;
}

type param = {
  [key: string]: string;
}

type token = string | null

const api = async (apiEndpoint: string, queryParams: param | null = null, token: token = null) => {
  // TODO: この定義問題ありそう
  var data: string = ""

  const authToken = `Bearer ${ token }`;

  if (queryParams !== null) {
    // クエリパラメータをURLに追加する
    const queryString = Object.keys(queryParams)
      .map(key => `${key}=${encodeURIComponent(queryParams[key])}`)
      .join('&');

    apiEndpoint = `${apiEndpoint}?${queryString}`;
  }

  try {
    const response = await fetch(apiEndpoint, {
      method: 'GET',
      headers: {
        'Authorization': authToken,
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const jsonData: Data = await response.json();
      data = jsonData.data
    } else {
      console.error('HTTPエラーレスポンス:', response.status);
    }
  } catch (error) {
    console.error('API呼び出しエラー:', error);
  }

  return data;
}

export default api;
