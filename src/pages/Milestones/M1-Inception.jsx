import BackButton from "../../components/BackButton";
import pdf from "../../../public/docs/CERTIBOT-MS1.pdf";
import PdfFrame from "../../components/PdfFrame";

function MS1() {
  return (
    <div className="px-4 lg:px-20">
      <div className="flex mb-8 px-8">
        <div className="w-1/8 relative hidden sm:block">
          <div className="absolute bottom-0">
            <BackButton />
          </div>
        </div>
        <div className="w-3/4">
          <h2 className="hidden sm:block">Milestone1: Inception</h2>
          <h3 className="sm:hidden whitespace-nowrap">Milestone1: Inception</h3>
        </div>
      </div>

      <div className="mx-auto lg:w-[90%] h-[calc(100vh-12rem)]">
        <PdfFrame path={pdf} title="Milestone 1" />
      </div>
    </div>
  );
}

export default MS1;