import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import "../styles/paste.css";
import { fetchPaste } from "../services/api";

export default function ViewPaste() {
  const { id } = useParams();
  const [paste, setPaste] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    fetchPaste(id)
      .then(setPaste)
      .catch(() => setError("Paste not found or expired"));
  }, [id]);

  if (error) {
    return (
      <Layout>
        <Card>
          <h2>{error}</h2>
        </Card>
      </Layout>
    );
  }

  if (!paste) {
    return (
      <Layout>
        <Card>Loading...</Card>
      </Layout>
    );
  }

  return (
    <Layout>
      <Card>
        <h1>View Paste</h1>

        <pre className="paste-content">{paste.content}</pre>

        <div className="paste-meta">
          <span>
            Expires:{" "}
            {paste.expires_at
              ? new Date(paste.expires_at).toLocaleString()
              : "Never"}
          </span>
          <span>
            Views Left:{" "}
            {paste.remaining_views !== null
              ? paste.remaining_views
              : "Unlimited"}
          </span>
        </div>
      </Card>
    </Layout>
  );
}
