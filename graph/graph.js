/**
 * Gets symbols from params passed in get request
 */
function getSymbols() {
    const symbols = window.location.search.substring(1).split('&').map(str => str.substring(0,str.length-3));
    return symbols;
}

/**
 * Gets symbol data using the getPriceData method which queries the third party api
 */
async function getSymbolData(symbols) {
    const data = await getPriceData(symbols);
    return data;
}

function updateGraph(data) {
    console.log(data)
}

async function renderPage(){
    const symbols = getSymbols();
    const data = await getSymbolData(symbols);
    updateGraph(data);
}

renderPage();