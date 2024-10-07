import PanelPromotion from "@/app/components/PanelPromotion"
import PromotionDashboard from "@/app/components/PromotionDashboard"

const dataInfo = {
  title: 'RESPONSE REQUEST PROMOTION AND DISCOUNT REQUEST',
  labelId: 'Request ID',
  buttonOk: 'Approve',
  buttonNot: 'Deny'
}

const petitionsId = [84, 101, 202, 222, 31, 15, 3, 55]

const panelInfo = {
  id: petitionsId,
  label: "Filter",
  input: "Filter"
}

function ResponsePromotionPage() {
  return (
    <div>
        <PanelPromotion data={panelInfo}/>
        <PromotionDashboard data={dataInfo}/>
    </div>
  )
}
export default ResponsePromotionPage