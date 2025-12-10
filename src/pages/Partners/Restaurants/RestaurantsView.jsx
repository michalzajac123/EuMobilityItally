import PartnersView from "../PartnersView";
import PartnersCard from "../PartnerCard";
import { fetchRestaurants } from "../../../utils/store";

function RestaurantsView() {
  return (
    <PartnersView
      title="Partner"
      highlight="Restaurants"
      description="Explore a curated selection of restaurants that enhance your EU Mobility experience in Italy."
      fetchData={fetchRestaurants}
      CardComponent={PartnersCard}
    />
  );
}

export { RestaurantsView as Component };
export default RestaurantsView;
