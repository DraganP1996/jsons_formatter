import { AdditionalInfoSection } from "./additonal-info-section";

export const JsonToXmlAdditional = () => {
  return (
    <div className="flex flex-col">
      <AdditionalInfoSection className="bg-blue-400">
        <div> Test Content</div>
      </AdditionalInfoSection>
      <AdditionalInfoSection className="bg-orange-400">
        <div> Test Content</div>
      </AdditionalInfoSection>
    </div>
  );
};
