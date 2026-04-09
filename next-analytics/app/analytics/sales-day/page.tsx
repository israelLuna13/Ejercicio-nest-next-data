
async function getSalesDay(){
  const url = `${process.env.API_URL}/analytics/sales-day`
  const req = await fetch(url)
  const json = await req.json()
  console.log(json);
  return json
  
}
export default  async function page() {
   const {json} = await getSalesDay();

  return (
    <div>
      Sales
    </div>
  )
}
