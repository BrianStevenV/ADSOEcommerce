import CardShipmentTracking from "@/app/components/CardShipmentTracking";

const shipments = [
    { id: 'XLA1S3DF1', status: 'Canceled', date: '2021-09-01' },
    { id: 'WSFRDGH2', status: 'Delivered', date: '2021-09-02' },
    { id: '3FDHSDFG', status: 'In Process', date: '2021-09-03' },
    { id: '4CFVFBSD', status: 'Delivered', date: '2021-09-04' },
    { id: 'SDFG45', status: 'Delivered', date: '2021-09-05' },
    { id: 'DSFG6ASDFG', status: 'Canceled', date: '2021-09-06' },
    { id: '7SDFJUHK', status: 'In Process', date: '2021-09-07' },
    { id: 'DF5HG8DFH', status: 'In Process', date: '2021-09-08' },
    { id: '9DFHG', status: 'In Process', date: '2021-09-09' },
    { id: 'SDG10RTFHJ', status: 'Delivered', date: '2021-09-10' },
]

function ShipmentTracking() {
  return (
    <div>
        <h1 style={{ display: 'flex', textAlign: 'center', justifyContent: 'center',margin: '4rem' }}>Shipment Tracking</h1>
        <CardShipmentTracking shipments={shipments}/>
    </div>
  )
}
export default ShipmentTracking;