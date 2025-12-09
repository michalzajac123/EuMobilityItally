import PartnersView from "../PartnersView";
import PartnersCard from "../PartnerCard";
import { fetchCompanies } from "../../../utils/store";

function CompaniesView() {
  return (
    <PartnersView
      title="Partner"
      highlight="Companies"
      description="Meet the leading companies supporting EU Mobility projects in Italy."
      fetchData={fetchCompanies}
      CardComponent={PartnersCard}
    />
  );
}

export { CompaniesView as Component };
export default CompaniesView;
