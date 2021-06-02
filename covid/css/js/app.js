window.onload= async function(){
  console.log('ready...')
  await loadData('Global')
}



loadData= async  function(country){
  await loadSummary(country)
  
}

loadSummary = async function(country){
  let summaryData = await covidApi.getSummary()
  let summary = summaryData.Global
  showConfirmedTotal(summary.TotalConfirmed)
  showRecoveredTotal(summary.TotalRecovered)
  showDeathTotal(summary.TotalDeaths)


}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
showConfirmedTotal= function(total){
  document.querySelector('#confirmed_sub').textContent = numberWithCommas(total)
}
showRecoveredTotal= function(total){
  document.querySelector('#recovered_sub').textContent = numberWithCommas(total)
}
showDeathTotal= function(total){
    document.querySelector('#death_sub').textContent = numberWithCommas(total)}



   