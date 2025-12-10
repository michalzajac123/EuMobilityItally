import PartnersView from "../PartnersView";
import PartnersCard from "../PartnerCard";
import { fetchSponsors } from "../../../utils/store";

function SponsorsView() {
  return (
    <PartnersView
      title="Partner"
      highlight="Sponsors"
      description="Discover the generous sponsors who fuel EU Mobility initiatives in Italy."
      fetchData={fetchSponsors}
      CardComponent={PartnersCard}
    />
  );
}

export { SponsorsView as Component };
export default SponsorsView;
