import MilestonePage from '../components/MilestonePage.jsx';
import termsAndConditionsMd from '../../public/docs/terms-and-conditions.md?raw';

function TermsAndConditions() {
  return (
    <MilestonePage
      markdownBlock={termsAndConditionsMd}
      pdfTitle="Terms and Conditions"
    />
  );
}

export default TermsAndConditions;
