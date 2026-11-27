import { Workflow, MessageSquare, Target } from "lucide-react";
import ProductSection from "./ProductSection";
import leadpathVideo from "@/assets/videos/leadpath_explainer.mp4.asset.json";
import leadpathPoster from "@/assets/videos/leadpath_poster.jpg.asset.json";
import chatstreetVideo from "@/assets/videos/chatstreet_explainer.mp4.asset.json";
import chatstreetPoster from "@/assets/videos/chatstreet_poster.jpg.asset.json";

/** To add the DSP video later: upload it as an asset and pass its url as video.src below. */
const Products = () => (
  <>
    <ProductSection
      id="leadpath"
      icon={Workflow}
      name="Leadpath"
      status="In development · pilot discussions open"
      headline="Real-time lead operations, under your brand."
      copy="Leadpath is being developed to help lead-generation teams manage campaigns, connect acquisition sources, qualify incoming leads, and route them to buyers through a configurable workflow."
      features={[
        "Campaign and buyer workflows",
        "Connections to acquisition sources",
        "Real-time API and lead routing",
        "Ping & Post and Host & Post workflows",
        "Fraud scoring and AI signals",
        "Lead and buyer-outcome reporting",
      ]}
      ctas={[{ label: "Discuss a Leadpath pilot", href: "#contact", primary: true }]}
      video={{
        src: leadpathVideo.url,
        poster: leadpathPoster.url,
        description:
          "An animated walkthrough of the planned Leadpath workflow: leads arrive from acquisition channels, pass through a white-label real-time lead API where they are qualified and scored, and are routed to buyers, with reporting on lead and buyer outcomes. Leadpath is in development; features shown are not all generally available.",
      }}
    />
    <ProductSection
      id="chatstreet"
      icon={MessageSquare}
      name="ChatStreet"
      muted
      reverse
      headline="Turn publisher content into conversation."
      copy="ChatStreet adds an AI-powered conversational experience alongside publisher content. Readers can ask questions about an article, explore relevant sponsored suggestions, and continue the conversation in context. Sponsorship remains clearly labelled, and campaign activity can be viewed from impression through conversation, intent, and lead events."
      features={[
        "Article-aware conversations",
        "Suggested questions and follow-ups",
        "Clearly labelled sponsored suggestions",
        "Publisher campaign activity and lead-event visibility",
      ]}
      ctas={[
        { label: "View the live experience", href: "https://chatstreet.theaudiencestreet.com/", external: true, primary: true },
        { label: "Discuss a ChatStreet pilot", href: "#contact" },
      ]}
      video={{
        src: chatstreetVideo.url,
        poster: chatstreetPoster.url,
        description:
          "A publisher article is shown with an 'Ask this page' ChatStreet panel beside it. The assistant explains it has read the article and offers suggested questions; the reader asks follow-ups, sees clearly labelled sponsored suggestions, and the publisher view shows campaign activity from impression to conversation, intent and lead events.",
      }}
    />
    <ProductSection
      id="dsp"
      icon={Target}
      name="TAS DSP & Audience Curation"
      headline="Plan and activate campaigns with curated audiences."
      copy="The Audience Street combines programmatic media planning and campaign execution with audience and inventory curation. We help advertisers reach relevant audiences across digital channels, supported by hands-on trading expertise and campaign reporting."
      features={[
        "Audience and inventory curation",
        "Campaign planning and activation",
        "Display, video, mobile, and CTV/OTT opportunities",
        "Managed programmatic trading",
        "Campaign performance reporting",
      ]}
      ctas={[
        { label: "Plan a campaign with us", href: "#contact", primary: true },
        { label: "DSP login", href: "https://dsp.audiencestreet.ai/login", external: true },
      ]}
      video={{
        description:
          "A video for the TAS DSP & Audience Curation Platform will be added here. It will show campaign planning, audience and inventory curation, activation and reporting.",
      }}
    />
  </>
);

export default Products;
