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

function TocPanel({ toc }) {
  return (
    <div className="idx" style={{ width: '14rem' }}>
      <div className="idx-header">Contents</div>
      <div className="idx-scroll">
        <ul className="space-y-0.5">
          {toc.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                style={{ paddingLeft: `${0.75 + (item.level - 1) * 0.9}rem` }}
                className={
                  item.level === 1
                    ? 'font-semibold text-base-content/80 hover:text-primary hover:bg-base-content/10 block rounded-lg py-1.5 pr-3 text-sm transition-colors'
                    : 'text-base-content/55 hover:text-primary hover:bg-base-content/10 block rounded-lg py-1.5 pr-3 text-[0.8rem] transition-colors'
                }
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
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

        <section className="documentation-hero text-left pb-24 flex gap-8">
          {/* ── TOC sidebar (left) ── */}
          <aside ref={asideRef} className="hidden lg:block self-start flex-shrink-0">
            <div className="sticky top-24">
              <TocPanel toc={toc} />
            </div>
          </aside>

          {/* ── Fixed clone when sidebar scrolls past top ── */}
          {showFixed && fixedLeft != null && (
            <div
              className="hidden lg:block"
              style={{
                position: 'fixed',
                left: `${fixedLeft}px`,
                top: `${fixedTop}px`,
                zIndex: 60,
                width: '14rem',
              }}
            >
              <TocPanel toc={toc} />
            </div>
          )}

          {/* ── Main content (right) ── */}
          <div className="markdown-body flex-1 min-w-0">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default MilestonePage;