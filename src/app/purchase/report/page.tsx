import CardPurchaseReport from "@/app/components/CardPurchaseReport"

const purchases = [
    { id: 'XLA1S3DF1', date: '2021-09-01' },
    { id: 'WSFRDGH2', date: '2021-09-02' },
    { id: '3FDHSDFG', date: '2021-09-03' },
    { id: '4CFVFBSD', date: '2021-09-04' },
    { id: 'SDFG45', date: '2021-09-05' },
    { id: 'DSFG6ASDFG', date: '2021-09-06' },
    { id: '7SDFJUHK', date: '2021-09-07' },
    { id: 'DF5HG8DFH', date: '2021-09-08' },
    { id: '9DFHG', date: '2021-09-09' },
    { id: 'SDG10RTFHJ', date: '2021-09-10' },
]

function DashboardPurchaseReport() {
  return (
    <div>
        <h1 style={{ display: 'flex', textAlign: 'center', justifyContent: 'center',margin: '4rem' }}>Purchase Report</h1>
        <CardPurchaseReport purchases={purchases} />
    </div>
  )
}
export default DashboardPurchaseReport