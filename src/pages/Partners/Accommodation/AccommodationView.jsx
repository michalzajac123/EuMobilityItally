import PartnersView from "../PartnersView";
import PartnersCard from "../PartnerCard";
import { fetchHotels } from "../../../utils/store";

function AccommodationView() {
  return (
    <PartnersView
      title="Comfortable"
      highlight="Accommodation"
      description="We provide cozy and safe places to stay during your mobility project in Italy."
      fetchData={fetchHotels}
      CardComponent={PartnersCard}
    />
  );
}

export { AccommodationView as Component };
export default AccommodationView;
