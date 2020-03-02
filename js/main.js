
  //index.htmlからcsv出力先の要素を取得
  const outputElement = document.getElementById('output_csv');

  //todouhuken2.csvを取得し、内容をoutput_csvの要素内に記載
  function getCsvData(dataPath) {
    const request = new XMLHttpRequest();
    request.addEventListener('load', (event) => {
      const response = event.target.responseText;
      convertArray(response);
    });
    request.open('GET', dataPath, true);
    request.send();
   }

  //  dataStringにsplitで改行毎に分割し一次元配列とする
  //　dataArrayの各行を「,」で分割し一次元配列化する
  function convertArray(data) {
    const dataArray = [];
    const dataString = data.split('\n');
    for(var i = 0; i < dataString.length; i++) {
      dataArray[i] = dataString[i].split(',');
    }
    //空文字列insertElementにdataArrayにテーブルタグを足している
    var insertElement = '';
    dataArray.forEach(function(element) {
      insertElement += '<tr>';
      element.forEach(function(childElement) {
        insertElement += '<td>' + childElement + '</td>';
      });
      insertElement += '</tr>';
    });
     outputElement.innerHTML = insertElement;
  }
   getCsvData('todouhuken2.csv');



