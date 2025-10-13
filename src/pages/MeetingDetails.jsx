import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function MeetingDetails() {
    const { id } = useParams();
    const [content, setContent] = useState("");
    const path = `/meetings/meeting${id}.md`;

    useEffect(() => { if (!id) return "No such meeting ID.";
                fetch(path)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load ${path}`);
        return res.text();
      })
      .then((text) => setContent(text))
      .catch((err) => console.error("Error loading markdown:", err));
    }, [id, path]);


    return (
        <div className="text-left px-12 py-4">
            <div className="prose mx-auto text-lg">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
            </div>
        </div>
    );
}

export default MeetingDetails;