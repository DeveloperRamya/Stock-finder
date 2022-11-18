   var options


        // "Open:" + option.OpenPrice + "Close:" +option.ClosingPrice;
        // }

        function getStockData(){
            fetch('http://localhost:5000/api/getstockdata').then(res=>res.json()).then
                (data=> {
                    // To do 1.get the dropdown selection
                    // 2.filter selection from response array
                    // 3.display the data
                   const selectedOption = document.getElementById('symbol').value
                   options =data.Stocks
                console.log(options)
                const retrievedData = options.find(entry =>entry.Symbol === selectedOption)
                    console.log(retrievedData);           
                  //  const obj = JSON.stringify(retrievedData);
                   //const stocksData =  JSON.parse(options);
                    document.getElementById('demo').innerHTML = "Symbol: " + retrievedData.Symbol + "</br>"
                        + " Open price: " + retrievedData.OpenPrice + "</br> " + "Closing price: " + retrievedData.ClosingPrice + " </br>" +
                        "Volume: " + retrievedData.Volume + "</br>" + "TimeZone: " + retrievedData.TimeZone;

                    

                   // document.getElementById('demo');
                   // demo.innerHTML = JSON.parse(Stocks)[0].Symbol;

                 //`${stocksData.Object.Symbol}<br>`
                // //${retrievedData.OpenPrice}<br>${retrievedData.ClosingPrice}<br>${retrievedData.Volume}<br>`
                });

        }
    


    

/*for(let i=0;i<Stocks.length;i++){
    if(Stockdata[i].Symbol == Itemselected){
        let Stocks = Stockdata[i];*/

