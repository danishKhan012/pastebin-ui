import { useState } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import "../styles/form.css";
import { createPaste } from "../services/api";

export default function CreatePaste() {
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [expiration, setExpiration] = useState("never");
  const [maxViews, setMaxViews] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    try {
      setError("");
      setUrl("");

      if (!content.trim()) {
        setError("Paste content is required");
        return;
      }

      if (maxViews && Number(maxViews) < 1) {
        setError("Max views must be at least 1");
        return;
      }

      const body: any = {
        content,
      };

    
      if (expiration === "10m") body.ttl_seconds = 600;
      if (expiration === "1h") body.ttl_seconds = 3600;
      if (expiration === "1d") body.ttl_seconds = 86400;

      if (maxViews) body.max_views = Number(maxViews);

      setLoading(true);
      const res = await createPaste(body);
      setUrl(res.url);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Card>
        <h1>Create New Paste</h1>
        <textarea
          className="textarea"
          placeholder="Paste your text here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <label>Tags</label>
        <input
          type="text"
          placeholder="react, typescript"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <div className="row">
          <div>
            <label>Paste Expiration</label>
            <select
              value={expiration}
              onChange={(e) => setExpiration(e.target.value)}
            >
              <option value="never">Never</option>
              <option value="10m">10 Minutes</option>
              <option value="1h">1 Hour</option>
              <option value="1d">1 Day</option>
            </select>
          </div>

          <div>
            <label>Max Views</label>
            <input
              type="number"
              min={1}
              placeholder=""
              value={maxViews}
              onChange={(e) => setMaxViews(e.target.value)}
              onWheel={(e) => e.currentTarget.blur()}
            />
          </div>
        </div>

        <button
          className="primary-btn"
          onClick={submit}
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Paste"}
        </button>

        {error && <p className="error">{error}</p>}

        {url && (
          <div className="success">
            <strong>Paste Created </strong>
            <a href={url} target="_blank">
              {url}
            </a>
          </div>
        )}
      </Card>
    </Layout>
  );
}
