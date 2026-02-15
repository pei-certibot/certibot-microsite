import { useMemo, useRef, useEffect, useState } from 'react';
import MarkdownIt from 'markdown-it';
import BackButton from "../../components/BackButton";
import PdfFrame from "../../components/PdfFrame";
import block from "../../../public/docs/milestone2/milestone2.md?raw";

function slugify(str) { return str.toString().trim().toLowerCase().replace(/<[^>]+>/g, '').replace(/[\s+~`!@#$%^&*()=+[{\]}\\|;:'",<.>/?]+/g, '-').replace(/^-+|-+$/g, '').replace(/-{2,}/g, '-') }

function MS2() {
  const pdfLink = "https://www.canva.com/design/DAG4yNPf2DA/933GdU_c3fN7UMkjaHuP1g/view?embed";

  const md = useMemo(() => new MarkdownIt({ html: true }), []);
  const { title, html, toc } = useMemo(() => {
    const rendered = md.render(block);

    const toc = [];
    const htmlWithIds = rendered.replace(/<h([1-6])>(.*?)<\/h\1>/g, (match, level, text) => {
      const id = slugify(text);
      toc.push({ level: Number(level), text: text.replace(/<[^>]+>/g, ''), id });
      return `<h${level} id="${id}">${text}</h${level}>`;
    });

    const filteredToc = toc.filter(item => item.level >= 1 && item.level <= 3);

    const titleMatch = block.match(/^#\s+(.+)/m);
    const title = titleMatch ? titleMatch[1].trim() : 'Milestone 2';

    return { title, html: htmlWithIds, toc: filteredToc };
  }, [block, md]);


  const pdfRef = useRef(null);
  const sectionRef = useRef(null);
  const asideRef = useRef(null);

  const [showFixed, setShowFixed] = useState(false);
  const [fixedLeft, setFixedLeft] = useState(null);

  const FLOAT_OFFSET = 55;
  const [fixedTop, setFixedTop] = useState(24 + FLOAT_OFFSET);

  useEffect(() => {
    function update() {
      const asideEl = asideRef.current;
      const pdfEl = pdfRef.current;
      if (!asideEl) { setShowFixed(false); setFixedLeft(null); return; }

      const aRect = asideEl.getBoundingClientRect();
      const isAbove = aRect.top < 0; // aside scrolled above viewport
      if (!isAbove) {
        setShowFixed(false);
        return;
      }

      setFixedLeft(Math.round(aRect.left));

      let top = 24;
      if (pdfEl) {
        const pRect = pdfEl.getBoundingClientRect();
        top = Math.max(24, Math.round(pRect.bottom + 8));
      }
      setFixedTop(top + FLOAT_OFFSET);
      setShowFixed(true);
    }

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="px-4 lg:px-50">
      <BackButton />

      <div className="mx-auto w-full">
        <div ref={pdfRef} className="h-[calc(100vh-12rem)] mb-12">
          <PdfFrame path={pdfLink} title="Milestone 2" />
        </div>

        <section ref={sectionRef} className="documentation-hero text-left pb-24 flex gap-4">
          <aside ref={asideRef} className="hidden md:block self-start">
            <div className="sticky top-24 pr-2">
              <div className="idx">
                <nav className="text-sm">
                  <ul> {toc.map((item) => ( <li key={item.id}  style={{ marginLeft: (item.level - 1) * 16, marginTop: 8, marginBottom: 8, }}> <a href={`#${item.id}`} className="hover:underline">{item.text}</a> </li> ))} </ul>
                </nav>
              </div>
            </div>
          </aside>

          {showFixed && fixedLeft != null && (
            <div className="hidden md:block" style={{ position: 'fixed', left: `${fixedLeft}px`, top: `${fixedTop}px`, width: '12rem', zIndex: 60, }} >
              <div className="idx">
                <nav className="text-sm">
                  <ul>
                    {toc.map((item) => ( <li key={item.id} style={{ marginLeft: (item.level - 1) * 16, marginTop: 8, marginBottom: 8, }} > <a href={`#${item.id}`} className="hover:underline"> {item.text} </a> </li> ))}
                  </ul>
                </nav>
              </div>
            </div>
          )}

          <div className="markdown-body flex-1">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default MS2;
