import { useMemo } from 'react';
import MarkdownIt from 'markdown-it';
import BackButton from "../../components/BackButton";
import pdf from "../../../public/docs/milestone1/CERTIBOT-MS1.pdf";
import PdfFrame from "../../components/PdfFrame";
import block from "../../../public/docs/milestone1/milestone1.md?raw"; 

function MS1() {
  const md = useMemo(() => new MarkdownIt(), []);
  const content = useMemo(() => {
    const titleMatch = block.match(/^#\s+(.+)/m);
    const title = titleMatch ? titleMatch[1] : 'Milestone 1';
    return { title, description: block };
  }, [block]);

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

      <div className="mx-auto lg:w-[90%] h-[calc(100vh-12rem)] mb-12">
        <PdfFrame path={pdf} title="Milestone 1" />
      </div>

      <section className="documentation-hero text-left min-h-screen flex items-center justify-center pb-24">
        <div className="container">
          <div className="row flex items-center justify-center">
            <div className="markdown-body w-full">
              <div dangerouslySetInnerHTML={{ __html: md.render(content.description) }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MS1;