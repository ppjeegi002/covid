const covidApi = {
    getSummary: async function() {
        return await fetchRequest('https://api.covid19api.com/summary')
    }
   
}

