import PanelPromotion from "@/app/components/PanelPromotion"
import PromotionDashboard from "@/app/components/PromotionDashboard"

const dataInfo = {
    title: 'PROMOTION AND DISCOTUNT, REQUEST',
    labelId: 'Product ID',
    buttonOk: 'Request',
    buttonNot: 'Cancel'
}

const petitiosId = [84, 101, 202, 222, 31, 15, 3, 55]

const panelInfo = {
    id: petitiosId,
    label: "Petition"
}

function RequestPromotionPage() {
  return (
    <div>
        <PanelPromotion data={panelInfo}/>
        <PromotionDashboard data={dataInfo}/>
    </div>
  )
}
export default RequestPromotionPage