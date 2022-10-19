/* eslint-disable import/prefer-default-export */
const postData = async (url, dataObj) => {
    const header = new Headers();
    header.append('Content-Type', 'application/json');
  
    const rawJSON = JSON.stringify(dataObj);
  
    const request = {
      method: 'POST',
      headers: header,
      body: rawJSON,
      redirect: 'follow',
    };
  
    fetch(url, request);
  };
  
  export default postData;