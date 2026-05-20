import { useMemo, useRef, useEffect, useState } from 'react';
import MarkdownIt from 'markdown-it';
import BackButton from './BackButton';
import PdfFrame from './PdfFrame';

function slugify(str) {
  return str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/[\s+~`!@#$%^&*()=+[{\]}\\|;:'\",<.>/?]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

function MilestonePage({ markdownBlock, pdfLink, pdfTitle = 'Milestone' }) {
  const md = useMemo(() => new MarkdownIt({ html: true }), []);

  const { html, toc, parsedTitle } = useMemo(() => {
    const rendered = md.render(markdownBlock);

    const tocItems = [];
    const htmlWithIds = rendered.replace(/<h([1-6])>(.*?)<\/h\1>/g, (match, level, text) => {
      const id = slugify(text);
      tocItems.push({
        level: Number(level),
        text: text.replace(/<[^>]+>/g, ''),
        id,
      });
      return `<h${level} id="${id}">${text}</h${level}>`;
    });

    const titleMatch = markdownBlock.match(/^#\s+(.+)/m);
    const markdownTitle = titleMatch ? titleMatch[1].trim() : null;

    return {
      html: htmlWithIds,
      toc: tocItems.filter((item) => item.level >= 1 && item.level <= 3),
      parsedTitle: markdownTitle,
    };
  }, [markdownBlock, md]);

  const frameTitle = pdfTitle || parsedTitle || 'Milestone';

  const pdfRef = useRef(null);
  const asideRef = useRef(null);

  const [showFixed, setShowFixed] = useState(false);
  const [fixedLeft, setFixedLeft] = useState(null);

  const FLOAT_OFFSET = 55;
  const [fixedTop, setFixedTop] = useState(24 + FLOAT_OFFSET);

  useEffect(() => {
    function update() {
      const asideEl = asideRef.current;
      const pdfEl = pdfRef.current;

      if (!asideEl) {
        setShowFixed(false);
        setFixedLeft(null);
        return;
      }

      const aRect = asideEl.getBoundingClientRect();
      const isAbove = aRect.top < 0;
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
        {pdfLink && (
          <div ref={pdfRef} className="h-[calc(100vh-12rem)] mb-12">
            <PdfFrame path={pdfLink} title={frameTitle} />
          </div>
        )}

        <section className="documentation-hero text-left pb-24 flex gap-4">
          <aside ref={asideRef} className="hidden md:block self-start">
            <div className="sticky top-24 pr-2">
              <div className="idx">
                <nav className="text-sm">
                  <ul>
                    {toc.map((item) => (
                      <li
                        key={item.id}
                        style={{
                          marginLeft: (item.level - 1) * 16,
                          marginTop: 8,
                          marginBottom: 8,
                        }}
                      >
                        <a href={`#${item.id}`} className="hover:underline">
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </aside>

          {showFixed && fixedLeft != null && (
            <div
              className="hidden md:block"
              style={{
                position: 'fixed',
                left: `${fixedLeft}px`,
                top: `${fixedTop}px`,
                width: '12rem',
                zIndex: 60,
              }}
            >
              <div className="idx">
                <nav className="text-sm">
                  <ul>
                    {toc.map((item) => (
                      <li
                        key={item.id}
                        style={{
                          marginLeft: (item.level - 1) * 16,
                          marginTop: 8,
                          marginBottom: 8,
                        }}
                      >
                        <a href={`#${item.id}`} className="hover:underline">
                          {item.text}
                        </a>
                      </li>
                    ))}
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

export default MilestonePage;