import { useRef, useState } from "react";
import { Play, FileText, Film } from "lucide-react";

interface ProductVideoProps {
  src?: string;
  poster?: string;
  title: string;
  description: string;
}

/** Click-to-play product video with a text description for accessibility. Pass no src to show a placeholder. */
const ProductVideo = ({ src, poster, title, description }: ProductVideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [showText, setShowText] = useState(false);

  return (
    <div className="relative glass glow-frame rounded-3xl p-2.5 md:p-3">
      <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
        {src ? (
          <>
            <video
              ref={ref}
              src={src}
              poster={poster}
              controls={started}
              preload="none"
              playsInline
              className="w-full h-full object-cover"
              aria-label={title}
            />
            {!started && (
              <button
                type="button"
                onClick={() => {
                  setStarted(true);
                  ref.current?.play();
                }}
                className="absolute inset-0 flex items-center justify-center bg-background/30 hover:bg-background/15 transition-colors group"
                aria-label={`Play ${title}`}
              >
                <span className="w-16 h-16 md:w-20 md:h-20 rounded-full btn-hero flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Play className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground ml-1" />
                </span>
              </button>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-accent/15 to-primary/15">
            <Film className="w-10 h-10 text-primary mb-3" />
            <p className="font-semibold text-foreground">{title}</p>
            <p className="text-sm text-muted-foreground">Video coming soon</p>
          </div>
        )}
      </div>
      <button
        type="button"
        onClick={() => setShowText((v) => !v)}
        aria-expanded={showText}
        className="mt-3 ml-2 mb-1 inline-flex items-center text-sm font-medium text-primary hover:underline"
      >
        <FileText className="w-4 h-4 mr-1.5" />
        {showText ? "Hide video description" : "Read video description"}
      </button>
      {showText && <p className="mt-2 px-2 pb-2 text-sm text-muted-foreground leading-relaxed">{description}</p>}
    </div>
  );
};

export default ProductVideo;
